function dientich() {
    let a = parseFloat(document.getElementById("chieu_dai").value);
    let b = parseFloat(document.getElementById("chieu_rong").value);
    let s = a * b;
    document.getElementById("result").innerText = "Dien tich hinh chu nhat la " + s;
}