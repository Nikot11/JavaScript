// Задача 1

books = [
  { title: "Book 1", author: "Author A", year: 2000 },
  { title: "Book 2", author: "Author B", year: 2010 },
  { title: "Book 3", author: "Author C", year: 2020 },
];

// books.forEach((book)) => {
//     console.log({book.title});
// };

// Задача 2

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  addres: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  },
  hobbies: ["Reading", "Traveling", "Cooking"],
};

additionalInfo = {
  email: "johndoe@gmail.com",
  phone: "076544060",
  education: {
    degree: "Economics",
    major: "Business",
  },
};

const objectSpread = { ...person, ...additionalInfo };
console.log(objectSpread);

user = {
  id: 123,
  username: "jsmith",
  fullName: { firstName: "John", lastName: "Smith" },
  contact: { email: "john@example.com", phone: "555-555-5555" },
  addresses: [
    {
      type: "home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      type: "work",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ],
};

const { username } = user;
const {
  fullName: { firstName, lastName },
} = user;
const {
  contact: { email },
} = user;
const {
  addresses: [
    { street: homeStreet, city: homeCity, state: homeState, zip: homeZip },
    { street: workStreet, city: workCity, state: workState, zip: workZip },
  ],
} = user;

console.log(username, firstName, lastName, email);
console.log(
  homeStreet,
  homeCity,
  homeState,
  homeZip,
  workStreet,
  workCity,
  workState,
  workZip
);

// Задача 3

const countries = [
  "Armenia",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);
const countriesFiltered = countries.filter(
  (country) => country.includes("ia") && country.length > 7
);

console.log(countriesFiltered, countriesWithLand);

// Задача 4

let zooAnimals = [
  {
    id: "0938aa23-f153-4937-9f88-4858b24d6bce",
    name: "lions",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Zena",
        sex: "female",
        age: 12,
      },
      {
        name: "Maxwell",
        sex: "male",
        age: 15,
      },
      {
        name: "Faustino",
        sex: "male",
        age: 7,
      },
      {
        name: "Dee",
        sex: "female",
        age: 14,
      },
    ],
  },
  {
    id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
    name: "tigers",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Shu",
        sex: "female",
        age: 19,
      },
      {
        name: "Esther",
        sex: "female",
        age: 17,
      },
    ],
  },
  {
    id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
    name: "bears",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Hiram",
        sex: "male",
        age: 4,
      },
      {
        name: "Edwardo",
        sex: "male",
        age: 4,
      },
      {
        name: "Milan",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
    name: "penguins",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Joe",
        sex: "male",
        age: 10,
      },
      {
        name: "Tad",
        sex: "male",
        age: 12,
      },
      {
        name: "Keri",
        sex: "female",
        age: 2,
      },
      {
        name: "Nicholas",
        sex: "male",
        age: 2,
      },
    ],
  },
  {
    id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
    name: "otters",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Neville",
        sex: "male",
        age: 9,
      },
      {
        name: "Lloyd",
        sex: "male",
        age: 8,
      },
      {
        name: "Mercedes",
        sex: "female",
        age: 9,
      },
      {
        name: "Margherita",
        sex: "female",
        age: 10,
      },
    ],
  },
  {
    id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
    name: "frogs",
    popularity: 2,
    location: "SW",
    residents: [
      {
        name: "Cathey",
        sex: "female",
        age: 3,
      },
      {
        name: "Annice",
        sex: "female",
        age: 2,
      },
    ],
  },
  {
    id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
    name: "snakes",
    popularity: 3,
    location: "SW",
    residents: [
      {
        name: "Paulette",
        sex: "female",
        age: 5,
      },
      {
        name: "Bill",
        sex: "male",
        age: 6,
      },
    ],
  },
  {
    id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
    name: "elephants",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Ilana",
        sex: "female",
        age: 11,
      },
      {
        name: "Orval",
        sex: "male",
        age: 15,
      },
      {
        name: "Bea",
        sex: "female",
        age: 12,
      },
      {
        name: "Jefferson",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
    name: "giraffes",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Gracia",
        sex: "female",
        age: 11,
      },
      {
        name: "Antone",
        sex: "male",
        age: 9,
      },
      {
        name: "Vicky",
        sex: "female",
        age: 12,
      },
      {
        name: "Clay",
        sex: "male",
        age: 4,
      },
      {
        name: "Arron",
        sex: "male",
        age: 7,
      },
      {
        name: "Bernard",
        sex: "male",
        age: 6,
      },
    ],
  },
];

function popularAnimals(animals) {
  animals.forEach((animal) => {
    if (animal.popularity > 4) {
      console.log([animal.name]);
    }
  });
}

popularAnimals(zooAnimals);

const oldestElephant = (zooAnimals) => {
  const elephants = zooAnimals.find((animal) => animal.name === "elephants");
  const oldestElephant = elephants.residents.reduce((oldest, current) =>
    current.age > oldest.age ? current : oldest
  );
  return oldestElephant.name;
};

console.log("Name of the oldest Elephant is: ", oldestElephant(zooAnimals));

const femalePenguinsUdnerTen = (zooAnimals) => {
  const penguins = zooAnimals.find((animal) => animal.name === "penguins");
  const youngestFemalePenguins = penguins.residents.filter(
    (penguin) => penguin.sex === "female" && penguin.age < 10
  );

  return youngestFemalePenguins;
};

console.log("Youngest female penguin ", femalePenguinsUdnerTen(zooAnimals));

const longestNameGroup = (zooAnimals) => {
  const animalNameGroup = zooAnimals.reduce((longest, current) =>
    current.name.length > longest.name.length ? current : longest
  );
  let sum = 0;
  animalNameGroup.residents.forEach((animal) => (sum += animal.age));
  console.log(sum);

  return longestNameGroup.name;
};
longestNameGroup(zooAnimals);

const smallestAndBiggest = (zooAnimals) => {
  const smallestGroup = zooAnimals.reduce((smallest, current) =>
    current.residents.length < smallest.residents.length ? current : smallest
  );
  const biggestGroup = zooAnimals.reduce((biggest, current) =>
    current.residents.length > biggest.residents.length ? current : biggest
  );

  const arrayOfGroups = [smallestGroup, biggestGroup];
  const arrayOfNames = [];

  arrayOfGroups.forEach((item) => {
    item.residents.forEach((resident) => arrayOfNames.push(resident.name));
  });

  return arrayOfNames;
};

console.log(smallestAndBiggest(zooAnimals));

// Задача 5

const checkGrade = (grade) => {
  grade > 90 && grade <= 100
    ? console.log("A")
    : grade > 80 && grade <= 90
    ? console.log("B")
    : grade > 70 && grade <= 80
    ? console.log("C")
    : grade > 60 && grade <= 70
    ? console.log("D")
    : console.log("F");
};

checkGrade(72);
