import React, { useCallback, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  FaBirthdayCake,
  FaIdCard,
  FaMoneyBillWave,
  FaUser,
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

export default function EditClient() {
  const { client } = useLocation();
  const history = useHistory();
  const formRef = useRef(null);
  const [sexo, setSexo] = useState(client.sexo);
  const [cityID, setCityID] = useState(client.cidade.id);
  const [errorSelectCity, setErrorSelectCity] = useState(false);
  const [errorSelectSexo, setErrorSelectSexo] = useState(false);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (formData) => {
      setErrorSelectCity(false);
      setErrorSelectSexo(false);
      const { nome, cpf, rg, data_nascimento, salario } = formData;

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

        await api.put(`/clientes/${client.id}`, {
          nome,
          sexo,
          cpf,
          rg,
          data_nascimento,
          salario,
          cidade_id: cityID,
        });
        addToast({
          type: 'success',
          title: 'Cliente editado com sucesso!',
        });
        history.push('/clients');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Cliente não foi editado!',
          description:
            'Oops.. Houve um erro ao editar o cliente, verifique os dados informados',
        });
      }
    },
    [cityID, sexo],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={client}>
        <h3>Editar Cliente</h3>
        <Input type="text" name="nome" labelText="Nome:" icon={FaUser} />
        <SelectSexo
          onChange={(e) => setSexo(e.target.value)}
          value={sexo}
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
          min="1"
          icon={FaMoneyBillWave}
        />
        <SelectCity
          cityID={cityID}
          setCityID={setCityID}
          errorSelectCity={errorSelectCity}
        />
        <Button type="submit">Editar Cliente</Button>
      </Form>
    </Container>
  );
}
