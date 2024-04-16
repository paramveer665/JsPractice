const jonas={
    name:"akshay",
    age:"26",
    job:"self employed"
};

console.log(jonas);


const req= prompt('What do you require name, age or job?');

if(jonas[req]){
    console.log(jonas[req])
}
else{
    console.log('you atleast need to pass name age or job as input in prompt');
}