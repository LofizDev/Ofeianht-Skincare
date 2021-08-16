import * as actionTypes from './Shopping-types'

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: 'skincare1'
        },
        {
            id: 2,
            title: 'skincare2'
        },
        {
            id: 3,
            title: 'skincare3'
        }
    ],       // {id,title,descr,price,img}
    cart: [],          // {id,title,descr,price,img,quantity}
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            // Get items data from the products array
            const item = state.products.find(item => item.id === action.payload.id)
            //Check if item is in cart  already
            const inCart = state.cart.find((item) => {
                return item.id === action.payload.id ? true : false
            })

            return {
                ...state,
                cart: inCart
                    ? state.cart.map(item => item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 } : item)
                    : [...state.cart, { ...item, qty: 1 }]
            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id
                    ? { ...item, qty: action.payload.qty }
                    : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default: return state
    }
}

export default shopReducer