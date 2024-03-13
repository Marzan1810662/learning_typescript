const user: (string|number)[] = [1,'jhjhkj']

let tUser: [string,number,boolean] // tUser is a tuple where the order has to be string, number and then boolean. we can not change the order and the number of element in this tuple will always be three.

tUser = ['mahir',1111, true]

let rgb: [number,number,number] =[255,123,112]

type User = [number, string]

const newuser: User = [112, 'example@google.com']
newuser[1]= 'm@m.com'

newuser.push(12)// tuple also has the same mathods as arrays which creates problem because tuple is all all about element's position and length. but allowing the array methods can mess with the principle of tuple.






export{}