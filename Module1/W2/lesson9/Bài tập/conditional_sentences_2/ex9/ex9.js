function kiem_tra() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let c = parseFloat(document.getElementById("num3").value);
    let tong1 = a+b;
    let tong2 = a+c;
    let tong3 = b+c;
    if (a>0&&b>0&&c>0) {
        if(tong1>c&&tong2>b&&tong3>a) {
        document.getElementById("result").innerText = "a, b, c la so do ba canh cua 1 tam giac";
        } else {
            document.getElementById("result").innerText = "a, b, c khong phai la so do ba canh cua 1 tam giac";
        }
    } else {
        document.getElementById("result").innerText = "a, b, c khong phai la so do ba canh cua 1 tam giac";
    }
    }
