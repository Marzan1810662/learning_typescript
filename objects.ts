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

export { }