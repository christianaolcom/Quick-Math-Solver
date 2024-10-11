const colors = ["#3498db", "#e74c3c", "#f1c40f", "#2ecc71", "#9b59b6"];

let i = 0; 

function changeBackground() {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length; 
}

setInterval(changeBackground, 3000);

function addValue()  {
    var first = prompt("Enter Your First Number");
    var last = prompt("Enter Your Second Number");
    var sum = Number(first) + Number(last);
    document.getElementById("result").innerHTML = "The sum is: " + sum;
    result.style.color = 'Blue'
}

function subValue() {
    var first1 = prompt("Enter Your First Number");
    var second1 = prompt("Enter Your Second Number");
    var sub = Number(first1) - Number(second1);
    document.getElementById("demo").innerHTML = "The total is: " + sub;
    demo.style.color = 'Green'
}

function mulValue() {
    var first1 = prompt("Enter Your First Number");
    var second1 = prompt("Enter Your Second Number");
    var mul = Number(first1) * Number(second1);
    document.getElementById("credit").innerHTML = "The total is: " + mul;
    credit.style.color = 'Red'
}


function disValue() {
    var first1 = prompt("Enter Your First Number");
    var second1 = prompt("Enter Your Second Number");
    var div = Number(first1) / Number(second1);
    document.getElementById("search").innerHTML = "The total is: " + div;
    search.style.color = 'Purple'
}


