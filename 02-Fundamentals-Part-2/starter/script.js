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

// const mark={
//     fullName:"Mark Miller",
//     mass:78,
//     height:1.69,

//     calcBMI: function(){
//         this.bmi=(this.height*this.height)/this.mass;
//         return this.bmi;
//     }
// };


// const john={
//     fullName:"John Miller",
//     mass:92,
//     height:1.95,

//     calcBMI: function(){
//         this.bmi=(this.height*this.height)/this.mass;
//         return this.bmi;
//     }
// };

// const markBMI=mark.calcBMI();
// const johnBMI=john.calcBMI();

// if(markBMI>johnBMI){
//     console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// }
// else{
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI ${mark.bmi}`)
// }

// const arr=[
//     "ajay",
//     23,
//     "teacher",
//     ["ajay","vijay","sanjay"]
// ]

// for( let ar=0;ar<=arr.length-1;ar++){
//     console.log(`This is how its done ${arr[ar]}`)
// }


const bill=[ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tipAmount=[]
const totalAmount=[]
let tip
let total=0



for(let i =0;i<bill.length;i++){
    const calcTip = function () {
        
        tip= bill[i] >= 50 && bill[i]<= 300?bill[i]*0.15:tip=bill[i]*0.20;
        total=tip+bill[i]
        totalAmount.push(total)
        tipAmount.push(tip) 
       }
    
    calcTip()

    console.log(`bill amount is ${bill[i]}`)
    console.log(`Tips are as such ${tipAmount[i]}`)
    console.log(`tip+bill amount is ${totalAmount[i]}`)
    console.log("----------------------")
}


