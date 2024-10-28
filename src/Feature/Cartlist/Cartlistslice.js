import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const existitem = state.items.find(item => item.id === action.payload);
            if (existitem) {
                existitem.quantity += 1;
                console.log(existitem.quantity);
            } else {
                const item = {
                    id: action.payload.id,
                    cart_item: action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price,
                    dis_price: action.payload.dis_price,
                    discount:action.payload.discount
                };
                state.items.push(item);
                console.log("addtocart", item);
            }
        },
        removecart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
            console.log("removeCart", state.items);
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity < 5) {
                item.quantity += 1;
                item.totalPrice = item.quantity * item.cart_item.price;
                item.dis_price=item.quantity * item.cart_item.dis_price;
            } else {
                alert('sorry, each item is limited to 5 units')
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.totalPrice = item.quantity * item.cart_item.price;
                item.dis_price=item.quantity * item.cart_item.dis_price;
            }
        }

    }

});

export const getItems = (state) => state.cart.items;

export const doItemsExist = (state) => state.cart.items.length > 0 || false;

export const isItemExists = (state, itemId) =>
    state.cart.items.some(item => item.id === itemId);

export const { addtoCart, removecart, incrementQuantity, decrementQuantity } = cartSlice.actions;


export default cartSlice.reducer;