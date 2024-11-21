// Метод Фішера

// let arr = [1, 2, 3];


// Звичайний метод

// let arr = [1, 2, 3]
//
// function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5);
// }

/*function shuffle(array) {

    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let count = {
    "123": 0,
    "132": 0,
    "213": 0,
    "231": 0,
    "312": 0,
    "321": 0,
}

for(let i = 0; i < 1000000; i++){
    let array = [1, 2, 3]
    shuffle(array);
    count[array.join('')]++;
}

for(let key in count){
    alert(`${key} is ${count[key]}`);
    console.log(`${key} is ${count[key]}`);
}*/


/*let john = { name: "John", age: 23 };
let pete = { name: "Pete", age: 55 };
let mary = { name: "Mary", age: 11 };

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    return users.reduce( (prev, user) => prev + user.age, 0) / users.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28*/




/*function unique(arr) {
    // return [...new Set(arr)];
    const unique = {};
    arr.forEach((item) => {
        unique[item] = true;
    })
    return Object.keys(unique);
}

let strings = ["Привіт", "Світ", "Привіт", "Світ",
    "Привіт", "Привіт", "Світ", "Світ", ":-O"
];

alert( unique(strings) );*/



// let users = [
//     {id: 'іван', name: "Іван Іванко", age: 20},
//     {id: 'ганна', name: "Ганна Іванко", age: 24},
//     {id: 'петро', name: "Петро Петренко", age: 31},
// ];
//
// function groupById(users){
//     return users.reduce((acc, user) => {
//         acc[user.id] = user;
//         return acc;
//     }, {})
// }
//
// let usersById = groupById(users);
//
// console.log(usersById)


// let ivan = { name: "Іван" };
// let bohdan = { name: "Богдан" };
//
// let visitsCountObj = {}; // оголосимо звичайний об’єкт
//
// visitsCountObj[bohdan] = 234; // використаємо об’єкт `bohdan` як ключ
// visitsCountObj[ivan] = 123; // використаємо `ivan` об’єкт як ключ, `bohdan` об’єкт буде перезаписаний
//
// // Ось як це було записано!
// alert( visitsCountObj["[object Object]"] ); // 123


// let obj = {
//     "name": 'Ivan',
//     "email": 'ivan@gmail.com',
// }
//
// let entryMap = new Map(
//     Object.entries(obj),
// )
//
// alert(entryMap.get('name'))


// function unique(arr) {
//     return [...new Set(arr)];
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare, Krishna, :-O


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// let map = new Map();
//
// function aclean() {
//
//     for(let word of arr) {
//         let sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word);
//     }
//
//     return Array.from(map.values());
//
// }
//
// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


// let map = new Map();
//
// map.set("name", "John");
//
// let keys = Array.from(map.keys());
//
// // Помилка: keys.push -- це не функція
// keys.push("more");
//
// alert(keys)
//
// keys.push('Alex');
//
// alert(keys);


// let john = { name: "Іван" };
//
// let map = new Map();
// map.set(john, "...");
//
// john = null; // перезапишемо посилання
//
// for(let person of map.keys()) {
//     alert(person.name)
// }


// let messages = [
//     {text: "Привіт", from: "Іван"},
//     {text: "Як справи?", from: "Іван"},
//     {text: "До зустрічі", from: "Аліса"}
// ];
//
//
// let readMessages = new WeakSet();
//
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
//
// alert('Повідомлень було прочитано 0 ' + readMessages.has(messages[0]))
//
//
// messages.shift();

// let messages = [
//     {text: "Привіт", from: "Іван"},
//     {text: "Як справи?", from: "Іван"},
//     {text: "До зустрічі", from: "Аліса"}
// ];
//
// let readMessages = new WeakMap();
//
// alert(readMessages.set(messages[0], new Date(2024,10,10)));


// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };
//
// let doublePrices = Object.fromEntries(
//
//     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// )
//
// alert(doublePrices.orange);


// Є об’єкт salaries з довільною кількістю властивостей, що містять заробітні плати.
//
//     Напишіть функцію sumSalaries(salaries), що повертає суму всіх зарплат за допомогою Object.values та циклуfor..of.
//
//     Якщо об’єкт salaries порожній, тоді результат повинен бути 0.
//
// Наприклад:

// let salaries = {
//     "Іван": 100,
//     "Петро": 300,
//     "Марія": 250
// };
//
// let sumSalaries = (salaries) => {
//     let sum = 0;
//     for( let salarie of Object.values(salaries)) {
//          sum += salarie;
//     }
//     return sum;
// }
//
// alert( sumSalaries(salaries) ); // 650


// Порахуйте властивості
//
// Напишіть функцію count(obj), що повертає кількість властивостей об’єкта:

// let user = {
//     name: 'Іван',
//     age: 30
// };
//
// function count(obj) {
//     return Object.keys(obj).length;
// }
//
// alert( count(user) ); // 2

// let [firstName, surname] = "Іван Петренко".split(' ');
// alert(firstName); // Іван
// alert(surname);  // Петренко

// // другий елемент не потрібен
// let [firstName, , title] = ["Юлій", "Цезар", "Консул", "Римської республіки"];
//
// alert( title ); // Консул
// alert(firstName);

// let [a, b, c] = "abc"; // ["a", "b", "c"]
// let [one, two, three] = new Set([1, 2, 3]);
//
// alert(one)


// let user = {};
//
// [user.name, user.surname] = "Іван Петренко".split(' ');
//
// alert(user.name);
// alert(user.surname);

// let user = {
//     name: 'Іван',
//     age: 30
// }
//
// for([key, value] of Object.entries(user)) {
//     alert(`${key}: ${value}`);
// }


// let user = new Map();
//
// user.set("name", "Іван");
// user.set("age", "30");
//
// for([key, value] of user) {
//     alert(`${key}: ${value}`);
// }


// let guest = 'Пітер';
// let admin = 'Джейн';
//
// [guest, admin] = [admin, guest]
//
// alert(`${guest}, ${admin}`);


// let [name1, name2, ...rest] = ["Юлій", "Цезар", "Консул", "Римської Республіки"];
//
// alert(name1); // Юлій
// alert(name2); // Цезар
// alert(rest[0]);
// alert(rest[1]);
// alert(rest.length);
// // Інші пункти ніде не присвоєні


// let options = {
//     title: 'Меню',
//     height: 100,
//     width: 200
// }
//
// let {title, height, width} = options;
//
// alert(title);
// alert(height);
// alert(width);

// let {height, width, title} = { title: "Меню", height: 200, width: 100 }
//
//
// alert(title);
// alert(height);
// alert(width);



// let options = {
//     size: {
//         width: 100,
//         height: 200,
//     },
//     item: ['Пончик', 'Вода'],
//     element: true,
// }
//
// let {size: { width, height}, item: [item1, item2], element,title = 'Menu', } = options;
//
// alert(width)
// alert(height)
// alert(item1)
// alert(item2)
// alert(element)
// alert(title)

// let options = {
//     title: "My menu",
//     items: ["item1", "item2"],
// }
//
// function showMenu({ title = "Untitled", width = 200, height = 200, items = []  }) {
//
//     alert(`${title} - ${width} - ${height}`);
//     alert(items);
// }
//
// showMenu(options)


// let user = {
//     name: "Іван",
//     years: 30
// };
//
// let { name, years: age, isAdmin = false } = user;
//
// alert( name ); // Іван
// alert( age ); // 30
// alert( isAdmin ); // false


// let salaries = {
//     "Іван" : 100,
//     "Петро" : 300,
//     "Марія" : 250,
// };
//
// const ivan = "Іван";
// const petro = "Петро";
// const maria = "Марія";
//
// let { [ivan]: salaryIvan, [petro]:  salaryPetro, [maria]: salaryMaria } = salaries;
//
// function topSalary(salaries) {
//
//     if(Object.values(salaries).length === 0) {
//         return null;
//     }
//
//     let salarysArray = Object.values(salaries);
//     let maxSalary = Math.max(...salarysArray);
//
//     return maxSalary;
// }
//
// let highestSalary = topSalary(salaries);
//
// if (highestSalary === null) {
//     alert(`Об'єкт пустий`)
// } else {
//     alert(`Найвища зарплата: ${highestSalary}`);
// }


// let salaries = {
//     "Іван": 100,
//     "Петро": 300,
//     "Марія": 250,
// }
//
// function topSalaries(salaries) {
//
//     let maxSalary = 0;
//     let maxName = null;
//
//     for(const [name, salary] of Object.entries(salaries)) {
//         if(maxSalary < salary) {
//             maxSalary = salary;
//             maxName = name;
//         }
//     }
//     return maxName;
// }
//
// let heightSalary = topSalaries(salaries);
//
// alert(heightSalary)



// function diffSubtract(date1, date2) {
//     return date2 - date1;
// }
//
// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }
//
// function banch(f) {
//
//     let date1 = new Date(0);
//     let date2 = new Date();
//
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
//
// }
//
// let time1 = 0;
// let time2 = 0;
//
// for (let i = 0; i < 10; i++) {
//     time1 += banch(diffSubtract);
//     time2 += banch(diffGetTime);
// }
//
// alert('Загальний час для diffSubtract ' + time1);
// alert('Загальний час для diffGetTime ' + time2);



// alert('diffSubtract: ' + banch(diffSubtract) + ' mc');
// alert('diffGetTime: ' + banch(diffGetTime) + ' mc');


// let date = new Date(2012, 1, 20, 3, 12);
//
// alert(date)


// let date = new Date(2012, 0, 3);
//
// function getWeekDay(date) {
//
//     const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'тниця", "Субота"];
//     return daysOfWeek[date.getDay()];
//
// }
//
// let dayOfWeek = getWeekDay(date);
//
// alert(dayOfWeek);


// let date = new Date(2012, 0, 3);
//
// function getLocalDay(date) {
//
//     let day = date.getDay();
//
//     if( day === 0) {
//         day = 7;
//     }
//
//     return day
// }
//
// alert(getLocalDay(date));



// let date = new Date(2015, 0, 2);
//
//
// function getDateAgo(date, days) {
//
//     let copyDate = new Date(date);
//     copyDate.setTime(copyDate.getTime() - days * 24 * 60 * 60 * 1000);
//     return copyDate.getDate();
// }
//
// alert( getDateAgo(date, 1) ); // 1, (1 січня 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 грудня 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 січня 2014)


// function getLastDayOfMonth(year, month) {
//     const date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
//
//
// // getLastDayOfMonth(2012, 1); // 29
//
// alert(getLastDayOfMonth(2012, 1));




// function getSecondsToday() {
//
//     let startOfDay = new Date();
//     startOfDay.setHours(0, 0, 0, 0);
//
//     let now = new Date();
//
//     let diffInMilliseconds = now.getTime() - startOfDay.getTime();
//
//     return Math.floor(diffInMilliseconds / 1000);
// }
//
// alert(getSecondsToday());


// function getSecondsToday() {
//
//     let now = new Date();
//
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//
//     let diff = now - today;
//
//     return Math.round(diff / 1000);
// }
//
// alert(getSecondsToday());



// function getSecondToday() {
//
//     let d = new Date();
//
//     return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
// }
//
// alert(getSecondToday());


// function getSecondsToTomorrow() {
//
//     let now = new Date();
//
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//
//     let diff = tomorrow - now;
//
//     return Math.round(diff / 1000);
// }
//
// alert(getSecondsToTomorrow());


// function getSecondsToTomorrow() {
//
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let totalSecondsToday = (hours * 60 + minutes) * 60 + seconds;
//     let totalSecondsInADay = 86400;
//     return totalSecondsInADay - totalSecondsToday;
// }
//
// alert(getSecondsToTomorrow());


// function formatDate(date) {
//
//     let diff = new Date() - date;
//
//     if (diff < 1000) {
//         return "Прямо зараз";
//     }
//
//     let sec = Math.floor(diff / 1000);
//
//     if (sec < 60) {
//         return sec + "сек. назад";
//     }
//
//     let min = Math.floor(diff / 60000);
//
//     if (min < 60) {
//         return min + "хв. назад";
//     }
//
//     let d = date;
//
//     d = [
//         "0" + d.getDate(),
//         "0" + (d.getMonth() + 1),
//         "" + d.getFullYear(),
//         "0" + d.getHours(),
//         "0" + d.getMinutes(),
//     ].map( component => component.slice(-2) );
//
//     return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
//
// }
//
// alert( formatDate( new Date( new Date() - 1 ) ) );
// alert( formatDate( new Date( new Date() -30 * 1000 ) ) );
// alert( formatDate( new Date( new Date( new Date() - 5 * 60 * 1000 ) ) ) );
//
// alert( new Date( new Date( new Date() - 86400 * 1000 ) ) );



// function formatDay(date) {
//     let dayOfMonth = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     let hour = date.getHours();
//     let minutes = date.getMinutes();
//     let diffMs = new Date() - date;
//     let diffSec = Math.round(diffMs / 1000);
//     let diffMin = diffSec / 60;
//     let diffHour = diffMin / 60;
//
//
//     year = year.toString().slice(-2);
//     hour = hour < 10 ? '0' + hour : hour;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     month = month < 10 ? '0' + month : month;
//     dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//
//     if ( diffSec < 1) {
//         return 'Прямо зараз';
//     } else if (diffMin < 1) {
//         return `${diffSec} секунд назад`;
//     } else if (diffHour < 1) {
//         return `${diffMin} хвилин назад`;
//     } else {
//         return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
//     }
//
// }
//
// alert( formatDay( new Date( new Date() - 1) ) );
// alert( formatDay( new Date( new Date() - 30 * 1000) ) );
// alert ( formatDay( new Date( new Date() - 5 * 60 * 1000) ) );
// alert( formatDay( new Date( new Date() - 86400 * 1000) ) );



// let user = {
//     name: 'Alex',
//     age: 23,
// }
//
// let json = JSON.stringify(user);
//
// alert( typeof json);
//
// alert( json )


// let room = {
//     number: 23,
// }
//
// let meetup = {
//     title: 'Конференція',
//     participants: [{ name: 'Анна' }, { name: 'Іван' }],
//     place: room
// }
//
// room.occupiedBy = meetup;
//
// alert( JSON.stringify(meetup, function replacer( key, value) {
//     alert(`${key}: ${value}`);
//     return (key === 'occupiedBy') ? undefined : value;
// } ) );

// let user = {
//     name: 'Alex',
//     age: 23,
//     roles: {
//         isAdmin: false,
//         isEditor: true
//     }
// }
//
// alert(JSON.stringify(user, null, 4));

// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     }
// }
//
// let meetup = {
//     title: 'Конференція',
//     room
// }
//
// alert( JSON.stringify(room) );
// alert( JSON.stringify(meetup) );

//
// let numbers = "[1, 2, 3, 4, 5]"
//
// numbers = JSON.parse(numbers);
//
// alert( numbers[1] );


// let userData = '{ "name": "Alex", "age": 23, "isAdmin": false, "friends": [0, 1, 2, 3, 4, 5] }'
//
// let user = JSON.parse(userData);
//
// alert( user.friends[1] );


// let str = '{"title":"Конференція","date":"2017-11-30T12:00:00.000Z"}';
//
// let meetup = JSON.parse(str, function (key, value) {
//     if( key === 'date' ) return new Date(value);
//     return value;
// });
//
// alert( meetup.date.getDate() );


// let schedule = `{
//
//     "meetups": [
//         {"title":"Конференція","date":"2017-11-30T12:00:00.000Z"},
//         {"title":"День народження","date":"2017-04-18T12:00:00.000Z"}
//     ]
// }`
//
// schedule = JSON.parse(schedule, function (key, value) {
//     if (key === 'date') return new Date(value);
//     return value;
// }  )
//
//
// alert( schedule.meetups[1].date.getDate() )


// let user = {
//     name: "Іван Іванов",
//     age: 35
// }
//
// let userCopy = JSON.parse(JSON.stringify(user));
//
// alert(userCopy);



// let room = {
//     number: 23
// }
//
// let meetup = {
//     title: "Конференція",
//     occupiedBy: [ { name: "Іван" }, { name: "Аліна" } ],
//     place: room
// }
//
// room.occupiedBy = meetup;
// meetup.self = meetup;
//
// alert( JSON.stringify(meetup, function replacer( key,value ) {
//      alert(`${key}, ${value}`);
//     return (key != "" && value == meetup) ? undefined : value;
// } ) )



// function pow(x, n) {
//
//     let result = 1;
//
//     for(let i = 0; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
//
// alert( pow(2, 3) );


// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
//
// alert( pow(2, 3) );

// function pow(x, n) {
//     return (n == 1) ? x : ( x * pow(x, n - 1 ));
// }
//
// alert( pow(2, 3) );



// let company = { // той же об’єкт, стиснутий для компактності
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//         internals: [{name: 'Jack', salary: 1300}]
//     }
// };
//
// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce( (prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for (let subDep of Object.values(department)) {
//             sum += sumSalaries(subDep);
//         }
//         return sum;
//     }
// }
//
// alert(sumSalaries(company));



// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };
// list.next.next.next.next = null;
//
//
// list = { value: "new item", next: list }
//
// list.next = list.next.next;
//
// while (list) {
//     alert(list.value);
//     list = list.next;
// }

// function Calculator(){
//
//     this.methods = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//     }
//
//     this.calculate = function(str) {
//         let split = str.split(" ");
//         let a = +split[0];
//         let operator = split[1];
//         let b = +split[2];
//
//         if(!this.methods[operator] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//
//         return this.methods[operator](a, b);
//
//     }
//
//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     }
//
// }
//
// let calc = new Calculator;
//
// alert( calc.calculate("5 + 5") ); // 10
//
// let powerCalc = new Calculator;
//
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
//
// let result = powerCalc.calculate("5 ** 5"); // 3125
//
// alert(result);


// function sumTo(n) {
//
//     if (n === 1) {
//         return 1;
//     } else {
//         return n + sumTo( n - 1)
//     }
// }
//
// console.log(sumTo(10000));
// alert( sumTo(100) )


// function sumTo(n) {
//     return n * (1 + n) / 2;
// }
//
// alert(sumTo(100));


// function factorial(n) {
//     if(n === 0) return 1;
//     else {
//         return n * factorial(n - 1);
//     }
// }
//
// alert(factorial(5));

// function fibonacciIterative(n) {
//     if (n <= 1) {
//         return n;
//     }
//
//     let fibPrev = 0;
//     let fibNext = 1;
//
//     for(let i = 2; i <= n; i++) {
//         let temp = fibNext;
//         fibNext = fibPrev + fibNext;
//         fibPrev = temp
//     }
//
//     return fibNext;
// }
//
// alert( fibonacciIterative(77) )


// function fib(n) {
//     return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
// }
//
// alert( fib( 7 ) )


// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };


// function printList(list) {
//     let temp = list;
//
//     while(temp) {
//         alert(temp.value);
//         temp = temp.next;
//     }
// }
//
// printList(list)


// function printList(list) {
//     alert(list.value);
//
//     if (list.next) {
//         printList(list.next);
//     }
// }
//
// printList(list);



// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };


// function printReverseList(list) {
//     let arr = [];
//     let temp = list;
//
//     while(temp) {
//         arr.push(temp.value);
//         temp = temp.next;
//     }
//
//     for(let i = arr.length - 1; i >= 0; i--) {
//         alert(arr[i]);
//     }
// }
//
// printReverseList(list);


// function printReverseList(list) {
//
//     let temp = list;
//
//     if(temp.next) {
//         printReverseList(temp.next);
//     }
//
//     alert(list.value)
//
// }
//
// printReverseList(list);


// function sumAll(...args) {
//
//     let sum = 0;
//
//     for(let arg of args) {
//         sum += arg
//     }
//
//     return sum
// }
//
// alert(sumAll(1, 2, 2))


// function showName(firstName, lastName, ...titles) {
//     alert(firstName + ' ' + lastName);
//
//     alert(titles[0]);
//     alert(titles[1]);
//     alert(titles.length);
// }
//
//
// showName( 'Юрій', 'Цезар', 'Полководець', 'Гельман' );

// function showName() {
//     alert(arguments.length);
//     alert(arguments[0]);
//     alert(arguments[1]);
//
// }
//
// showName('alex', 'kost');
// showName('alex');


// function f() {
//     let showArg = () => alert(arguments[0])
//     showArg();
// }
//
// f(1)


// let arr = [1, 5, 10];
//
// alert( Math.max(...arr) );


// let arr1 = [1, -5, -4, 44];
// let arr2 = [1, 3, -4, 43];
//
// alert( Math.max(...arr1, ...arr2) );
// alert( Math.min(...arr1, ...arr2) );


// let str = 'Hello';
//
// alert([...str]);


// let arr = 'Hello';
//
// alert( Array.from(arr) )


// let arr = [1, 2, 3, 4, 5];
//
// let copyArr = [...arr];
//
// alert( JSON.stringify(arr) === JSON.stringify(copyArr) );
//
// alert( arr === copyArr );
//
// arr.push(6);
//
// alert(arr);
//
// alert(copyArr);


// let obj = { a: 1, b: 2, c: 3 };
//
// let copyObj = {...obj};
//
// alert( JSON.stringify(obj) === JSON.stringify(copyObj) );
//
// alert( obj === copyObj );
//
// obj.d = 4;
//
// alert( JSON.stringify(obj) );
// alert( JSON.stringify(copyObj) );



// function sayHiBye(firstName, lastName) {
//
//     function fullName() {
//         return firstName + " " + lastName;
//     }
//
//     alert( "Привіт, " + fullName() );
//     alert( "Бувай, " + fullName() )
// }
//
// sayHiBye("Alex", "Kost")


// function makeCounter() {
//     let count = 0;
//
//     return function() {
//         return count++;
//     }
// }
//
// let counter = makeCounter();
//
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());


// function f() {
//     let value = 123;
//
//     return function() {
//         alert(value);
//     }
// }
//
// let g = f();
//
// g()


// function f() {
//
//     let value = Math.random();
//
//     return function() { alert( value ) };
//
// }
//
// let arr = [f(), f(), f()];
//
// for(let i = 0; i < arr.length; i++) {
//     let result = arr[i];
//     result()
// }



// function f() {
//     let value = Math.random();
//
//     return function() {
//         alert(value);
//     }
//
//     // return function() {
//     //     setTimeout(() => {
//     //         alert(value);
//     //     }, 1000)
//     // }
//
//     // return function() {
//     //     console.log(value);
//     // }
// }
//
// let arr = [];
//
// for(let i = 0; i < 3; i++) {
//     arr.push( f() );
// }
//
// for(let i = 0; i < arr.length; i++) {
//     arr[i]()
// }


// function f() {
//     let value = Math.random();
//
//     function g() {
//         debugger; // в консолі введіть: alert(value); і ви побачите, що такої змінної немає!
//     }
//
//     return g;
// }
//
// let g = f();
// g();

// let value = "Сюрприз!";
//
// function f() {
//     let value = "найближче значення";
//
//     function g() {
//         debugger; // в консолі введіть: alert(value); Сюрприз!
//     }
//
//     return g;
// }
//
// let g = f();
// g();


// let name = "Іван";
//
// function sayHi() {
//     alert("Привіт, " + name)
// }
//
// name = "Петро"
//
// sayHi()


// function makeWorker() {
//     let name = "Петро";
//
//     return function() {
//         alert(name)
//     }
// }
//
// let name = "Іван";
//
// let work = makeWorker();
//
// work()
//

// function makeCounter() {
//     let count = 0;
//
//     return function() {
//        return count++;
//     }
// }
//
// let counter = makeCounter();
// let counter2 = makeCounter();
//
// alert( counter() )
// alert( counter() )
//
//
// alert( counter2() )
// alert( counter2() )


// function Counter() {
//
//     let count = 0;
//
//     this.up = function() {
//         return ++count;
//     }
//
//     this.down = function() {
//         return --count;
//     }
// }
//
// let counter = new Counter();
//
// alert( counter.up() ) // 1
// alert( counter.up() ) // 2
// alert( counter.down() ) // 1


// function sum(a) {
//     return function(b) {
//         return alert(a + b);
//     }
// }
//
// sum(6)(7);


// let x = 6;
//
// function func() {
//     let x = 7;
//
//     alert(x);
// }
//
// func()


// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b;
//     }
// }
//
// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x)
//     }
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
//
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2



// let users = [
//     { name: "Іван", age: 20, surname: "Іванов" },
//     { name: "Петро", age: 18, surname: "Петров" },
//     { name: "Енн", age: 19, surname: "Гетевей" }
// ];
//
// function byField(fieldName) {
//     return (a, b) => {
//         const aField = a[fieldName].toString().toLocaleLowerCase(); // Нормализуем в нижний регистр
//         const bField = b[fieldName].toString().toLocaleLowerCase(); // Нормализуем в нижний регистр
//
//         return aField.localeCompare(bField, 'uk'); // Указываем локаль явно
//     };
// }
//
// // Сортировка по имени
// users.sort(byField("name"));
// console.log("Сортировка по имени:", users);
//
// // Сортировка по возрасту
// users.sort(byField("age"));
// console.log("Сортировка по возрасту:", users);



// function makeArmy() {
//     let shooters = [];
//
//     for(let i = 0; i < 10; i++) {
//         let shooter = function() {
//             alert( i );
//         }
//         shooters.push(shooter);
//     }
//     return shooters;
// }
//
// let army = makeArmy();
//
// army[0]();
// army[1]();
// army[2]();


// function sayHi() {
//     phrase = "Привіт"; // (*)
//
//     if (false) {
//         var phrase;
//     }
//
//     alert(phrase);
// }
// sayHi();


// function sayHi() {
//     alert("Hello World!");
// }
//
// alert(sayHi.name)

// function f(sayHi = function () {}) {
//     alert(sayHi.name)
// }
//
// f()


// let user = {
//
//     sayHi() {
//
//     },
//
//     sayBye() {
//
//     }
// }
//
// alert(user.sayHi.name);
//
// alert(user.sayBye.name);


// let arr = [function () {}];
//
// alert(arr[0].name)


// function f(a) {}
// function f1(a, b) {}
// function f2(a, b, ...more) {}
//
//
// alert(f.length);
// alert(f1.length);
// alert(f2.length);


// function ask(question, ...handlers) {
//     let isYes = confirm(question);
//
//     for(let handler of handlers) {
//         if(handler.length === 0) {
//             if(isYes) handler();
//         } else {
//             handler(isYes);
//         }
//     }
// }
//
// ask("Вопрос?", () => alert("Ты сказал да"), result => alert(result));


// function sayHi() {
//     alert("Hello World!");
//
//     sayHi.counter++;
// }
//
// sayHi.counter = 0;
//
// sayHi();
// sayHi();
// sayHi();
//
// alert(`Summoned ${sayHi.counter} times`);


// function makeCounter() {
//
//     function counter() {
//         return counter.count++;
//     }
//     counter.count = 0;
//
//     return counter;
// }
//
// let result = makeCounter();
//
// alert(result())
// alert(result())


// let sayHi = function(who) {
//     alert(`Привіт, ${who}`);
// };
//
// let sayHi = function func(who) {
//     alert(`Привіт, ${who}`);
// };

// let sayHi = function func(who) {
//     if (who) {
//         alert(`Привіт ${who}`)
//     } else {
//         func("Олександр");
//     }
// }
//
// sayHi();
//
//
// let welcome = sayHi;
//
// sayHi = null;
//
// welcome();


// function makeCounter() {
//     let count = 0
//
//     function counter(){
//         return count++;
//     }
//
//     counter.set = value => count = value;
//
//     counter.decrease = () => count--;
//
//     return counter;
//
// }
//
// let counter = makeCounter();
//
// alert(counter());


// function sum(a) {
//     let currentSum = a;
//
//     function f(b) {
//         currentSum += b;
//         return f;
//     }
//
//     f.toString = function() {
//         return currentSum;
//     }
//     return f;
// }
//
// alert( sum(5)(5)(5)(5)(5)(5) );

// let func = new Function('a', 'b', 'return a + b');
//
// let sum = func(44,44);
//
// alert(sum)




// let sayHi = new Function('alert("Hello world")');
//
// sayHi();


// function getFunc() {
//     let value = 'test';
//
//     let func = new Function('alert(value)');
//
//     return func;
// }
//
// getFunc()();

// function getFunc() {
//     let value = 'Test';
//
//     let func = function() {
//         alert(value)
//     }
//
//     return func;
// }
//
// getFunc()();



































