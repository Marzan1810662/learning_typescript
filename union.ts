let score : number | string = 33

score = '55'
score = 44

type User = {
    name: string;
    id: number
}

type Admin = {
    userName: string;
    id: number
}

let mahir :User | Admin = {name: "mahir", id : 455}

mahir = {userName: 'MAK', id: 455}


// function getDbId(id: number | string){
//     // making api calls
//     console.log(`DB id is ${id}`);
// }


getDbId(3)
getDbId('3')

function getDbId(id: number | string){
    if (typeof id === "string"){
        id.toLowerCase()
    }
    else{
        id * 2
    }
}