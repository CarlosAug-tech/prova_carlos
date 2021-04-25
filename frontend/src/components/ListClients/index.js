import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { formatSalary } from '../../utils/formatSalary';

import { Container, TableClients, NoItems } from './styles';
import Modal from '../Modal';
import { useToast } from '../../hooks/toast';
import LoadingContainer from '../LoadingContainer';

export default function ListClients({
  typeSearchClient,
  valueCPForRG,
  valueCity,
  valueSalary,
}) {
  const { addToast } = useToast();

  const [clients, setClients] = useState([]);
  const [filterClients, setFilterClients] = useState([]);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [itemID, setItemID] = useState('');
  const [loading, setLoading] = useState(true);

  const loadClients = useCallback(async () => {
    const response = await api.get('/clientes');
    const data = response.data.map((client) => ({
      ...client,
      salarioFormatado: formatSalary(client.salario),
    }));

    setClients(data);
    setFilterClients(data);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      loadClients();
      setLoading(false);
    }, 3000);
  }, [loadClients]);

  const searchClient = useCallback(() => {
    if (valueCity || valueSalary || valueCPForRG) {
      if (valueCity && valueSalary === '' && valueCPForRG === '') {
        setFilterClients(
          clients.filter(
            (client) =>
              client.cidade.nome
                .toLowerCase()
                .includes(valueCity.toLowerCase()) ||
              client.cidade.uf.toLowerCase().includes(valueCity.toLowerCase()),
          ),
        );
      } else if (valueSalary && valueCity === '' && valueCPForRG === '') {
        setFilterClients(
          clients.filter((client) =>
            client.salario.toLowerCase().includes(valueSalary.toLowerCase()),
          ),
        );
      } else if (
        typeSearchClient === 'RG' &&
        valueCPForRG &&
        valueCity === '' &&
        valueSalary === ''
      ) {
        setFilterClients(
          clients.filter((client) =>
            client.rg.toLowerCase().includes(valueCPForRG.toLowerCase()),
          ),
        );
      } else if (
        typeSearchClient === 'CPF' &&
        valueCPForRG &&
        valueCity === '' &&
        valueSalary === ''
      ) {
        setFilterClients(
          clients.filter((client) =>
            client.cpf.toLowerCase().includes(valueCPForRG.toLowerCase()),
          ),
        );
      } else if (valueCity && valueCPForRG && valueSalary === '') {
        setFilterClients(
          clients.filter(
            (client) =>
              (typeSearchClient === 'CPF'
                ? client.cpf.toLowerCase() === valueCPForRG.toLowerCase()
                : client.rg.toLowerCase() === valueCPForRG.toLowerCase()) &&
              (client.cidade.nome.toLowerCase() === valueCity.toLowerCase() ||
                client.cidade.uf.toLowerCase() === valueCity.toLowerCase()),
          ),
        );
      } else if (valueSalary && valueCity && valueCPForRG === '') {
        setFilterClients(
          clients.filter(
            (client) =>
              client.salario.toLowerCase() === valueSalary.toLowerCase() &&
              (client.cidade.nome.toLowerCase() === valueCity.toLowerCase() ||
                client.cidade.uf.toLowerCase() === valueCity.toLowerCase()),
          ),
        );
      } else if (valueSalary && valueCity && valueCPForRG) {
        setFilterClients(
          clients.filter(
            (client) =>
              client.salario.toLowerCase() === valueSalary.toLowerCase() &&
              (typeSearchClient === 'CPF'
                ? client.cpf.toLowerCase() === valueCPForRG.toLowerCase()
                : client.rg.toLowerCase() === valueCPForRG.toLowerCase()) &&
              (client.cidade.nome.toLowerCase() === valueCity.toLowerCase() ||
                client.cidade.uf.toLowerCase() === valueCity.toLowerCase()),
          ),
        );
      }
    } else {
      setFilterClients(clients);
    }
  }, [typeSearchClient, valueCPForRG, valueCity, valueSalary]);

  useEffect(() => {
    searchClient();
  }, [searchClient]);

  const handleDelete = useCallback(async (id) => {
    try {
      await api.delete(`/clientes/${id}`);
      setFilterClients((state) => state.filter((client) => client.id !== id));
      setIsActiveModal(false);
      addToast({
        type: 'success',
        title: 'Registro removido com sucesso!',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Falha ao remover o registro!',
        description: 'Oops.. Houve um erro ao remover o registro',
      });
    }
  }, []);

  const handleOpenModal = useCallback(
    (id) => {
      setItemID(id);
      setIsActiveModal(true);
    },
    [itemID],
  );

  return (
    <>
      {loading ? (
        <LoadingContainer loading={loading} />
      ) : (
        <Container>
          {filterClients.length > 0 ? (
            <TableClients>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Sexo</th>
                  <th>CPF</th>
                  <th>RG</th>
                  <th>Data de Nascimento</th>
                  <th>Salário</th>
                  <th>Cidade</th>
                  <th>UF</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                {filterClients.map((client) => (
                  <tr key={client.id}>
                    <td>{client.nome}</td>
                    <td>{client.sexo}</td>
                    <td>{client.cpf}</td>
                    <td>{client.rg}</td>
                    <td>{client.data_nascimento}</td>
                    <td>{client.salarioFormatado}</td>
                    <td>{client.cidade.nome}</td>
                    <td>{client.cidade.uf}</td>
                    <td>
                      <Link
                        to={{
                          pathname: `/client/edit`,
                          client,
                        }}
                      >
                        Editar
                        <FaEdit />
                      </Link>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleOpenModal(client.id)}
                      >
                        Deletar
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableClients>
          ) : (
            <NoItems>
              <span>Não possui nenhum registro !!</span>
            </NoItems>
          )}
        </Container>
      )}
      <Modal
        itemID={itemID}
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
        handleDelete={handleDelete}
      />
    </>
  );
}

ListClients.propTypes = {
  typeSearchClient: PropTypes.string,
  valueCPForRG: PropTypes.string,
  valueCity: PropTypes.string,
  valueSalary: PropTypes.string,
};
