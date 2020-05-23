// const person = {
//     name:'SiThu San',
//     age: 24,
//     location: {
//         city: 'Yangon',
//         temp: 42,
//     }
// }

// const { name:firstName = 'Sayr G', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp:temperature } = person.location
// if (temperature && city)
//     console.log(`It is ${temperature} in ${city}`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Sayr G' } = book.publisher;
// console.log(publisherName);

// const address = [
//     '1299 S Kan Lan', 'Yangon', 'Myanmar', '1122'
// ]
// const [,city,country,zip] = address;
// console.log(`You are in ${city} ,${country}`)

const item = ['coffee (hot)','$2.00','$2.5','$2.75'];

const [coffee,,price] = item;
console.log(`A Medium ${coffee} costs ${price}`);