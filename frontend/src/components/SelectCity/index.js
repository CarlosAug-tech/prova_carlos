import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Select } from './styles';

export default function SelectCity({ cityID, setCityID, errorSelectCity }) {
  const [citys, setCitys] = useState([]);

  const loadCitys = useCallback(async () => {
    const response = await api.get('/cidades');
    const data = response.data.map((city) => ({
      ...city,
    }));

    setCitys(data);
  }, []);

  useEffect(() => {
    loadCitys();
  }, [loadCitys]);

  return (
    <>
      {cityID ? (
        <Select
          onChange={(e) => setCityID(e.target.value)}
          errorSelectCity={errorSelectCity}
        >
          {citys
            .filter((city) => city.id === cityID)
            .map((city) => (
              <option value={city.id} key={city.id}>
                {city.nome}
              </option>
            ))}
          {citys &&
            citys.map(
              (city) =>
                city.id !== cityID && (
                  <option key={city.id} value={city.id}>
                    {city.nome}
                  </option>
                ),
            )}
        </Select>
      ) : (
        <Select
          onChange={(e) => setCityID(e.target.value)}
          errorSelectCity={errorSelectCity}
        >
          <option value="">Selecione uma cidade</option>
          {citys.map((city) => (
            <option key={city.id} value={city.id}>
              {city.nome}
            </option>
          ))}
        </Select>
      )}
      {cityID && (
        <Select value={cityID}>
          {citys.map((city) => (
            <option key={city.id} value={city.id}>
              {city.uf}
            </option>
          ))}
        </Select>
      )}
    </>
  );
}

SelectCity.propTypes = {
  cityID: PropTypes.number.isRequired,
  setCityID: PropTypes.func.isRequired,
  errorSelectCity: PropTypes.bool,
};
