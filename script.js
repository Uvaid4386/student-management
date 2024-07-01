// Step 1: Create a Student Object
function createStudent(id, name, grades = {}) {
    return {
        id: id,
        name: name,
        grades: grades
    };
}

// Step 2: Create an Array to Store Students
let students = [];

// Step 3: Functions to Add and Remove Students

// Function to add a student
function addStudent(id, name, grades = {}) {
    const student = createStudent(id, name, grades);
    students.push(student);
}

// Function to remove a student by id
function removeStudent(id) {
    students = students.filter(student => student.id !== id);
}

// Example Usage
// Add two students
addStudent(1, "Alice", { Math: 90, Science: 85 });
addStudent(2, "Bob", { Math: 75, Science: 95 });

// Print the list of students after adding them
console.log("Students after adding:");
console.log(students);

// Remove one student
removeStudent(1);

// Print the list of students after removing one
console.log("Students after removing:");
console.log(students)