// Functions
function helloWorld(){
    console.log('Hello World');
}

function helloUser(user){
    alert('Hello '+user);
}

function add(num1, num2){
    let result = num1+num2;
    return result;
}

function conditions(num1, num2){
    if (num1 > num2){
        console.log(num1+' is greater than '+num2);
    }
    else if (num1 < num2){
        console.log(num1+' is smaller than '+num2);
    }
    else {
        console.log('Both numbers are equal');
    }
}


function basicLoop(){
    for(let i=0; i<=10; i++){
        console.log('hello:'+i);
    }
}

function arrayLoop(list){
    for(let i = 0; i<list.length;i++){
        console.log(list[i]);
    }
}