
// const getData = () => {
// function getData(){
//     const data = yield fetch('http://api.nbp.pl/api/exchangerates/rates/A/USD/?format=json')
//     console.log(data);
// }
// const g = getData();
// g.next().value.then(e => e.json()).then(e => g.next(e));
// getData();

// async function getData2(){
//     const data = await  fetch (http://api.nbp.pl/api/exchangerates/rates/A/USD/?format=json');
//     const json = await  data.json()
//
//     console.log(json);
// }
//
// getData2()
// Await zawsze jest przed promisem! --------------------
//host
// const foo = () => {
//     Promise.resolve().then(e => console.log(1));
//
//     setTimeout(() => console.log(2));
//
//     Promise.resolve().then(e => console.log(3));
//
//     console.log(4);
// }
//
// foo();
//
// console.log(5);
// const squere = document.querySelector('#squere');
//
// setInterval(() => {
//     setTimeout(() => {
//         square.style.left = '200px';
//         setTimeout(() => {
//             square.style.top = '200px';
//             setTimeout(() => {
//                 square.style.left = '0px';
//                 setTimeout(() => {
//                     square.style.top = '0px';
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000);
// }, 8000)

// //Przykład Promise//
//
// const square = document.querySelector('#square');
// const counter = document.querySelector('#counter');
//
// const future = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("nie udało, lipton");
//     }, 500);
//
//     setTimeout(() => {
//         resolve("udało się");
//     }, 400);
// })
//
// future
//     .then(e => {
//         console.log(e)
//     })
//     .catch(e => {
//         console.log(e)
//     });
//
// console.log('elo synchroniczny kod');

// fetch('http://api.nbp.pl/api/exchangerates/rates/A/USD/?format=json')
//     .then(e => e.json()).then(e => console.log(e));

// const data = fetch('http://api.nbp.pl/api/exchangerates/rates/A/USD/?format=json');
// data
//     .then(response => response.json())
//     // .then(json => console.log(json));
//     .then(json => {
//         const result = json.rates[0].mid;
//         console.log();
//     })
//     .catch(e => console.log('Nie ma danych'));

// function *generateUUID() {
    // let id = 0;            //<------------nieskończona  pętla
    //
    // while(true) {
    //     yield id;
    //     id++;
    // }
    //------------yield----------------//
    // console.log(1);
    // yield 1
    // console.log(2);
    // yield 2
    // console.log(3);
}
// let a=10;
//  yield a
// let b = yield a + 5;yield b
//
//
// const g = generateUUID();
// console.log(g);               //<=========generuje kiedy chcemy
// console.log(g.next());
// console.log(g.next());
// console.log(g.next(42));
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());