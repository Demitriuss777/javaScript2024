// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arr1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const string of arr1) {
    console.log(string.length);

}
arr1.forEach((item)=>console.log(`${item}, its length`, item.length))

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let toUper = 'hello world';
console.log(toUper.toUpperCase())
arr1.map((item) => console.log(item.toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let arr2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
arr2.map((item) => console.log(item.toLowerCase()));


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
let trim = str.trim();
console.log(trim)
console.log(trim.length);


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
let spl = str1.split(' ');
console.log(spl);

const stringToarray =(item)=>
{
    return item.split(' ')
}

console.log(stringToarray(str1))
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0].
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let namber =[10,8,-7,55,987,-1011,0,1050,0]
let newstring = namber.map((item) => item.toString());
console.log(newstring)

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
const sortNums=(arr, sort)=>{

    if(sort ==='ascending') {
        return arr.sort((a, b) => a - b);}

    else if (sort === 'direction') {
        return arr.sort((a, b) => b - a);
    } else {
        return " Error , please use 'ascending' or 'descending'"
    }
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'direction'));
console.log(sortNums(nums,'sffs'))

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMoth=coursesAndDurationArray.sort
((a,b)=>{
return a.monthDuration - b.monthDuration;})
console.log(sortMoth);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let month5 = coursesAndDurationArray.filter((item)=>
    item.monthDuration>5)
console.log(month5);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newDuration= coursesAndDurationArray.map((item,index)=>{
    item.id =index+1;
    return item;})
console.log(newDuration)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
 let value=['6','7','8','9','10', 'ace','jack','queen','king'];
 let color=['red','black'];
let card = (cardSuit, value) => {
    let arrCard = [];
    for (const itemcard of cardSuit) {
        for (const itemvalue of value) {
            let cardColor =
                (itemcard === 'diamond' || itemcard === 'heart') ? 'red' : 'black';
            arrCard.push({
                cardSuit: itemcard,
                value: itemvalue,
                color: cardColor });
        }
    }
    return arrCard;
}

let cards = card(cardSuit, value);
console.log(cards);


// - знайти піковий туз
let aceSpade = cards.find((item) =>
    item.cardSuit === 'spade' && item.value === 'ace'
);
console.log(aceSpade);
// - всі шістки
let six = cards.filter((item) =>
    item.value === '6'
);
console.log(six);

// - всі червоні карти
let cardsRed = cards.filter((item) =>
    item.color === 'red'
);
console.log(cardsRed);
// - всі буби
let cardsDimond = cards.filter((item) =>
    item.cardSuit === 'diamond');
console.log(cardsDimond);
// - всі трефи від 9 та більше

let cardsClubs = cards.filter((item) =>
    item.cardSuit === 'clubs' && (item.value === '9'
        || item.value === '10'
        || item.value === 'jack'
        || item.value === 'queen'
        || item.value === 'king'
        || item.value === 'ace'
    ));
console.log(cardsClubs);
//
//

// let cards = [];
//
// for (let i = 0; i < cardSuit.length; i++) {
//     for (let j = 0; j < value.length; j++) {
//         let cardColor = (cardSuit[i] === 'diamond' || cardSuit[i] === 'heart') ? 'red' : 'black';
//         if (cardColor === color[0] || cardColor === color[1]) {
//             let card = {
//                 suit: cardSuit[i],
//                 value: value[j],
//                 color: cardColor
//             };
//             cards.push(card);
//         }
//     }
// }

// console.log(cards);
// =========================
//
//     Взяти описану колоду карт,
//     та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let redus=cards.reduce((accum,card)=>{
    if(card.cardSuit ==='spade'){
        accum[0].push(card);

    }
        if (card.cardSuit==='diamond'){
            accum[1].push(card);
        }
        if (card.cardSuit==='heart'){
            accum[2].push(card);
        }
        if(card.cardSuit==='clubs'){
            accum[3].push(card);
        }
    return accum
} ,
    [[],[],[],[]])
console.log(redus)

let resRed= cards.reduce((acc,item)=>{
        acc[item.cardSuit].push(item);
        return acc;
    },
    {spade:[], diamond:[],heart:[], clubs:[]})
console.log(resRed)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let sass = coursesArray.filter((item) =>
    item.modules.includes('sass'));
console.log(sass);
// --написати пошук всіх об'єктів, в який в modules є docker
let docker = coursesArray.filter((item) =>
    item.modules.includes('docker'));
console.log(docker);