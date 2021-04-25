import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FaUser,
  FaBirthdayCake,
  FaIdCard,
  FaMoneyBillWave,
} from 'react-icons/fa';

import * as Yup from 'yup';
import { Form } from '@unform/web';

import api from '../../../services/api';
import { useToast } from '../../../hooks/toast';

import SelectCity from '../../../components/SelectCity';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Container, SelectSexo } from './styles';

export default function RegisterClient() {
  const formRef = useRef(null);
  const [sexo, setSexo] = useState('');
  const [cityID, setCityID] = useState('');
  const [errorSelectCity, setErrorSelectCity] = useState(false);
  const [errorSelectSexo, setErrorSelectSexo] = useState(false);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (formData) => {
      setErrorSelectCity(false);
      setErrorSelectSexo(false);
      const { nome, rg, cpf, data_nascimento, salario } = formData;

      try {
        formRef.current?.setErrors({});

        if (cityID === '') {
          setErrorSelectCity(true);
        }

        if (sexo === '') {
          setErrorSelectSexo(true);
        }

        const schema = Yup.object().shape({
          nome: Yup.string().required('Este campo é obrigatório!'),
          sexo: Yup.string().required('Este campo é obrigatório!'),
          rg: Yup.string().required('Este campo é obrigatório!'),
          cpf: Yup.string().required('Este campo é obrigatório!'),
          data_nascimento: Yup.string().required('Este campo é obrigatório!'),
          salario: Yup.number().required('Este campo é obrigatório!'),
          cidade_id: Yup.number().required('Este campo é obrigatório!'),
        });

        await schema.validate(
          {
            nome,
            sexo,
            rg,
            cpf,
            data_nascimento,
            salario,
            cidade_id: cityID,
          },
          {
            abortEarly: false,
          },
        );

        await api.post('/clientes', {
          nome,
          sexo,
          rg,
          cpf,
          salario,
          data_nascimento,
          cidade_id: cityID,
        });
        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso!',
        });
        history.push('/clients');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Falha ao realizar o cadastro!',
          description:
            'Oops.. Houve um erro ao cadastrar, verifique os dados informados!',
        });
      }
    },
    [cityID, sexo],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h3>Cadastro de Clientes</h3>
        <Input type="text" name="nome" labelText="Nome:" icon={FaUser} />
        <SelectSexo
          onChange={(e) => setSexo(e.target.value)}
          errorSelectSexo={errorSelectSexo}
        >
          <option value="">Selecione o sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </SelectSexo>
        <Input type="text" name="cpf" labelText="CPF:" icon={FaIdCard} />
        <Input type="text" name="rg" labelText="RG:" icon={FaIdCard} />
        <Input
          type="text"
          name="data_nascimento"
          labelText="Data de Nascimento:"
          icon={FaBirthdayCake}
        />
        <Input
          type="number"
          name="salario"
          labelText="Salario:"
          icon={FaMoneyBillWave}
        />
        <SelectCity
          cityID={cityID}
          setCityID={setCityID}
          errorSelectCity={errorSelectCity}
        />
        <Button type="submit">Cadastrar Cliente</Button>
      </Form>
    </Container>
  );
}
