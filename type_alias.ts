type User ={
    name: string,
    email: string,
    isActive: boolean
}

type Mystring = string

function createUser(user: User):User{
    return {name: '',email: '', isActive:true}
}

createUser({name: '',email: '', isActive:true})


export{}