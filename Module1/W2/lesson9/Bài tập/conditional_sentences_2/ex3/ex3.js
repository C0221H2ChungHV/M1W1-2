function square() {
    let a = parseFloat(document.getElementById("canh").value);
    let s = a*a;
    document.getElementById("result").innerText= "Dien tich hinh vuong canh " +a+ " la " +s;

}