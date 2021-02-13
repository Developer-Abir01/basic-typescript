let age:number;




function fullName (firstName:string, lastName:string){
    return firstName + ' ' + lastName;
}

const user:string = fullName ('Martin',' rock');


interface Player {
    club: string,
    name:string,
    salary: number,
    wife?: string,
    isPlaying:boolean

}

const massy:Player = {
    club:"real Mather",
    name: "massy",
    salary:455444,
    wife:"single",
    isPlaying:true
}
const ronald:Player ={
    club: "name of club",
    name:"ronald",
    salary:797988,
    isPlaying:true
}

function getBouns (player:{age:number}){
    return player.age 
}