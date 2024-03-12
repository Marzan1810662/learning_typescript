type User ={
    readonly _id : string; //readonly can not change value
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetail?: number; //optional property
}

let myUser: User = {
    _id: '1234',
    name: 'm',
    email: 'm@mail.com',
    isActive: false
}

// myUser._id = 'fjlsjlk'
myUser.email = 'mahir@mail.com'

let myUser2: User = {
    _id : '5678',
    name: 'marzan',
    email: 'marzan@mail.com',
    isActive: true,
}

export{}