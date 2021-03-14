function ptb2() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let c = parseFloat(document.getElementById("num3").value);
    let delta = b*b - 4*a*c;
    if (delta == 0) {
        let x = (-b)/(2*a);
        document.getElementById("result").innerText = "phuong trinh co nghiem kep la " +x;
    } else if (delta>0) {
        let x1 = ((-b)+delta**0.5)/(2*a);
        let x2 = ((-b)-delta**0.5)/(2*a);
        document.getElementById("result").innerText = "phuong trinh co hai nghiem la " +x1+ "va" +x2;
    } else {
        document.getElementById("result").innerText = "phuong trinh vo nghiem";
    }
}