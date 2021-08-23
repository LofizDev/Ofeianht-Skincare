import { shoppingData } from './Shopping-data';
import * as actionTypes from './Shopping-types'

const INITIAL_STATE = {
    products: shoppingData,       // {id,title,descr,price,img}
    cart: [],          // {id,title,descr,price,img,quantity}
    compare: [],    /// {id,title,descr,price,img,quantity}
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // ADD TO CART

        case actionTypes.ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };

        // COMPARE FROM CART

        case actionTypes.COMPARE_FROM_CART:
            const items = state.products.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inStoreCompare = state.compare.find((items) =>
                items.id === action.payload.id ? true : false
            );

            return {
                ...state,
                compare: inStoreCompare
                    ? state.compare.map((items) =>
                        items.id === action.payload.id
                            ? { ...items, qty: items.qty + 1 }
                            : items
                    )
                    : [...state.compare, { ...items, qty: 1 }],
            };

        // REMOVE FROM COMPARE
        case actionTypes.REMOVE_FROM_COMPARE:
            return {
                ...state,
                compare: state.compare.filter(item => item.id !== action.payload.id)
            }


        // REMOVE FROM CART

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }

        // DECREASE FROM CART
        
        case actionTypes.MINUS_FROM_CART:
            const itemm = state.products.find(
                (product) => product.id === action.payload.id
            );
            const inCartt = state.cart.find((itemm) =>
                itemm.id === action.payload.id ? true : false
            );
            return {
                ...state,
                cart: inCartt
                    ? state.cart.map((item) =>
                        itemm.id === action.payload.id && item.qty === 1 ? item : item
                            ? { ...itemm, qty: item.qty - 1 }
                            : item
                    )
                    : [...state.cart, { ...itemm, qty: item.qty }]
            };

        // ADJUST QUANTITY

        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id
                    ? { ...item, qty: action.payload.qty }
                    : item)
            }

        // LOAD CURRENT ITEM

        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default: return state
    }
}

export default shopReducer