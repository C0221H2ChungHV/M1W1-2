function dientich() {
    let a = parseFloat(document.getElementById("canh1").value);
    let b = parseFloat(document.getElementById("canh2").value);
    let s = (a * b)/2;
    document.getElementById("result").innerText = "Dien tich hinh tam giac vuong la " + s;
}