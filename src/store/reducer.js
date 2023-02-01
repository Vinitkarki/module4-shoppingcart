
export const rootReducer=(state=[],actions)=>{
    switch (actions.type) {
        case 'ADD_PRODUCT_TO_CART':
          return [...state, actions.payload];
          case 'REMOVE_FROM_CART':
         return state.filter(product => product.id !== actions.payload)
        default:
          return state;
      }
};