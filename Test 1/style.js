// Student Names and Information

// student 1
const studentName = "Vincent";
const courseName = "Software developer";

const marks1 = Number(prompt("Enter mark 1"));
const marks2 = Number(prompt("Enter mark 2"));
const marks3 = Number(prompt("Enter mark 3"));

function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

const average = calculateAverage(marks1, marks2, marks3);

console.log("Student:", studentName);
console.log("Course:", courseName);
console.log("Average marks:", average);

// Calculate grade
let grade;

if (average >= 80) {
    grade = "A";
} else if (average >= 70) {
    grade = "B";
} else if (average >= 60) {
    grade = "C";
} else if (average >= 50) {
    grade = "D";
} else {
    grade = "E";
}

console.log("Grade:", grade);