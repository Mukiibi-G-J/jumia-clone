import { Switch } from '@material-ui/core';
import { createContext, useReducer } from 'react';

export const Store = createContext();

//?
const initialState = {
  cart: {
    cartItems: ['hello', 'hello'],
  },
};

function reducer(action, state) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      return { ...state };
    }

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
