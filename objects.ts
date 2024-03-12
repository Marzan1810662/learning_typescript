const user = {
    name: 'mahir',
    email: 'mahir@email.com',
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) {

}

//  createUser({name: 'mahir', isPaid: false,email: 'm@m.com'})
let newUser = { name: 'mahir', isPaid: false, email: 'm@m.com' }

createUser(newUser)

function createCourse(): { name: string, price: number } {
    return { name: 'reactjs', price: 399 }
}


type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string
}
type creditCardDetails = cardNumber & cardDate & {
    cvv: number
}

let myCardDetails: creditCardDetails = {
    cardnumber: '1244',
    cardDate: '12/3/2345',
    cvv: 5664

}

export { }