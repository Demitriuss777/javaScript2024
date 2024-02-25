// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = ['one', 'two', 3, 4, 5, 'six', 'seven', 8, 9, true];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books = [
    onebook = {
        title: 'Harry Potter one part',
        pageCount: 450,
        genre: 'Fantasy '
    },
     twobook={
         title: 'Harry Potter two part',
         pageCount: 550,
         genre: 'Fantasy '

     },
    threebook={
        title: 'Harry Potter thre part',
        pageCount: 600,
        genre:'Fantasy '
    }
];
console.log(books);
// - Створити 3 об'єкти які описують книги. Поля об'єкту :
// title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.
let autors=[
    oneBookAuvtor={
        title: 'Harry Potter one part',
        pageCount: 450,
        genre: 'Fantasy ',
        autur :  [
            {
            name: 'Joanne Rowling',
            age: 60}]

    },
    twoBookAuvtjr={
        title: 'Shoter',
        pageCount: 550,
        genre: 'Fantasy ',
        autur : [ {
            name: 'Stephen King',
            age: 67}
    ]

    },
    threBookAuvtjr={
        title: 'Dream catcher',
        pageCount: 500,
        genre: 'Fantasy ',
        autur: [{
            name: 'Stephen King',
            age: 67
        }]
}


]
console.log(autors);


// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    user1 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 139304021
    },
    user2 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 13930455
    },
    user3 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 13930402551
    },
    user4 = {

        name: 'vasya',
        username: 'Ivanov',
        password: 104021
    },
    user5 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 1386621
    },
    user6 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 1393
    },
    user7 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 1677021
    },
    user8 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 13954
    },
    user9 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 13930455
    },
    user10 = {
        name: 'vasya',
        username: 'Ivanov',
        password: 1393346
    }
];
console.log('user1 password: ' + users[0].password);
console.log('user2 password: ' + users[1].password);
console.log('user3 password: ' + users[2].password);
console.log('user4 password: ' + users[3].password);
console.log('user5 password: ' + users[4].password);
console.log('user6 password: ' + users[5].password);
console.log('user7 password: ' + users[6].password);
console.log('user8 password: ' + users[7].password);
console.log('user9 password: ' + users[8].password);
console.log('user10 password: ' + users[9].password);
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = -3;
// if (x !== 0 && x>0 ) {
//     console.log('true')}
//
//     else{
//         console.log('false');
//     }
//

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

/*let time = prompt('enter nambers from 0 to 59 ');
if (time >= 0 && time<=15) {
    console.log('the first part of an hour')
}
else if (time >=16 && time <= 30) {
    console.log('the second part of an hour');
}
else if (time >= 31 && time <= 45) {
    console.log('the third part of an hour')
}


else if(time >=46 && time<=59){
    console.log('the quarter part  of an hour')
}
else {
    console.log('error')
}*/


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
/*let day=prompt('enter the day number')
if (day >= 1 && day <= 10) {
    console.log('first part');}
    else if (day >= 11 && day <= 20) {
        console.log('second part');
    }
    else if (day >= 21 && day <= 31) {
        console.log('third part');
    }
    else{console.log('error')}*/

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).


// let schedule= +prompt('enters the serial number of the day of the week')
// switch (schedule) {
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday ');
//         break;
//     case 5:
//         console.log('Friday ');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//             console.log('Sunday');
//         break
//     default:
//         console.log('error')
// }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

/*let namberOne = +prompt('enter first namber');
let namberTwo = +prompt('enter second namber');
if (namberOne === namberTwo) {
    console.log('the numbers are equal')
}
else if (namberOne > namberTwo) {
    console.log(namberOne)
}
else if(namberOne<namberTwo){
    console.log(namberTwo)
}*/

//
//     - є змінна х, яка може прийняти будь-яке значення
//     (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = undefined;

x = x || 'default';
console.log(x)


//
//
//     - з файлу arrays.js (лежить в папці 2023 plan )
//     взяти масив coursesAndDurationArray
//     . За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + ' - cool');}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title  +' - cool');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + ' - cool')
}
if (coursesAndDurationArray[3].monthDuration >5){
    console.log(coursesAndDurationArray[3].title + ' - cool')}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + ' - cool')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + ' - cool')
}
