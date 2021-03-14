function kiem_tra() {
    let a = parseFloat(document.getElementById("age").value);
    if (a>0&&a<120) {
        document.getElementById("result").innerText = +a+ " la so tuoi cua 1 nguoi";
    } else {
        document.getElementById("result").innerText = +a+ " khong la so tuoi cua 1 nguoi";
    }
}