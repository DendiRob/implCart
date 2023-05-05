const menuLoaded = (newMenu) => {
    return{
        type: 'MENU_LOADED',
        payload:newMenu
    }
}
const menuRequested = () => {
    return{
        type: 'MENU_REQUESTED'
    }
}
const addedToCart = (id,price) => {
    return{
        type: 'ITEM_ADD_TO_CART',
        payload: id,
        price: price,
    }
}
const deleteFromCart = (id, sumPrices) => {
    return{
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id,
        sumPrices: sumPrices
    }
}
export {
    menuLoaded,
    menuRequested,
    addedToCart,
    deleteFromCart
};