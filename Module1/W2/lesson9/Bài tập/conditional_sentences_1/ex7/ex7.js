function money() {
    let a = parseInt(document.getElementById("phut").value);
    if (a>=1000) {
        let pay = a*2000;
        document.getElementById("thong_bao").innerText = "Cuoc dien thoai thang nay cua ban la " + pay + " VND";
    } else if (a>=500) {
        let pay=a*1800;
        document.getElementById("thong_bao").innerText = "Cuoc dien thoai thang nay cua ban la " + pay + " VND";
    } else {
        let pay=a*1500;
        document.getElementById("thong_bao").innerText = "Cuoc dien thoai thang nay cua ban la " + pay + " VND";
    }
}