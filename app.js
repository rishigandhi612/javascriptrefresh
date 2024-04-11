console.log('abc')
const greeting=()=>{
    console.log('Hello Good morning');
}
greeting()
let sum=(a,b)=>{
    console.log(a+b);
}
let diff=(a,b)=>{
    console.log(a-b);
}
let multi=(a,b)=>{
    console.log(a*b);
}
let divi=(a,b)=>{
    console.log(a/b);
}
sum(5,10)
diff(5,10)
multi(5,10)
divi(5,10)
let students=[{name:'s1',age:20},
    {name:'s2',age:20},
    {name:'s3',age:20},
    {name:'s4',age:20}]

let print=(student)=>{
    console.log(student.name,student.age)
}
students.forEach(student=>print(student))

for (let i=0; i<students.length; i++){
    console.log(students[i].name +"   "+ students[i].age);

}
students.push({ name: 's5', age: 20 });
console.log(students)
students[students.length - 1].age = 22; 
console.log(students)
students.splice(4, 1);
console.log(students)
