const intialState = {
    products:[],
    carts: []
};


export const cartReducer = (state=intialState,action)=>{
    switch(action.type){
     
        case "SETPRODUCTS":
            return{
                ...state,
                products:action.payload
            }


        case"ADD_CART":

        const ItemIndex = state.carts.findIndex((Item)=>Item.id === action.payload.id);

        if(ItemIndex>=0){
            state.carts[ItemIndex].quantity +=1
        }
        else{
            const temp = {...action.payload, quantity:1}

            return{
                ...state,
                carts:[...state.carts,temp]
            }
        }
       

        case "REMOVE_CART":
            const data = state.carts.filter((item)=>item.id !== action.payload)
            return {
                ...state,
                carts:data
            }
        
        case "REMOVE":
            const ItemIndex_dec = state.carts.findIndex((Item)=>Item.id === action.payload.id);   
            if(state.carts[ItemIndex_dec].quantity>=1){
              const delItem = state.carts[ItemIndex_dec].quantity -=1
              console.log([...state.carts,delItem]);
              return{
                ...state,
                carts:[...state.carts]
              }
            }



        default: 
        return state;
    }
}