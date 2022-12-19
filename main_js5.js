
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function cub ( a, b){
//     let sum = a * b;
//     alert(sum);
// }
//
// cub(+prompt("Введи першу сторону"), +prompt("Введи другу сторну"));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function rad (pi, r, h){
//     let pl = 2*pi*r*(h+r);
//     alert(pl);}
//
//     rad (3.14, +prompt('введіть радіус'), +prompt('введіть висоту'))

// function circle ( pi, r){
//     let pl = pi * r;
//     alert(pl);
// }
//
// circle(3.14 , Math.pow(+prompt("Введіть радіус"), 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// function product  (products){
//     for (let productElement of products) {
//             console.log(productElement)
//     }
// }
// product(products);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function arg (){
//     if (arguments.length === 3){
//         document.write(`<p>${arguments [0]} + ${arguments [1]} + ${arguments [2]}</p>`)
//     }
//     else  if (arguments.length === 2){
//         document.write( `<p> ${arguments [0]} + ${arguments [1]} </p>` )
//     }
// }
//
// arg ('billy', 'van', 'andre');
// arg ('billy', 'van');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function argm (){
//     if (arguments.length === 3){
//         document.write(`<ul>
// <li>${arguments[0]}</li>  <li>${arguments[0]}</li>  <li>${arguments[0]}</li>
// </ul>`)
//     }
// }
//
// argm('billy', 'van', 'andre');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function argm (){
//     if (arguments.length === 3){
//         document.write(`<ul>
// <li>${arguments[0]}</li>  <li>${arguments[0]}</li>  <li>${arguments[0]}</li>
// </ul>`)
//     }
//     else if (arguments.length === 2){
//         document.write(`<ul>
// <li>${arguments[0]}</li>  <li>${arguments[0]}</li>
// </ul>`)
//     }
// } else if (arguments.length === 1){
//     document.write(`<ul>
// <li>${arguments[0]}</li>
// </ul>`)
// }
//
//
// argm('billy', 'van', 'andre');


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let vasya = [
//     'vasya', 12, true, false, 1425, 'kolya'
// ]
//
// function vasa (array){
//     for (let arrayElement of array) {
//         document.write(`<p>${arrayElement}</p>`)
//     }
// }
//  vasa(vasya);


// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {nam: 'vasya', age: 31, id: 3427},
//     {nam: 'petya', age: 30, id: 7896},
//     {nam: 'kolya', age: 29, id: 6576},
//     {nam: 'olya', age: 28, id: 3957},
//     {nam: 'max', age: 30, id: 4397},
//     {nam: 'anya', age: 31, id: 7438},
//     {nam: 'oleg', age: 28, id:6378},
//     {nam: 'andrey', age: 29, id: 3005},
//     {nam: 'masha', age: 30, id: 2240},
//     {nam: 'olya', age: 31, id: 7860},
//     {nam: 'max', age: 31, id: 5326},
// ];
//
//  function user (array){
//      for (let users of array) {
//          document.write(`<h2>${users.nam}</h2>  <h3>${users.age}</h3>  <h4>${users.id}</h4>`)
//      }
// }
//  user(users);
//
//


// - створити функцію яка повертає найменьше число з масиву
// let numb = [
//     2, -1, 84796754, 0, 4397, -23756379, -234, 233, -11
// ]
// function nan (array){
//     let arg = array[0];
//     for (let argElement of array) {
//         if (argElement < arg){
//             arg = argElement;
//             alert(arg)
//         }
//     }
// }
// nan(numb);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let numb = [22, 66, 105500, 0, 6, 69];
//  function  sum (array){
//     let plus = 0;
//     for (let semen of array) {
//         plus += semen;
//         alert(plus);
//
//     }
// }
// sum(numb);