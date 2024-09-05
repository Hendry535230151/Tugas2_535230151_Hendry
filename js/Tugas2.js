function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;    
}

function multiplication(num1, num2) {
    return num1 * num2;    
}

function division(num1, num2) {
    return num1 / num2;    
}

const input_1 = document.getElementById('input__1');
const input_2 = document.getElementById('input__2');
const value_1 = document.getElementById('value__1');

document.getElementById("button__1").addEventListener('click', function() {
    value_1.value = addition(parseFloat(input_1.value), parseFloat(input_2.value));
});

document.getElementById("button__2").addEventListener('click', function() {
    value_1.value = subtraction(parseFloat(input_1.value), parseFloat(input_2.value));
});

document.getElementById("button__3").addEventListener('click', function() {
    value_1.value = multiplication(parseFloat(input_1.value), parseFloat(input_2.value));
});

document.getElementById("button__4").addEventListener('click', function() {
    value_1.value = division(parseFloat(input_1.value), parseFloat(input_2.value));
});

const input_3 = document.getElementById('input__3');
const value_2 = document.getElementById('value__2');

input_3.addEventListener('keypress', function(eventListener){
    if(eventListener.key === "Enter"){   
        if(input_3.value >= 0 && input_3.value <= 40) {
            value_2.value = 'E';
        }
        else if(input_3.value >= 41 && input_3.value <= 55) {
            value_2.value = 'D';
        }
        else if(input_3.value >= 56 && input_3.value <= 70) {
            value_2.value = 'C';
        }
        else if(input_3.value >= 71 && input_3.value <= 80) {
            value_2.value = 'B';
        }
        else if(input_3.value >= 80 && input_3.value <= 100) {
            value_2.value = 'B';
        }
        else {
            value_2.value = '#';
        }
    }
});

document.getElementById('btn__1').addEventListener('click', function() {
    const btn1 = document.getElementById('btn__1');
    const mathContainer = document.querySelector('.math__container');
    
    if (btn1.classList.contains('active')) {
        btn1.classList.remove('active');
        mathContainer.classList.add('hide');
    } else {
        btn1.classList.add('active');
        document.getElementById('btn__2').classList.remove('active');

        mathContainer.classList.remove('hide');
        document.querySelector('.acre__container').classList.add('hide');
    }
});

document.getElementById('btn__2').addEventListener('click', function() {
    const btn2 = document.getElementById('btn__2');
    const acreContainer = document.querySelector('.acre__container');
    
    if (btn2.classList.contains('active')) {
        btn2.classList.remove('active');
        acreContainer.classList.add('hide');
    } else {
        btn2.classList.add('active');
        document.getElementById('btn__1').classList.remove('active');

        acreContainer.classList.remove('hide');
        document.querySelector('.math__container').classList.add('hide');
    }
});