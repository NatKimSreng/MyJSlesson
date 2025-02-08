const students = [
  {
    name: "Kimsreng",
    age: 24,
    grade: "A",
  },
  {
    name: "Jungkook",
    age: 23,
    grade: "B",
  },
  {
    name: "Minyoung",
    age: 25,
    grade: "C",
  },
  {
    name: "Yoojung",
    age: 22,
    grade: "D",
  },
];
let i = 0;

while (i < students.length) {
  console.log(
    `Student: ${students[i].name} is ${students[i].age} and got grade ${students[i].grade}`
  );
  i++;
}
