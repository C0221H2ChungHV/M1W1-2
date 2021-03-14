function ketqua() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    if (a%b==0) {
        document.getElementById("result").innerText = "a chia het cho b";
    } else {
        document.getElementById("result").innerText = "a khong het cho b";
    }
}