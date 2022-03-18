//Exercise 1- Address Object

let address = {
  street: "that cool street",
  city: "that cool city",
  zipCode: "1234-123",
};

function showAdress(address) {
  for (const key in address) {
    console.log(key, address[key]);
  }
}

showAdress(address);

// Exercise 2- Factory and Constructor Functions

let address1 = createAddress("a", "b", "c");
console.log(address1);

console.log("\n");

let address2 = new Address("d", "e", "f");
console.log(address2);

// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}
// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// Exercise 3- Object Equality
let ads1 = new Address("1", "2", "3");
let ads2 = new Address("1", "2", "3");

console.log(areEqual(ads1, ads2));
console.log(areSame(ads1, ads2));

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

// Exercise 4- Blog Post Object
let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 3,
  comments: [
    {
      author: "z",
      body: "x",
    },
    {
      author: "y",
      body: "q",
    },
    {
      author: "o",
      body: "b",
    },
  ],
  isLive: true,
};

console.log(post);

//Exercise 5- Constructor Functions
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let newPost = new Post("sample title", "sample body", "sample author");
console.log(newPost);

// Exercise 6- Price Range Object
let priceRanges = [
  { label: "€", tooltip: "cheap", minPerPerson: 0, maxPerPerson: 10 },
  { label: "€€", tooltip: "medium", minPerPerson: 11, maxPerPerson: 15 },
  { label: "€€€", tooltip: "expensive", minPerPerson: 16, maxPerPerson: 20 },
];

let restaurants = [
  {
    averagePerperson: 5,
  },
];
