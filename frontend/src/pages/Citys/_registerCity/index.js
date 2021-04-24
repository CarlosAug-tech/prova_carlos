import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FaCity, FaMapMarkedAlt } from 'react-icons/fa';

import * as Yup from 'yup';
import { Form } from '@unform/web';

import api from '../../../services/api';
import { useToast } from '../../../hooks/toast';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Container } from './styles';

export default function RegisterCity() {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (formData) => {
    const { nome, uf } = formData;

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required('Este campo é obrigatório!'),
        uf: Yup.string()
          .length(2, 'Maximo de caracteres excedido')
          .required('Este campo é obrigatório!'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      await api.post('/cidades', { nome, uf });
      addToast({
        type: 'success',
        title: 'Cidadade Cadastrada com sucesso!!',
      });
      history.push('/citys');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Falha ao cadastrar a cidade',
        description:
          'Oops.. Houve um erro ao cadastrar a cidade, verifique os dados informados!',
      });
    }
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h3>Cadastro de Cidades</h3>
        <Input type="text" name="nome" labelText="Nome:" icon={FaCity} />
        <Input type="text" name="uf" labelText="UF:" icon={FaMapMarkedAlt} />
        <Button type="submit">Cadastrar Cidade</Button>
      </Form>
    </Container>
  );
}
