//- Створити змінні.
// Присвоїти кожному з них значення: 'hello','owu','com',
// 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false.
// Вивести кожну змінну за допомогою: console.log

let s = 'hello';
let s1 = 'owu';
let s2 = 'com';
let s3 = 'ua';
let n = 1;
let n1 = 10;
let n2 = -999;
let n3 = 123;
let n4 = 3.14;
let n5 = 2.7;
let n6 = 16;
let b1 = true;
let b2 = false;
console.log(s);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(n);
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(b1);
console.log(b2);



//
// - Створити 3 змінних firstName,
// middleName,
// lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstname = 'Dmytro';
let middleName = ' Petrovich';
let lastName = ' Prychodko';
let person = firstname + middleName + lastName;
console.log(person)
let person1 = `${firstname} ${middleName} ${lastName}`;
console.log(person1)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt()
// отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let FirstNameP = prompt('Enter your name' , 'Name');
let MiddleNameP = prompt('Enter your middlename', 'Middlename');
let AgeP = prompt('Enter your age', 'age');
console.log(`${FirstNameP} ${MiddleNameP} ${AgeP}`);
