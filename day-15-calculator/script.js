function clicking(data) {
    var d = document.querySelector('.row1 #result');
    var operator = ['*', '/', '-', '+'];
    console.log(data.innerText)
    if (!(operator.includes(d.value.slice(-1)) && operator.includes(data.innerText))) {
        d.value = d.value + data.innerText;
    }
}

function clr() {
    document.querySelector('.screen').value = '';
}

function back() {
    var a = document.querySelector('.screen').value;
    var b = a.slice(0, -1);
    document.querySelector('.screen').value = b;
}

window.addEventListener("keypress", (element) => {
    code = element.code;
    key = element.key;
    var d = document.querySelector('.row1 #result');
    var operator = ['*', '/', '-', '+'];
    if (code.includes('Digit') || (code.includes('Numpad') && !code.includes('NumpadEnter'))) {
        if (!(operator.includes(d.value.slice(-1)) && operator.includes(key))) {
            d.value = d.value + key;
        }
    } else if (code.includes('Enter') || code.includes('NumpadEnter')) {
        var result = document.querySelector('#result').value;
        var display = eval(result);
        document.querySelector('#result').value = display;
    }
})
var sum = document.querySelector('.evaluate')
sum.addEventListener("click", myfunction);
function myfunction() {
    var result = document.querySelector('#result').value;
    var display = eval(result);
    document.querySelector('#result').value = display;
}
