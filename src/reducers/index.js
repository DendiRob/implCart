const initialState = {
    menu: [],
    loading: true,
    items: [],
    total: 0
}

const reduser = (state = initialState, action) => {
    switch(action.type){
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'ITEM_ADD_TO_CART':
            let size = 1;
            let addedPrices = state.total + action.price;
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                amount: size,
                sumPrices: item.price
            };
            if(state.items.find(item => item.id === id)){
                const itemAmount = state.items.find(item => item.id === id);
                itemAmount.amount += 1
                itemAmount.sumPrices += itemAmount.price;
                return {
                    ...state,
                    total: addedPrices,
                    items: [
                     ...state.items
                    ]   
                } 
            }else{
                return{
                    ...state,
                    total: addedPrices,
                    items: [
                        ...state.items,
                        newItem 
                    ]
                };
            }
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            let removePrices = state.total - action.sumPrices;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            return{
                ...state,
                total: removePrices,
                items: [
                    ...state.items.slice(0, itemIndex), // заканчивая, но не включая itemIdnex
                    ...state.items.slice(itemIndex + 1)
                ]
            };
        default:
            return state
    }
}

export default reduser;