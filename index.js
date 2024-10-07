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

const topStudents = students.filter((student) => student.grade > 80); // Above 80 (80 not included)
console.log(topStudents);

const youngStudents = students.filter((student) => student.age <= 21); // Less than or equal to 21 (21 included)
console.log(youngStudents);
