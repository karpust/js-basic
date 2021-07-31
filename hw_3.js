'use strict';


/*1. С помощью цикла for написать алгоритм для вывода чисел
(выводите в консоль, с помощью console.log) от 0 до 10
включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
Для решения этой задачи используйте остаток от деления на 2*/

let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of numArray) {
    if (num === 0) {
        console.log(`${num} - это ноль`);
    } else if (num % 2 === 0) {
        console.log(`${num} - четное число`);
    } else {
        console.log(`${num} - нечетное число`);
    };
};

/*2. Выведите в консоль значения, указанные рядом с комментариями:*/
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
let products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

//используем меод forEach и стрелочную функцию
products.forEach(element => {
    element.price = element.price - element.price * 0.15;
});
console.log(products[0].price);
console.log(products[1].price);
console.log(products[2].price);
// console.log(products);

/*4. Перед вами находится массив с продуктами в интернет - магазине.
Вам нужно: 1. Получить все товары, у которых есть фотографии, 
можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене(от низкой цены к высокой), можете 
использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например 
здесь https://youtu.be/O2pusOp0gC0 или в
дополнительных видео в материалах урока.*/

products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


// const result = words.filter(word => word.length > 6);
let withPhoto = products.filter(product => "photos" in product && product.photos.length > 0);
console.log(withPhoto);

/*Следующая функция будет сортировать массив по возрастанию:
function compareNumbers(a, b) {
  return a - b;
}
*/
withPhoto.sort(function (prod1, prod2) {
    return prod1.price - prod2.price;
})
console.log(withPhoto);

/*5. (По желанию, т.к. такая особенность практически не используется)
Вывести с помощью цикла for числа от 0 до 9,
НЕ используя тело цикла. То есть выглядеть должно примерно так:*/
//for(…){/* здесь пусто */}
/*Помните, что в первом, втором и третьем раздела цикла можно не только
писать условия, или увеличивать счетчик
например на 1, допустимы любые выражения, например вызовы функций*/

for (let i = 0; i < 10; console.log(i++)) { };

/*6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx*/

for (let i = 'x'; i.length < 21; i += 'x') {
    console.log(i);
}
