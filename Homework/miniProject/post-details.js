//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок.
// кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати,
//     так, щоб було видно що це блоки (дати фон. марджини і тд)тд
const url = new URL(location.href);
/*console.log(url);*/
const Idi= url.searchParams.get('id')
console.log(Idi);
const mainConter=document.createElement('div')
mainConter.classList.add('main3')
document.body.appendChild(mainConter)
const posyConter=document.createElement('div')
posyConter.classList.add('postt');
mainConter.appendChild(posyConter)
fetch('https://jsonplaceholder.typicode.com/posts/' + Idi)
    .then(value => value.json())
    .then(posts => {
        console.log(posts)
        for (const item in posts) {
            const div1 = document.createElement('div');
            div1.classList.add('xxx')
            div1.innerText = `${item} :  ${posts[item]}`
           posyConter.appendChild(div1)
        }
    });




fetch(`https://jsonplaceholder.typicode.com/posts/${Idi}/comments`)
    .then(value => value.json())
    .then(comments => {
        console.log(comments)
        for (const item in comments) {
            const comtntDiv= document.createElement('div')
            comtntDiv.classList.add('coment')
            if (typeof comments[item] !=='object') {
                comtntDiv.innerText = `${item} ${comments[item]}`
            } else {
                comtntDiv.innerText=`${item}`
                for (const Key in comments[item] ){
                    const Post = document.createElement('div')
                    Post.classList.add('sss')
                    if (typeof comments[item][Key] !=='object'){
                        Post.innerText=`${Key}  : ${comments[item][Key]}  `
                    }
                    comtntDiv.appendChild(Post)
                }


            }

          mainConter.appendChild(comtntDiv)

        }

    });
//     post-details.html - блок з інфою про пост зверху.
//     Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати,
//     так, щоб було видно що це блоки (дати фон. марджини і тд)тд