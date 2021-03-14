function dtb() {
    let ten = document.getElementById("name").value;
    let a = parseFloat(document.getElementById("kiem_tra").value);
    let b = parseFloat(document.getElementById("giua_ky").value);
    let c = parseFloat(document.getElementById("cuoi_ky").value);
    let TB = a*0.1 + b*0.2 + c*0.7;
    document.getElementById("dtb").innerText= "Diem trung binh la " + TB;
    if (TB >=8) {
        document.getElementById("xep_loai").innerText = "hoc sinh " + ten + " xep loai gioi";
    } else if (TB>=6.5) {
        document.getElementById("xep_loai").innerText = "hoc sinh " + ten + " xep loai kha";
    } else if (TB>=5) {
        document.getElementById("xep_loai").innerText = "hoc sinh " + ten + " xep loai trung binh";
    } else {
        document.getElementById("xep_loai").innerText = "hoc sinh " + ten + " xep loai yeu";
    }
}