const students = [
  // Arrays scale well. You can work with array methods whether you have 20 lines or 20000
  {
    name: "Alice",
    age: 20,
    grade: 85,
  },
  {
    name: "Bob",
    age: 22,
    grade: 90,
  },
  {
    name: "Charlie",
    age: 21,
    grade: 78,
  },
  {
    name: "Diana",
    age: 23,
    grade: 95,
  },
];

// Log names

// students.forEach((student) => console.log(student.name, student.grade)); // For each student, log each student's name and grade (not age)

// Filtering (filter students with grades above 80 and those who are 21 or younger)

// const topStudents = students.filter((student) => student.grade > 80); // Above 80 (80 not included)
// console.log(topStudents);

// const youngStudents = students.filter((student) => student.age <= 21); // Less than or equal to 21 (21 included)
// console.log(youngStudents);

// forEach and Filter

// const topStudents = students
//   .filter((student) => student.grade > 80)
//   .forEach((student) => console.log(student.name));

// const youngStudents = students
//   .filter((student) => student.age <= 21)
//   .forEach((student) => console.log(student.name));

// const olderStudents = students
//   .filter((student) => student.age >= 21)
//   .forEach((student) => console.log(student.name));

// forEach and filter with product data

const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

// Log the name and price
// products.forEach((product) => console.log(product.name, product.price));

// Increase the price by 10%
// const markup = 1.1;
// const markedUpProducts = products.forEach((product) =>
//   console.log(product.name, product.price * markup)
// );

const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) categories.push(product.category); // Push adds elements to lists; if the list of categories does not include a category, it will be included as we go through each product (! is used to denote )
});
console.log(categories);
