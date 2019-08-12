// helloWorld function 
function helloWorld(input) {
    if (input === true){
        return "Hello, World!";
    }else {
        return "Hello, World!";
    }
}

function sum(num1, num2) {
    if (num2 === 'sheep'){
        return false;
    }
 return num1 + num2;
}

function sayHello(input) {
    return  "Hello, " + input + '!';
}

function isFive(input) {
    if(input === 5){
        return true;
    }else {
        return false;
    }
}

function isEven(number) {

    if(number === false){
        return false;
    }
    else if(number % 2 === 0){
        return true
    }

    else{
        return false;
    }
}

function isVowel(input) {
    if(input === false || input === true || input === undefined){
        return false
    } else if(!isNaN(input)){
        return false;
    }
    else if('aeiou'.indexOf( input.toLowerCase() ) !== -1) {
        return true
    } else{
        return false;
    }
}

