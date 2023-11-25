//Задача 1. Инкапсуляция студента

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
      }
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
        return 0;
      } else {
        return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
      }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

console.log(student1.getAverage()); // 0

console.log(student1.getAverage()); // 4.5

console.log(student2);