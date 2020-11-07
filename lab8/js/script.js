
String.prototype.filter = function(word)  {
  let temp = this.indexOf(word+" ");
  let str = this;
  while(temp >=0) {
    str = str.substring(0,temp) + str.substring(temp+word.length);
    temp = str.indexOf(word);
  }
  return str;
}

console.log("This house is not nice !".filter("not"));


Array.prototype.bubbleSort = function(){
  let temp;
  for (j=this.length-1; j>0; j--) {
    for (let i=0; i<j; i++) {
      if (this[i]>this[i+1]) {
        temp = this[i+1];
        this[i+1] = this[i];
        this[i] = temp;
      }
    }
  }
  return this;
}
console.log([6,4,0,3,-2,1].bubbleSort());

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;  
}
Person.prototype.getName = function(){
  return this.firstName+" "+this.lastName;
}

function Teacher(firstName, lastName) {
  Person.call(this, firstName, lastName);  
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function(subject) {
  console.log(this.getName()+" is teaching "+subject);
}
const myTeacher = new Teacher("Xing", "Tina");
console.log(myTeacher);
myTeacher.teach("WAP");


const personClass = {
  name: '',
  setName: function(newName) {
    this.name = newName;
  }
}
const teacherClass = Object.create(personClass);
teacherClass.setSubject = function(subject) {
  this.subject = subject;
}

teacherClass.teach = function(){
  console.log(this.name + ' is now teaching ' + this.subject);
}

const john = Object.create(teacherClass);
john.setName("John");
john.setSubject("WPP");
console.log(john);
john.teach();


function PersonEx4(name, age){
  this.name = name;
  this.age = age;
}

PersonEx4.prototype.greeting = function() {
  console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

PersonEx4.prototype.salute = function() {
  console.log(`Good morning!, and in case I dont see you,
  good afternoon, good evening and good night!`);
};

function StudentNo4(name, age, major) {
  PersonEx4.call(this, name, age);
  this.major = major;
}

StudentNo4.prototype = Object.create(PersonEx4.prototype);
StudentNo4.prototype.constructor = StudentNo4;

StudentNo4.prototype.greeting = function(){
  console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`); 
}

function ProfessorNo4(name, age, department) {
  PersonEx4.call(this, name, age);
  this.department = department;  
}

ProfessorNo4.prototype = Object.create(PersonEx4.prototype);
ProfessorNo4.prototype.constructor = ProfessorNo4;

ProfessorNo4.prototype.greeting = function(){
  console.log(`Good day, my name is ${this.name} and I am in ${this.department} department.`); 
}

const testProfessor = new ProfessorNo4('Mohan', 55,'Master in Computer Science');
const testStudent = new StudentNo4('Pedro', 25,'Art in Lanugages');

testProfessor.salute();
testProfessor.greeting();

testStudent.salute();
testStudent.greeting();