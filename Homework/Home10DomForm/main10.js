//  1
//  Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.form1;
console.log(form)
form.onsubmit = function (e) {
e.preventDefault()

    let conter = document.createElement('div');

    let name = document.getElementsByName('name')
    console.log(name)
    let surname = document.getElementsByName('surname')
    let age = document.getElementsByName('age')

    conter.innerText = `Name: ${this.name.value} Surname: ${this.surname.value}>Age: ${this.age.value}`
    document.body.appendChild(conter)
};

// ========================== 2
// є сторінка, на якій є блок,я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


    let number = document.getElementById('2number');
    let local = localStorage.getItem('numbers') || 0;
    let newNumber = JSON.parse(local) + 1; // ТАКОЖ МОЖНА ПОВЕРНУТИ ЧИСЛО ЧЕРЕЗ Number

    number.innerText = newNumber;
    localStorage.setItem('numbers', newNumber); // Зберігаємо оновлений масив sessions у локальному сховищі


// ========================== 3
// Є сторінка index.html (назва довільна),
// при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
// про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push(new Date());
//розгорнутий варіант
// let date = new Date();
// sessions.push({
//     day: date.getDate(),
//     hour: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds()
// });
localStorage.setItem('sessions', JSON.stringify(sessions));
let ul = document.getElementById('sessions');
for (const item of sessions) {
    let li = document.createElement('li');
    li.innerText = item;
    // li.innerText= item.day+' '+item.hour+' '+ item.minutes+' '+ item.seconds
    ul.appendChild(li)


}

// ========================= 4  не працює (спробувати через функцію)
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
let locations = [
    {
        "title": "м. Київ",
        "type": "city"
    },
    {
        "title": "Житомирська область",
        "type": "oblast"
    },
    {
        "title": "Харківська область",
        "type": "oblast"
    },
    {
        "title": "Вінницька область",
        "type": "oblast"
    },
    {
        "title": "Чернігівська область",
        "type": "oblast"
    },
    {
        "title": "Дніпропетровська область",
        "type": "oblast"
    },
    {
        "title": "Черкаська область",
        "type": "oblast"
    },
    {
        "title": "Волинська область",
        "type": "oblast"
    },
    {
        "title": "Київська область",
        "type": "oblast"
    },
    {
        "title": "Миколаївська область",
        "type": "oblast"
    },
    {
        "title": "Рівненська область",
        "type": "oblast"
    },
    {
        "title": "Сумська область",
        "type": "oblast"
    },
    {
        "title": "Тернопільська область",
        "type": "oblast"
    },
    {
        "title": "Краматорський район",
        "type": "raion"
    },
    {
        "title": "Кіровоградська область",
        "type": "oblast"
    },
    {
        "title": "Хмельницька область",
        "type": "oblast"
    },
    {
        "title": "Запорізька область",
        "type": "oblast"
    },
    {
        "title": "Одеська область",
        "type": "oblast"
    },
    {
        "title": "Полтавська область",
        "type": "oblast"
    },
    {
        "title": "Львівська область",
        "type": "oblast"
    },
    {
        "title": "м. Кривий Ріг",
        "type": "city"
    },
    {
        "title": "Криворізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Івано-Франківська область",
        "type": "oblast"
    },
    {
        "title": "Чернівецька область",
        "type": "oblast"
    },
    {
        "title": "Ізюмський район",
        "type": "raion"
    },
    {
        "title": "Бахмутська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Васильків",
        "type": "city"
    },
    {
        "title": "Васильківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білоцерківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Біла Церква",
        "type": "city"
    },
    {
        "title": "Донецька область",
        "type": "oblast"
    },
    {
        "title": "Покровський район",
        "type": "raion"
    },
    {
        "title": "Уманська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Бахмутський район",
        "type": "raion"
    },
    {
        "title": "Закарпатська область",
        "type": "oblast"
    },
    {
        "title": "Лубенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Лубни",
        "type": "city"
    },
    {
        "title": "Полтавська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Полтава",
        "type": "city"
    },
    {
        "title": "м. Старокостянтинів",
        "type": "city"
    },
    {
        "title": "Старокостянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миколаїв",
        "type": "city"
    },
    {
        "title": "Миколаївська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Торецька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кропивницький район",
        "type": "raion"
    },
    {
        "title": "Першотравенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Нікопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Нікополь",
        "type": "city"
    },
    {
        "title": "м. Першотравенськ",
        "type": "city"
    },
    {
        "title": "Одеський район",
        "type": "raion"
    },
    {
        "title": "м. Черкаси",
        "type": "city"
    },
    {
        "title": "Черкаська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Добропільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Херсонська область",
        "type": "oblast"
    },
    {
        "title": "Сумська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Суми",
        "type": "city"
    },
    {
        "title": "Первомайська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Краматорська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Макарівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Краматорськ",
        "type": "city"
    },
    {
        "title": "Миргородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бориспіль",
        "type": "city"
    },
    {
        "title": "Броварська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миргород",
        "type": "city"
    },
    {
        "title": "Бориспільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бровари",
        "type": "city"
    },
    {
        "title": "м. Вознесенськ",
        "type": "city"
    },
    {
        "title": "Коростенський район",
        "type": "raion"
    },
    {
        "title": "м. Первомайськ",
        "type": "city"
    },
    {
        "title": "Миронівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенський район",
        "type": "raion"
    },
    {
        "title": "Синельниківський район",
        "type": "raion"
    },
    {
        "title": "Фастівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Житомирський район",
        "type": "raion"
    },
    {
        "title": "Дружківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Фастів",
        "type": "city"
    },
    {
        "title": "Слов'янська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Запорізький район",
        "type": "raion"
    },
    {
        "title": "м. Слов'янськ",
        "type": "city"
    },
    {
        "title": "м. Кременчук",
        "type": "city"
    },
    {
        "title": "Ніжинський район",
        "type": "raion"
    },
    {
        "title": "м. Ватутіне",
        "type": "city"
    },
    {
        "title": "Ватутінська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кременчуцька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Пологівський район",
        "type": "raion"
    },
    {
        "title": "Дніпровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Дніпро",
        "type": "city"
    },
    {
        "title": "Лозівський район",
        "type": "raion"
    },
    {
        "title": "Покровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Обухів",
        "type": "city"
    },
    {
        "title": "Узинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шепетівський район",
        "type": "raion"
    },
    {
        "title": "Пирятинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сумський район",
        "type": "raion"
    },
    {
        "title": "Харківський район",
        "type": "raion"
    },
    {
        "title": "Жашківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Пирятин",
        "type": "city"
    },
    {
        "title": "Павлоградський район",
        "type": "raion"
    },
    {
        "title": "Голованівський район",
        "type": "raion"
    },
    {
        "title": "Обухівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Подільський район",
        "type": "raion"
    },
    {
        "title": "м. Охтирка",
        "type": "city"
    },
    {
        "title": "Мар'їнська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Мелітополь",
        "type": "city"
    },
    {
        "title": "Куп’янський район",
        "type": "raion"
    },
    {
        "title": "Святогірська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Рівне",
        "type": "city"
    },
    {
        "title": "Бородянська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Роздільнянський район",
        "type": "raion"
    },
    {
        "title": "Запорізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шосткинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Болградський район",
        "type": "raion"
    },
    {
        "title": "Прилуцький район",
        "type": "raion"
    },
    {
        "title": "Олешківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Березівський район",
        "type": "raion"
    },
    {
        "title": "Очаківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Смілянська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Очаків",
        "type": "city"
    },
    {
        "title": "Рівненська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Первомайський район",
        "type": "raion"
    },
    {
        "title": "Ізмаїльський район",
        "type": "raion"
    },
    {
        "title": "Сквирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Шостка",
        "type": "city"
    },
    {
        "title": "Мелітопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Маріупольський район",
        "type": "raion"
    },
    {
        "title": "Охтирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білгород-Дністровський район",
        "type": "raion"
    },
    {
        "title": "м. Запоріжжя",
        "type": "city"
    },
    {
        "title": "м. Коростень",
        "type": "city"
    },
    {
        "title": "Луганська область",
        "type": "oblast"
    },
    {
        "title": "м. Житомир",
        "type": "city"
    },
    {
        "title": "Курахівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Черкаський район",
        "type": "raion"
    },
    {
        "title": "Новоград-Волинський район",
        "type": "raion"
    },
    {
        "title": "Костянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Переяславська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Новоукраїнський район",
        "type": "raion"
    },
    {
        "title": "Уманський район",
        "type": "raion"
    },
    {
        "title": "Коростенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Переяслав",
        "type": "city"
    },
    {
        "title": "Шосткинський район",
        "type": "raion"
    },
    {
        "title": "Великоновосілківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Чернігівський район",
        "type": "raion"
    },
    {
        "title": "Радомишльська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вугледарська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Звенигородський район",
        "type": "raion"
    },
    {
        "title": "м. Конотоп",
        "type": "city"
    },
    {
        "title": "Вишгородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Гребінківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сарненський район",
        "type": "raion"
    },
    {
        "title": "Бердянський район",
        "type": "raion"
    },
    {
        "title": "Миколаївський район",
        "type": "raion"
    },
    {
        "title": "Гостомелська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Дубровицька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Українська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сарненська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Воскресенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Маріуполь",
        "type": "city"
    },
    {
        "title": "Чугуївський район",
        "type": "raion"
    },
    {
        "title": "Охтирський район",
        "type": "raion"
    },
    {
        "title": "Житомирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Сарни",
        "type": "city"
    },
    {
        "title": "Широківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Славутицька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Золотоніський район",
        "type": "raion"
    },
    {
        "title": "Конотопська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Волноваський район",
        "type": "raion"
    },
    {
        "title": "Донецький район",
        "type": "raion"
    },
    {
        "title": "Маріупольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вараський район",
        "type": "raion"
    },
    {
        "title": "м. Славутич",
        "type": "city"
    }
];

console.log(locations.length) //172 об'єктів
    let divs=document.getElementsByClassName('10Object')
    let prevBtn = document.getElementById('butt4prev');
    let nextBtn = document.getElementById('butt4next');
let start = 0;
let step = 10;
let limit = start + step;
nextBtn.onclick = function () {
for (let i = start; i < limit; i++) {
    let titles = document.createElement('div');
   let types = document.createElement('div');
    if (i < locations.length){
    console.log(locations[i])}
    // titles.innerText = `Title: ${locations[i].title}`;
    // types.innerText = `Type: ${locations[i].type}`;
    // divs.append(titles, types);
} start = limit;
    limit = limit + step;
}
prevBtn.onclick = function () {
    for (let i = start; i < limit; i++) {
        let titles = document.createElement('div');
        let types = document.createElement('div');
        if (i < locations.length){
            console.log(locations[i])}
        // titles.innerText = `Title: ${locations[i].title}`;
        // types.innerText = `Type: ${locations[i].type}`;
        // divs.append(titles, types);
    } start = limit;
    limit = limit - step;
}
// 5
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let ghost = document.createElement('div');
let ghostButton=document.createElement('button')
ghost.setAttribute('id', 'text');
ghost.innerText = 'text';
ghostButton.innerText = 'click';
document.body.append(ghost,ghostButton)
// ghostButton.onclick= function (e){
//     ghost.style.display = 'none';
// }
 ghostButton.addEventListener('click', function (){
     ghost.style.display = 'none';
})
//                   6
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
let forms2 = document.form2

forms2.addEventListener('submit', function (e) {
    e.preventDefault();

    // if (Number(this.verification.value) > 18) {
    //     message.innerText = 'Приємного перегляду';
    // } else {
    //     message.innerText = 'Шкода, треба почекати до 18 років';
    // }
    if (JSON.parse(this.verification.value) > 18) {

        return alert('Приємного перегляду');
    }
    return alert('Шкода, треба почекати до 18 років');
});





//                            7
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

let forms7 = document.form7;
let indoRows = Number(this.row.value);
let infoCell = Number(this.cell.value);
let information = Number(this.infos.value);
let conter7 = document.createElement('div');
form.onsubmit = function (e) {
    e.preventDefault();
for (let i = 0; i < indoRows.length; i++) {
    const tr = document.createElement('tr');

    for (let i = 0; i < infoCell.length; i++) {
        const td = document.createElement('td');
        td.innerText = information;
        tr.appendChild(td);
    }
  conter7.appendChild(tr);

} document.body.appendChild(conter7)}



// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається