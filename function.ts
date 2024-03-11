function addTwo(num: number):number{
    return num +2
    // return 'blah'
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string, email:string,isPaid:Boolean) {
    
}

const loginUser =  (email: string, isPaid: Boolean = true) =>{}

let myVal= addTwo(5)
getUpper('blh blah')
signUpUser('Mahir', 'mahir@ElementInternals.com',false)
loginUser('m@mail.com' )

const getHello = (s: string):string =>{
    return ""
}

const heros = ['thor','spiderman','ironman']
heros.map((hero)=>{
    return `hero is ${hero}`
})

function consoleError(errmsg: string):void{
    console.log(errmsg);
}

function handleError(errmsg: string):never{
    throw new Error(errmsg)
}
export{}