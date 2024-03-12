const superHeros: string[] = []
// const heroPower: number[] = []
// alternative
const heroPower: Array<number> = []


superHeros.push('ironamn')
heroPower.push(2)

type User = {
    name: string;
    isActive: boolean;
}

const allusers: User[] = []

allusers.push({name: 'mahir', isActive: true})


const MLModels: number[][] =[
    [255,255,255],
    []
]


const data: number[]= [1,2,3,4]
const data2: string[]= ['1','2','3','4']
const data3: string[]|number[]= [1,2,3,4] //it can either be an array of numbers or an array of strings. Can not have mixed values
const data4: (number|string)[]= [1,2,3,'4'] //the array can have mixed values of number and string
export{}