// const data = [
//     {
//         name: 'pawel',
//         city: 'wg',
//         age: 36,
//         hobbies: ["js", "programming", "drugs"]
//     },
//     {
//
//         name: 'sebastian',
//         city: 'elk',
//         age: 30,
//         hobbies: ["games", "programming", "cooking"]
//     },
//     {
//         name: 'artur',
//         city: 'katowice',
//         age: 27,
//         hobbies: ['ski', 'programming', 'games'],
//
//     },
//     {
//         name: 'jarek',
//         city: 'oln',
//         age: 28,
//         hobbies: ["js", "react", "football"]
//     },
//     {
//         name: 'Tymek',
//         city: 'Lodz',
//         age: 22,
//         hobbies: ["crypto", "cooking", "swimming"]
//     },
//     {
//         name: 'mateusz',
//         city: 'warszawa',
//         age: 31,
//         hobbies: ['motoryzacja', 'ksiazka', 'programowanie']
//     },
//     {
//         name: 'marcin',
//         city: 'wg',
//         age: 23,
//         hobbies: ["js", "programming", "drugs"]
//     },
//     {
//         name: 'matylda',
//         city: 'warszawa',
//         age: 29,
//         hobbies: ["js", "sport", "szycie"]
//     },
//     {
//         name: "adrian",
//         city: "wloclawek",
//         age: 30,
//         hobbies: ["books", "games", "moregames"]
//     },
//     {
//         name: 'kasper',
//         city: 'poznań',
//         age: 34,
//         hobbies: ["programming", "snowboarding"]
//     },
//     {
//         name: 'pawel',
//         city: 'katowice',
//         age: 21,
//         hobbies: ["programming", "gym", "cooking"]
//     },
//     {
//         name: 'kinga',
//         city: 'waw',
//         age: 39,
//         hobbies: ["climmbing", "joga", "art"]
//     },
//     {
//         name: 'Marcin',
//         city: 'Wr',
//         age: 22,
//         hobbies: ["games", "react", "football"]
//     },
//     {
//         name: 'Piotr',
//         city: 'Konin',
//         age: 28,
//         hobbies: ["js", "football", "tosty"]
//     },
//     {
//         name: 'Dorota',
//         city: 'Warszawa',
//         age: 36,
//         hobbies: ["js", "programming", "horse riding"]
//     },
//     {
//         name: 'janek',
//         city: 'torun',
//         age: 31,
//         hobbies: ["it", "history", "comiks"]
//
//     }
// ]

// let sum = 0;
//
// for (let i = 0; i < data.length; i++) {
//     sum += data[i].age
// }
//
// console.log(sum / data.length);

// const result = data.map(person => {
//     return person.age
// })
// console.log(result)

// [
// 36, 30, 27, 28, 22, 31,
//     23, 29, 30, 34, 21, 39,
//     22, 28, 36, 31
// ]
// const sum2 = result.reduce((accumulator, current, id, arr) => {
//     return accumulator + current
// }, 0)


// const sum2 = data.reduce((acc, ce) => acc + ce.age, 0)
// console.log(sum2 / data.length);

// const res = data.filter(item => item.age < 30).map(elo => `<li className="${elo.hobbies[0]}">${elo.city}</li>`);
// console.log(res);

// const res = [...(new Set(data.map(element => element.hobbies).flat(2)))];
// console.log(res);

// unique -> new Set
// transform data -> map
// delete date -> filter
// reduce date -> reduce


// Znajdz imie człowieka z najdłuższym hobby
// Policz średnia wieku ludzi lubiących js.

// const sentence = (name) =>{
//     const fullSentence = (city) =>{
//         return `Mam na imie ${name} i pochodze z ${city}`
//     }
//
//     return fullSentence;
// }
//
// const s = sentence('paweł')
// console.log(s('Wroclaw'));
// const x = s('wg')
// console.dir(s)

// Closure dostęp do zmiennych spoza aktualnie wykonywanego zasięgu

// Tworzenie:
// 1. muszą min 2 funkcje, inner, outer
// 2. fn outer musi zwracać deklaracje fn inner
// 3. fn inner musi używać czegoś z fn outer

// Pros/cons
// 1. Persistence (trwałość)
// 2. memory leak

// const generateUUID = () =>{
//     let id = 0
//     return () => {
//         const result = id;
//         id++
//         return result
//     }
// }
// const uuid = generateUUID()
// console.log(uuid())
// console.log(uuid())
// console.log(uuid())
// console.log(uuid())

const generateUUID = (id  = 0) =>{
    return (newId) => {
        if (newId){
            id = newId
        }
        const result = id;
        id++
        return result
    }
}
const uuid = generateUUID()
console.log(uuid())
console.log(uuid(12))
console.log(uuid())
console.log(uuid(50))