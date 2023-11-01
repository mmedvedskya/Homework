function verify() {
    console.log("x, y")
    let x = parseFloat(element_x.innerText);
    let y = parseFloat(element_y.innerText);
    console.log(x, y)

    if (x > y) {
        z = x*y;
    }
    else {
        z=Math.log(x+y);
    }

    document.getElementById("result").innerText =  z;
}

const element_x = document.getElementById("x");
const element_y = document.getElementById("y");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);