// В index.html

// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/


// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
const allcont = document.createElement('div')
allcont.classList.add('con1')
document.body.appendChild(allcont)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
            console.log(users)
            for (const item of users) {
                const divuser = document.createElement('div');
                divuser.classList.add('cont2');
                allcont.appendChild(divuser);
                const h = document.createElement('h2');
                h.classList.add('cont3');
                h.innerText=` ${item.id} - ${item.name} `
                divuser.appendChild(h);
                const alink = document.createElement('a');
                alink.classList.add('contbtn4');
                alink.innerText='Info'
                divuser.appendChild(alink)
                alink.href='User-Details.html?id='+item.id
            }
        }

    )




// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок.
// кнопки/аосилвння розташувати під інформацією про user.
