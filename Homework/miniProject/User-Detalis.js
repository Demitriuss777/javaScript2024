
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
const main1=document.createElement('div')
document.body.appendChild(main1)
const url =new  URL(location.href)
/*console.log(url);*/
const Id = url.searchParams.get('id')/*
console.log(Id)*/
fetch('https://jsonplaceholder.typicode.com/users/'+Id)
    .then(value => value.json())
    .then(info =>{
        console.log(info)
        for (const user in info) {
            const divUser = document.createElement('div')
            divUser.classList.add('block')
            if (typeof info[user] !== 'object') {
                divUser.innerText = `${user} ${info[user]}`;
            } else {
                divUser.innerText= `${user} :`
                for (const Key in info[user]) {
                    const divUserIn = document.createElement('div');
                    if (typeof info[user][Key] !== 'object' ){
                        divUserIn.innerText=`${Key} ${info[user][Key]} `
                    }
                    else {
                        divUserIn.innerText=`${Key} :`
                        for (const InKey in info[user][Key]) {
                            const divUserInIn=document.createElement('div')
                            if (typeof info[user][Key][InKey] !== 'object'){
                                divUserInIn.innerText=`${InKey} - ${info[user][Key][InKey]}`
                            }
                            else {
                                divUserInIn.innerText=`${InKey} :`
                            }
                            divUserIn.appendChild(divUserInIn)
                        }

                    }
                    divUser.appendChild(divUserIn)
                }

            }
            main1.appendChild(divUser)

        }

    })

// 5 Додати кнопку "post of current user", при кліку на яку, з'являються
// title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
//
const  divbtn=document.createElement('div')
const btn = document.createElement('button');
btn.innerText='post of current user'
btn.classList.add('ddd');
divbtn.appendChild(btn)
document.body.appendChild(divbtn)

const main2=document.createElement('div')
main2.classList.add('mainn2')
document.body.appendChild(main2)

btn.onclick=function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${Id}/posts`)
        .then(value => value.json())
        .then(value => {
            console.log(value)
            for (const post of value) {
                const title = document.createElement('div')
                title.classList.add('ppp')
                const ult = document.createElement('ul')
                const ilt = document.createElement('il')
                ilt.innerText = post.title
                ult.appendChild(ilt);
                const a = document.createElement('a');
                a.classList.add('aaa')
                a.innerText='more details'
                a.href='post-details.html?id='+post.id

                title.append(ult,a);


                main2.appendChild(title)

            }


        })
    btn.disabled=true
}




// Стилизація проєкта -
//
//     user-details.html - блок з інфою про user зверху сторінки.
//     Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//

