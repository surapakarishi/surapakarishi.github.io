export const SETPRODUCTS = (data)=>{
    return{
        type:"SETPRODUCTS",
        payload:data
    }
}


export const ADD = (item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

export const DELETE = (id) => {

    return{
        type:"REMOVE_CART",
        payload:id
    }

}

export const REMOVE = (item)=>{
    return{
        type:"REMOVE",
        payload:item
    }
}

export const REGISTER = (formData)=>{
    console.log(formData);
    return{
        type:"REGISTER",
        payload:formData
            
        
    }
}

// export const LOGIN = (loginUser)=>{
//     console.log(loginUser);
//     return{
//         type:"LOGIN",
//         payload:loginUser
//     }
// }