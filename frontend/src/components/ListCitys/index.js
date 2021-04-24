import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

import api from '../../services/api';

import { Container, TableCitys } from './styles';
import Modal from '../Modal';
import { useToast } from '../../hooks/toast';

export default function ListCitys({ valueCity }) {
  const { addToast } = useToast();

  const [citys, setCitys] = useState([]);
  const [filterCitys, setFilterCitys] = useState([]);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [itemID, setItemID] = useState('');

  const loadCitys = useCallback(async () => {
    const response = await api.get('/cidades');
    const data = response.data.map((city) => ({
      ...city,
    }));

    setCitys(data);
    setFilterCitys(data);
  }, []);

  useEffect(() => {
    loadCitys();
  }, [loadCitys]);

  const searchCity = useCallback(() => {
    if (valueCity) {
      setFilterCitys(
        citys.filter(
          (city) =>
            city.nome.toLowerCase().includes(valueCity.toLowerCase()) ||
            city.uf.toLowerCase().includes(valueCity.toLowerCase()),
        ),
      );
    } else {
      setFilterCitys(citys);
    }
  }, [valueCity]);

  useEffect(() => {
    searchCity();
  }, [searchCity]);

  const handleDelete = useCallback(async (id) => {
    try {
      await api.delete(`/cidades/${id}`);
      setFilterCitys((state) => state.filter((city) => city.id !== id));
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
      <Container>
        {filterCitys.length > 0 ? (
          <TableCitys>
            <thead>
              <tr>
                <th>Nome</th>
                <th>UF</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {filterCitys.map((city) => (
                <tr key={city.id}>
                  <td>{city.nome}</td>
                  <td>{city.uf}</td>
                  <td>
                    <Link
                      to={{
                        pathname: '/city/edit',
                        city,
                      }}
                    >
                      Editar
                      <FaEdit />
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleOpenModal(city.id)}
                    >
                      Excluir
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableCitys>
        ) : (
          <span>Não possui nenhum registro</span>
        )}
      </Container>
      <Modal
        itemID={itemID}
        handleDelete={handleDelete}
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
      />
    </>
  );
}

ListCitys.propTypes = {
  valueCity: PropTypes.string,
};
