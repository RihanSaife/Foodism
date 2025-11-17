import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// Define the new coupon codes as requested
const COUPONS = {
  'WEEKEND20': { discount: 20, type: 'percentage' }, // 20% off
  'FIRST50': { discount: 50, type: 'percentage' }, // 50% off
  'HAPPY24': { discount: 30, type: 'percentage' } // 30% off
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        coupon: null
      };
    
    case 'APPLY_COUPON':
      return {
        ...state,
        coupon: action.payload
      };
    
    case 'REMOVE_COUPON':
      return {
        ...state,
        coupon: null
      };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [], coupon: null }, () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : { cart: [], coupon: null };
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const applyCoupon = (couponCode) => {
    const coupon = COUPONS[couponCode.toUpperCase()];
    if (coupon) {
      dispatch({ type: 'APPLY_COUPON', payload: { code: couponCode.toUpperCase(), ...coupon } });
      return { success: true, message: 'Coupon applied successfully!' };
    }
    return { success: false, message: 'Invalid coupon code.' };
  };

  const removeCoupon = () => {
    dispatch({ type: 'REMOVE_COUPON' });
  };

  const getCartTotal = () => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartTotalWithDiscount = () => {
    const subtotal = getCartTotal();
    if (state.coupon) {
      if (state.coupon.type === 'percentage') {
        return subtotal - (subtotal * state.coupon.discount / 100);
      } else if (state.coupon.type === 'flat') {
        return Math.max(0, subtotal - state.coupon.discount);
      }
    }
    return subtotal;
  };

  const getCouponDiscount = () => {
    const subtotal = getCartTotal();
    if (state.coupon) {
      if (state.coupon.type === 'percentage') {
        return subtotal * state.coupon.discount / 100;
      } else if (state.coupon.type === 'flat') {
        return Math.min(subtotal, state.coupon.discount);
      }
    }
    return 0;
  };

  const getCartCount = () => {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        coupon: state.coupon,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyCoupon,
        removeCoupon,
        getCartTotal,
        getCartTotalWithDiscount,
        getCouponDiscount,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;