function helloWorld(){
    alert('hello world');
}

function helloUser(user){
    alert('hello '+user);
}

function add(num1, num2){
    return num1+num2;
}

function conditions(num1, num2){
    if(num1 > num2){
        console.log(num1+' is greater than '+num2);
    }
    else if(num1 < num2){
        console.log(num1+' is smaller than '+num2);
    }
    else {
        console.log(num1+' and '+num2+' are equal');
    }
}

function basicLoop(){
    for(let i=0; i<10; i++){
        console.log(i);
    }
}

function arrayLoop(list){
    for(let i=0; i<list.length; i++){
        console.log(list[i]);
    }
}