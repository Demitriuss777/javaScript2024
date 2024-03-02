// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const SquareRectangle=(a,b)=>a*b;
console.log(SquareRectangle(10, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// S = πr2
const SquareCircle = (radius) => Math.PI * Math.pow(radius, 2);
console.log(SquareCircle(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом
// 2πR(H + R)
const SquareCylindre = (radius, height) => 2 * Math.PI * radius * (height + radius);
console.log(SquareCylindre(10, 13));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr=[11,22,33,44,'Oktan',true]
const Arrs=(arr)=>{
    for (const arrElement of arr) {
        console.log(arrElement)

    }
}
Arrs(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const CreatePar=
    (text)=>{
        document.write(`<div>
<p> ${text}</p>
</div>`);
    }
CreatePar('Sony');
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
const CreateLi=(text)=>{
    document.write(`<ul>

<li>${text}</li>
<li>${text}</li>
<li>${text}</li>

</ul>`);

}
CreateLi('hello li');

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const CreateLiArguments=(text,namberLi)=>{
    document.write(`<ul>`)
    for (let i = 0; i < namberLi; i++) {
document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)
}
CreateLiArguments('How do you do', 7);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

const list=(arr)=>{
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);

    } document.write(`</ul>`)
}
list(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id:1,name: 'vasya', age: 31},
    {id:2,name: 'petya', age: 30},
    {id:3,name: 'kolya', age: 29},
    {id:4,name: 'olya', age: 28},
    {id:5,name: 'max', age: 30},
    {id:6,name: 'anya', age: 31},
    {id:7,name: 'oleg', age: 28},
    {id:8,name: 'andrey', age: 29},
    {id:9,name: 'masha', age: 30 },
    {id:10,name: 'olya', age: 31 },
    {id:11,name: 'max', age: 31}
]
const ArrwithNamt=(arr)=>{
    for (const arrElement of arr) {
        document.write(`<div> ${arrElement.id}. Name: ${arrElement.name}- ${arrElement.age}yaers </div>`)

    }
}
ArrwithNamt(users)

// - створити функцію яка повертає найменьше число з масиву
let min = [3,8,11,22];
const Minnamber=(arr)=>{
    let m=arr[0]
    for (const minEll of arr){
         if(m>minEll){
            m=minEll;

}
    } return m
}
console.log(Minnamber(min))
// - створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const Summa=(arr)=>{
    let resultat = 0;
    for (const arrElement of arr) {
        resultat=resultat+arrElement

    }return resultat

}
console.log(Summa(min))
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const Swap=(arr,index1,index2)=>{
    let namb1 = arr[index1];
    let namb2 = arr[index2];
    arr[index1] = namb2;
    arr[index2] = namb1;
    return arr
}
let arrswap = [11, 22, 33, 44,55];
console.log(Swap(arrswap, 2, 4));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const Exchange =(sumUAH, currencyValues, exchangeCurrency)=> {
    let resultatV = 0;

    for (const i of currencyValues) {
        if (i.currency === exchangeCurrency) {
            resultatV=sumUAH/i.value;

    }
    }return resultatV

}

let bablo = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
];
console.log(Exchange(40000,bablo,'USD'))