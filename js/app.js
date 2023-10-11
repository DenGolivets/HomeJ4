
// 1. вывести одной строкой минимальное значние массива array с помощью деструктуризации и Math

const array = [1,2,3,4,6,710,34013,13];
const arr = Math.min(...array);

console.log(`MinValue: ${arr}`)

// 2.функция multiply не принимает явно никаких параметров

function multiply() {
  if (arguments.length === 0) {
    return 1;
  }
  const  [first,...last] = arguments;
  return first * multiply(...last);
}
const res = multiply(100,200,83902,1230)

console.log(`Result: ${res}`)  

// В результате фукнции должно вернутся число, которое является результатом умножения всех аргументов переданых в функцию

// 3. У нас есть фукниця totalPrice, с помощью деструктуризации объекта сделать так, что б функция работала.
const product = {
  productName: 'Water',
  price: 20,
  count: 3
}

function totalPrice(item) {
  const {price, count} = item;
  return price * count;
}

console.log(`Total Price: ${totalPrice(product)}`)

//4. написать объект в котором будет свойство items (изначально пустой массив), 
// метод объекта setItems который принимает массив значений и устанавливает этот массив как значение свойста items
// метод объекта sum котроый возвращает сумму всех элементов массива items 
// метод maxValue который возвращает максимальное значение из массива items с использованием деструктуризации массива.

const itemConstr = {
  items: [],
  setItems(values) {
    this.items = values;
  },
  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);
  },
  maxValue() {
    return Math.max(...this.items);
  },
};

itemConstr.setItems([2,4,6,8,10]);
console.log(`Sum: ${itemConstr.sum()}, maxValue: ${itemConstr.maxValue()}`);

// 5. Написать функционал что б при вызове showPrediction выводилась случайная фраза из массива predictsArr1 для predictions1 и predictsArr2 для predictions2

const predictsArr1 = [
   'Удача придет откуда не ждете.',
    'Давние долги будут возвращены вам.',
    'Вас ожидает неожиданное денежное поступление.',
    'Все неоконченные дела будут завершены.',
    'Яркое приключение уже поджидает вас.',
    'Планирование времени поможет вам не опоздать на встречу.',
    'Интуиция на этот раз не подведет вас. Используйте это.',
    'Прислушайтесь к себе и ответ на вопрос будет найден.',
    'Появится возможность отправиться в дорогу.',
    'Ваш ценный опыт сможет кому-то помочь, если перестанете его прятать в себе.',
    'Вам не удастся понравиться абсолютно всем, не тратьте на это энергию.',
    'Одежда, которая вас старит, не достанется вам.'
]  


const obj = {
  predictions1: [],
  predictions2: [],
  setPredictions() {
    this.predictions1 = predictsArr1;
    this.predictions2 = predictsArr2;
  },
  showPrediction() {
    const randomText1 = Math.floor(Math.random() * this.predictions1.length);
    const randomText2 = Math.floor(Math.random() * this.predictions2.length);
    const prediction1 = this.predictions1[randomText1];
    const prediction2 = this.predictions2[randomText2];

    console.log(`Prediction 1: ${prediction1}`);
    console.log(`Prediction 2: ${prediction2}`);
  },
  takeNumber() {
    const number = Math.floor(Math.random() * this.predictions1.length * this.predictions2.length);
    console.log(`Random Number: ${number}`);
  },
}
const predictions = obj;
predictions.setPredictions(predictsArr1, predictsArr2);
predictions.showPrediction();
predictions.takeNumber();
