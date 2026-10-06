// Task 1


let employees = [
    {name: "John", age: 24, salary: 180000, active: true},
    {name: "Mary", age: 31, salary: 250000, active: false},
    {name: "David", age: 27, salary: 150000, active: true},
    {name: "Sarah", age: 35, salary: 320000, active: true},
    {name: "Peter", age: 22, salary: 100000, active: true},
]

let companyemployees = employees.filter(function(employees){
    return employees.salary > 160000;
}); 

let result = employees.some(function(employees){
    return employees.salary === 150000
})

let agecheck = employees.find(function(employees){
    return employees.age < 25;
})

let paidemployee = employees.every(function(employees){
    return employees.salary && employees.active <= 150000;

})

let increasedSalary = employees.map(function(employees){
    return employees.salary * 1.10;
})
console.log(increasedSalary)
console.log(paidemployee)
console.log(agecheck)
console.log(result)
console.log(companyemployees)