import React, { useCallback, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FaCity, FaMapMarkedAlt } from 'react-icons/fa';

import * as Yup from 'yup';
import { Form } from '@unform/web';

import api from '../../../services/api';
import { useToast } from '../../../hooks/toast';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Container } from './styles';

export default function EditCity() {
  const { city } = useLocation();
  const history = useHistory();
  const formRef = useRef(null);

  const { addToast } = useToast();

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

      await api.put(`/cidades/${city.id}`, { nome, uf });
      addToast({
        type: 'success',
        title: 'Cidade editada com sucesso!',
      });
      history.push('/citys');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Cidade não foi editada!',
        description:
          'Oops.. Houve um erro ao editar a cidade, verifique os dados informados',
      });
    }
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={city}>
        <h3>Editar Cidade</h3>
        <Input type="text" name="nome" labelText="Nome:" icon={FaCity} />
        <Input type="text" name="uf" labelText="UF:" icon={FaMapMarkedAlt} />
        <Button type="submit">Editar Cidade</Button>
      </Form>
    </Container>
  );
}
