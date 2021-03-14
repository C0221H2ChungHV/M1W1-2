function money() {
    let a = parseInt(document.getElementById("kwh").value);
    if (a>200) {
        let pay = a*2536;
        document.getElementById("thong_bao").innerText = "Cuoc dien thoai thang nay cua ban la " + pay + " VND";
    } else if (a>100) {
        let pay=a*2014;
        document.getElementById("thong_bao").innerText = "Cuoc dien thoai thang nay cua ban la " + pay + " VND";
    } else if (a>50) {
        let pay = a*1734;
        document.getElementById("thong_bao").innerText = "Cuoc dien thoai thang nay cua ban la " + pay + " VND";
    } else {
        let pay=a*1500;
        document.getElementById("thong_bao").innerText = "Cuoc dien thoai thang nay cua ban la " + pay + " VND";
    }
}