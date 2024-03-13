// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}
// let userOne = new User(1, 'Vasya', 'Pupkin', 'pupkinv@gmail.com', '09999999');
// console.log(userOne)
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [];
users.push(
    new User(1, 'Vasya', 'Pupkin', 'pupkinv@gmail.com', '09999999'),
    new User(2, 'Inna', 'Princece', 'princes@gmail.com', '02222222222'),
    new User(3, 'Nika', 'Quin', 'quin@gmail.comm', '03333333333'),
    new User(4, 'Vika', 'Quin', 'quin@gmail.comm', '0444444444'),
    new User(5, 'Dima', 'Quin', 'quin@gmail.comm', '0555555555'),
    new User(6, 'Valya', 'Quin', 'quin@gmail.comm', '03333333333'),
    new User(7, 'Nadya', 'Quin', 'quin@gmail.comm', '03333333333'),
    new User(8, 'Lora', 'Quin', 'quin@gmail.comm', '03333333333'),
    new User(9, 'Lina', 'Quin', 'quin@gmail.comm', '03333333333'),
    new User(10, 'Ilonna', 'Quin', 'quin@gmail.comm', '03333333333'),

);
console.log(users);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let parnUsers = users.filter((item) => item.id % 2 ===0);
console.log(parnUsers);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = users.sort((a, b) => b.id - a.id);
console.log(sortUsers);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)

class Client{

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
    clients.push(
        new Client (1, 'Vasya', 'Pupkin', 'pupkinv@gmail.com', '09999999',['pizza','brain']),
        new Client(2, 'Inna', 'Princece', 'princes@gmail.com', '02222222222',['meat','steke', 'cheeken']),
        new Client(3, 'Nika', 'Quin', 'quin@gmail.comm', '03333333333',['banana','apple','lemon']),
        new Client(4, 'Vika', 'Quin', 'quin@gmail.comm', '0444444444',['sofa','chain']),
        new Client(5, 'Dima', 'Quin', 'quin@gmail.comm', '0555555555',['rule','paper']),
        new Client(6, 'Valya', 'Quin', 'quin@gmail.comm', '03333333333',['cat','dog']),
        new Client(7, 'Nadya', 'Quin', 'quin@gmail.comm', '03333333333',['sugor','coffee','salt']),
        new Client(8, 'Lora', 'Quin', 'quin@gmail.comm', '03333333333',['milk','egg','cheese','slivk']),
        new Client(9, 'Lina', 'Quin', 'quin@gmail.comm', '03333333333',['vodka','bear','gine','viski','martini']),
        new Client(10, 'Ilonna', 'Quin', 'quin@gmail.comm', '0333333333Client',['bear']))
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a , b) => a.order.length - b.order.length);
console.log(sortClients)
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//  function Car( model,producer,year,maxSpead, voleumEnje){
//      this.model = model;
//      this.producer = producer;
//      this.year = year;
//      this.maxSpead = maxSpead;
//      this.voleumEnje = voleumEnje;
//      this.drive=function (){
//          console.log(`їдемо зі швидкістю ${this.maxSpead} на годину`)
//      }
//      this.info = function () {
//          console.log('model-', this.model);
//          console.log('prucer-', this.producer);
//          console.log('year-', this.year);
//          console.log('max spead-', this.maxSpead)
//          console.log('voleum enje-', this.voleumEnje)
//          console.log('driver-', this.driver);
//      };
//      this.increaseMaxSpeed=function (newSpeed){
//          this.maxSpead += newSpeed;
//
//      };
//      this.changeYear = function (newValue) {
//          this.year = newValue
//
//      };
// this.addDriver=function (driver){
//     this.driver = driver;
// }
//  }
//
// let avto = new Car('Porshe', 'Germany', 2022, 500, 350);
// console.log(avto)
// avto.info()
// avto.increaseMaxSpeed(700);
// avto.info()
// avto.changeYear(1999);
// avto.info()
// avto.addDriver({name:'vasya'});
// avto.info()
// console.log(avto)

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car


class Carss {
    constructor(model, producer, year, maxSpead, voleumEnje) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpead = maxSpead;
        this.voleumEnje = voleumEnje;
        this.drive=function (){ console.log(`їдемо зі швидкістю ${this.maxSpead} на годину`)}
    }
    info(){
        console.log('model-', this.model)
        console.log('producer-', this.producer)
        console.log('year-', this.year);
        console.log('max speed-', this.maxSpead);
        console.log('voleum enje-', this.voleumEnje);
        console.log('driver-', this.driver);
    }
    increaseMaxSpeed (newSpeed){
        this.maxSpead+= newSpeed
    }
    changeYear (newValue){
        this.year = newValue;
    }
    addDriver (driver){
        this.driver=driver
    }

}

let cartwo = new Carss('Mersedes', 'Germany', 2020, 320, 220);
cartwo.info()
cartwo.increaseMaxSpeed(320);
cartwo.changeYear(1800);
cartwo.addDriver({name:
'Dima', age:37})
cartwo.info()


/////
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік,
// розмір ноги. Створити масив з 10 попелюшок.
class Cinderella  {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;

    }}




 let princesses = [
    new Cinderella('Alla', 22, 31),
    new Cinderella('Anja', 23, 32),
    new Cinderella('Alina', 24, 33),
    new Cinderella('Ayna', 25, 34),
    new Cinderella('Alisa', 32, 35),
    new Cinderella('Oklena', 34, 35),
    new Cinderella('Olya', 44, 36),
    new Cinderella('Inna', 21, 37),
    new Cinderella('Ira', 28, 27),
    new Cinderella('Ilonna', 29, 42)];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

   class Prince{


       constructor(name, age, bootSize) {
           this.name = name;
           this.age = age;
           this.bootSize = bootSize;
       }

       }
let hero =[ new Prince('Dima', 37,37)]

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let bride=[]
for (const itemCidne of princesses) {
    for (const itemHero of hero) {
        if (itemCidne.footSize === itemHero.bootSize) {
            bride.push(itemCidne);
            console.log(`Принц ${itemHero.name} знайшов свою дружину ${itemCidne.name}`)
        }
    }}



//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та
//     відповідного колбеку

let findCinderella = princesses.find((item) => item.footSize === hero[0].bootSize);
console.log(findCinderella);
