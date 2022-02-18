// JavaScript source code
class Person
{
    constructor(fullName, weightInKg, heightInM)
    {
        this.fullName = fullName;
        this.weightInKg = weightInKg;
        this.heightInM = heightInM;
    }
    
}

function bodyMssIndex(weight, height)
{
    return weight / (height * height);
}


let people = [
    new Person('brad', 80, 1.7),
    new Person('peter', 50, 1.5),
    new Person('hasse', 40, 2.1)
];

//let people = [];
//let done = false;
//while (!done)
//{
//    let name = prompt('Enter your name (or leave blank if no more people)')
//    if (name)
//    {
//        let weight = Number(prompt('Enter your weight: (kg)'));
//        let height = Number(prompt('Enter your height: (meter)'));
//        let person = {
//            fullName: name,
//            weightInKg: weight,
//            heightInM: height
//        };
//        people.push(person);
//    }
//    else {
//        done = true;
//    }
//}
//let totalBmi = 0;
//people.forEach(p => {
//    let bmi = bodyMssIndex(p.weightInKg, p.heightInM)
//    totalBmi += bmi;
//});
//let avaregeBmi = totalBmi / people.length;
//alert('Avarge BMI: ' + avaregeBmi);

let totalBmi = 0;
for (let p of people) {
    let bmi = bodyMssIndex(p.weightInKg, p.heightInM)
    totalBmi += bmi;
}
  

let avaregeBmi = totalBmi / people.length;
alert('Avarge BMI: ' + avaregeBmi);


let peopleAbove75 = people.filter(p => p.heightInM > 1.75);
let allHeights = people.map(p => p.heightInM);
let allBmi = people.map(p => bodyMssIndex(p.weightInKg, p.heightInM));

debugger;

