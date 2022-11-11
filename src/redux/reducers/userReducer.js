const intialState = {
    users:[],
    
};

export const userReducer = (state = intialState,action)=>{
 switch(action.type){
    case "REGISTER":
        console.log(action.payload);
        state.users.push(action.payload)
        console.log(state.users);
        return{
             ...state,
             users:[...state.users]
        
        }
        
    // case "LOGIN":
    //     state.users.push(action.payload)
    //     return{
    //      ...state,
    //      user:[...state.users]
        
    //     } 
        
    default:
        return state;    
 }
}  