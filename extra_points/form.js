function verify() {
    console.log("x, y")
    let x = parseFloat(element_x.value);
    let y = parseFloat(element_y.value);
    let z;
    console.log(x, y)
    check = false;

    if (x > y) {
        z = x*y;
        document.getElementById("result").innerText = "Z = XY = " + z;
        check = true;
    } else {
        if(x + y > 0) {
        z=Math.log(x+y);
        document.getElementById("result").innerText = "Z = ln(X + Y) = " + z;
        check = true;
        } else {
        z= "не определено";
        document.getElementById("result").innerText = "Повторите ввод. Основание логарифма (X + Y) должно быть больше 0.";
        }
    }

    document.getElementsByName('result_z')[0].value = z;
}

function send() {
        if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText;
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementById("UserEnter").submit();
         } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let check = false;
console.log(document.getElementById("result").innerText);

const element_x = document.getElementById("x");
element_x.addEventListener('input', verify);

const element_y = document.getElementById("y");
element_y.addEventListener('input', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)