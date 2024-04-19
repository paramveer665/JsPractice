// const jonas={
//     name:"akshay",
//     age:"26",
//     job:"self employed"
// };

// console.log(jonas);


// // const req= prompt('What do you require name, age or job?');

// if(jonas[req]){
//     console.log(jonas[req])
// }
// else{
//     console.log('you atleast need to pass name age or job as input in prompt');
// }


// const jonas={
//     name:"akshay",
//     birthYear:1998,
//     job:"self employed",
//     hasDriverLicense:true
//     // calcAge: function(){
//     //     this.age=2024-this.birthYear;
//     // }
// };

// console.log(`${jonas.name} is  year old ${jonas.job}, and he has ${jonas.hasDriverLicense?"a":"no"} driver's license`)
// console.log(jonas.name)

const mark={
    fullName:"Mark Miller",
    mass:78,
    height:1.69,

    calcBMI: function(){
        this.bmi=(this.height*this.height)/this.mass;
        return this.bmi;
    }
};


const john={
    fullName:"John Miller",
    mass:92,
    height:1.95,

    calcBMI: function(){
        this.bmi=(this.height*this.height)/this.mass;
        return this.bmi;
    }
};

const markBMI=mark.calcBMI();
const johnBMI=john.calcBMI();

if(markBMI>johnBMI){
    console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
}
else{
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI ${mark.bmi}`)
}

