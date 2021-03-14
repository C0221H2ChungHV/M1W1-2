function ket_qua() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    if (a==0) {
        if (b==0) {
            document.getElementById("result").innerText= "Phuong trinh vo so nghiem";
        } else {
            document.getElementById("result").innerText= "Phuong trinh vo nghiem";
        }
    } else {
        let x = (-b)/a;
        document.getElementById("result").innerText= "Ngiem cua phuong trinh la " +x;
    }
}