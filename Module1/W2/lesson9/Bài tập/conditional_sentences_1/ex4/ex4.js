function min_max() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = parseInt(document.getElementById("num3").value);
    let max = a;
    if (max>b) {
        if (max>c) {
            document.getElementById("thong_bao").innerText = "Max = " + a;
        } else {
            document.getElementById("thong_bao").innerText = "Max = " + c;
        }
    } else {
        max=b;
        if (max>c) {
            document.getElementById("thong_bao").innerText = "Max = " + b;
        } else {
            document.getElementById("thong_bao").innerText = "Max = " + c;
        }
    }
}