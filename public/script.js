// Задача 1: Сортировка объектов по возрастанию свойства Текст задачи: У вас есть массив объектов, каждый из которых представляет собой человека с полями "имя" и "возраст". Напишите функцию на TypeScript, которая сортирует этот массив по возрастанию возраста.
const peoples = [
    { name: "Иван", age: 25 },
    { name: "Мария", age: 30 },
    { name: "Алексей", age: 20 },
    { name: "Елена", age: 35 },
    { name: "Петр", age: 28 },
    { name: "Ольга", age: 22 }
];
function sortArray(people) {
    // Создаем копию массива, чтобы не изменять исходный
    const sortedPeoples = [...peoples];
    // Сортируем копию по возрастанию возраста
    return sortedPeoples.sort((a, b) => a.age - b.age);
}
const sortedArray = sortArray(peoples);
console.log(sortedArray);
const products = [
    {
        id: 8,
        name: "Кроссовки",
        price: 4500,
        category: "Обувь",
        description: "Удобные кроссовки для занятий спортом или прогулок.",
    },
    {
        id: 9,
        name: "Планшет",
        price: 15000,
        category: "Электроника",
        description: "Легкий и компактный планшет для работы и развлечений.",
    },
    {
        id: 10,
        name: "Стол",
        price: 3500,
        category: "Мебель",
        description: "Прочный и стильный стол для офиса или дома.",
    },
    {
        id: 11,
        name: "Фотокамера",
        price: 28000,
        category: "Фототехника",
        description: "Профессиональная фотокамера для создания высококачественных снимков.",
    },
    {
        id: 12,
        name: "Холодильник",
        price: 30000,
        category: "Бытовая техника",
        description: "Большой холодильник с разделителями для продуктов питания.",
    },
];
function filterProduct(products, targetPrice) {
    return products.filter((product) => product.price < targetPrice);
}
console.log("====================================");
console.log(filterProduct(products, 10000));
;
const books = [
    {
        id: 1,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        price: 10,
        year: 1949
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        price: 12,
        year: 1960
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 8,
        year: 1925
    },
    {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        price: 9,
        year: 1951
    },
];
function findBook(title) {
    return books.find((book) => book.title === title);
}
console.log(findBook("The Great Gatsby"));
// Задача 4: Вычисление суммы значений свойства объектов Текст задачи: У вас есть массив объектов, представляющих продукты с полем "цена". Напишите функцию, которая вычисляет общую сумму цен продуктов.
function totalPrice(products) {
    return products.reduce((totalPrice, product) => totalPrice + product.price, 0);
}
console.log(totalPrice(products));
const students = [
    { name: "Иван", grade: 5 },
    { name: "Мария", grade: 4 },
    { name: "Алексей", grade: 3 },
    { name: "Ольга", grade: 5 },
    { name: "Николай", grade: 2 },
    { name: "Дарья", grade: 4 },
];
function upgrateMark(name, grade) {
    const student = students.find((student) => student.name === name);
    if (student) {
        student.grade = grade;
    }
    else {
        console.log(`Студент с именем ${name} не найден.`);
    }
}
console.log(upgrateMark("Мария", 2));
console.log(students);
// Создание массива заказов с различными статусами
const orders = [
    { id: 1, status: "в обработке" },
    { id: 2, status: "доставлено" },
    { id: 3, status: "отменено" },
    { id: 4, status: "отменено" },
    // Добавьте другие заказы по аналогии
];
console.log(orders);
function findOrder(status) {
    return orders.reduce((totalOrder, order) => totalOrder + (order.status === status ? 1 : 0), 0);
}
console.log(findOrder("отменено"));
export {};
