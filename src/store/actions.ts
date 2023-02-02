import {Alert} from 'react-native';

export const ADD_CRYPTO = 'ADD_CRYPTO';
export const DELETE_CRYPTO = 'DELETE_CRYPTO';
export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';

export const addCrypto: Function = (key, addedCryptos) => {
  return async dispatch => {
    try {
      const resp = await fetch(
        `https://data.messari.io/api/v1/assets/${key}/metrics/market-data`,
      );
      if (resp.ok) {
        const ResJson = await resp.json();
        const Found = addedCryptos.filter(
          item => item.Asset.id === ResJson.data.Asset.id,
        );
        if (Found.length > 0) {
          Alert.alert(`${Found[0].Asset.name} is already in your list.`);
        } else {
          dispatch({type: ADD_CRYPTO, payload: ResJson.data});
        }
      } else {
        Alert.alert(
          `We can't find ${key}, are you sure it's spelled this way?`,
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteCrypto: Function = (Key, Cryptos) => {
  const NewList = Cryptos.filter(item => item.Asset.id !== Key);
  return dispatch => {
    dispatch({type: DELETE_CRYPTO, payload: NewList});
  };
};

export const updateCurrencies: Function = () => {
  return async dispatch => {
    const resp = await fetch(
      'https://data.messari.io/api/v2/assets?fields=id,metrics/market_data',
    );
    const resJson = await resp.json();
    console.log(resJson);
    dispatch({type: UPDATE_CURRENCIES, payload: resJson.data});
  };
};
