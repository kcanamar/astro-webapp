import { computed, map } from 'nanostores';

export const $cart = map<Record<number, CartItem>>({});

export function addItemToCart(item: ShopItem) {

    // check if the item is already in the cart
    // If present increment the quantity
    const cartItem = $cart.get()[item.id];
    const quantity = cartItem ? cartItem.quantity : 0;

    $cart.setKey(item.id, {
        item,
        quantity: quantity + 1,
    })
}

export function removeItemFromCart(itemId: number) {
    // @ts-ignore
    $cart.setKey(itemId, undefined);
}

// callback will execute on every change in the provided store
export const subtotal = computed($cart, (entries) => {

    let subtotal = 0;
    Object.values(entries).forEach((entry) => {
        if(!entry) {
            return
        }

        subtotal += entry.quantity * entry.item.price
    })

    return subtotal
})