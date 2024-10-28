export class Cart {
    static items = [];

    static add(item) {
        Cart.items.push(item);
        console.log("Add", Cart.items);

    }

    static remove(itemId) {
        console.log("Remove before", Cart.items);
        Cart.items = Cart.items.filter(item => item.id !== itemId);
        console.log("Remove after", Cart.items);
    }

    static get() {
        return Cart.items;
    }

    static doItemsExists() {
        return Cart.get() && Cart.get().length > 0 || false;
    }

    static isItemExists(itemId) {
        return Cart.items.some(item => item.id === itemId);
    }
}
