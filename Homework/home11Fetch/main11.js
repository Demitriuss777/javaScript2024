// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
//  Відобразити всі поля кожної корзини.
//
// let oneUl=document.getElementById('oneTask')
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(value=>{
//         for (const item of value.carts) {
//             // console.log(item)
//             let liCont = document.createElement('h3');
//             liCont.innerText = `${item.id} cart`;
//             oneUl.appendChild(liCont)
//             for (const prod of item.products) {
//                 // console.log(prod);
//                 let liOne = document.createElement('li');
//                 liOne.innerText = `
//                    ${prod.id}
//                  Title: ${prod.title}
//                  Price: ${prod.price}
//                  Quantity : ${prod.quantity}
//                  Total: ${prod.total}
//                  DiscountPercentage: ${prod.discountPercentage}
//                  DiscountedPrice: ${prod.discountedPrice}
//                   Thumbnail: ${prod.Thumbnail}
//                  `;
//                 liCont.appendChild(liOne)
//
//             }
//         }
//     });
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//     Інгредієнти повинні бути список під час відображення.
// let twoDiv=document.getElementById('task2')
// fetch('https://dummyjson.com/recipes')
//     .then(res => res.json())
//     .then(value=>{
//         for (const item of value.recipes) {
//             console.log(item.image);
//             let name = document.createElement('h2');
//             name.innerText=item.name
//             let photo =document.createElement('img')
//             photo.style='width: 300px'
//             photo.setAttribute('src',item.image)
//             photo.setAttribute('alt', item.name);
//             let ulTwo=document.createElement('ul')
//             let p=document.createElement('h3')
//             p.innerText = `Ingredients`;
//             ulTwo.appendChild(p)
//             for (const ingr of item.ingredients) {
//
//
//             let liTwo = document.createElement('li');
//
//             liTwo.innerText=ingr
//             ulTwo.appendChild(liTwo);
//             twoDiv.append(name, photo,ulTwo)}
//
//         }
//     });

//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
//     (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про
// користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX
// де ХХХ - айді користувача)користувача
fetch(' http://jsonplaceholder.typicode.com/users')
    .then(value =>value.json() )
    .then(value => {
            console.log(value)
            for (const item of value) {
                let div =document.createElement('div')
                let h2 = document.createElement('h2')
                let a = document.createElement('a')
                a.innerText=`${item.id} ${item.name}`
                a.href= 'user-details.html?id='+ item.id
                h2.appendChild(a);
                div.append(h2);
                document.body.appendChild(div)


            }

        }
    )