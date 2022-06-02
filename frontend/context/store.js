import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';

export const Store = createContext();

//?
const initialState = {
  cart: {
    //! fetching cart items from the cookies
    cartItems: Cookies.get('cartItems')
      ? JSON.parse(Cookies.get('cartItems'))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      //! checking whether the item exist
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      //! we are getting how many times the item exist
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      //! saving cart item in the cookies
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
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
