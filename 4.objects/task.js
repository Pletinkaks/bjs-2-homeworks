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
    if (!this.excluded && this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
      }
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty('marks') && this.marks.length > 0) {
        const sumOfMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
        return sumOfMarks / this.marks.length;
      } else {
        return 0;
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