function hoa_hong() {
    let a = parseInt(document.getElementById("doanh_so").value);
    if (a>=1000) {
        let b = 0.05*a/100;
        document.getElementById("rose").innerText = "voi danh thu " +a+ "trieu, hoa hong cua ban la 0,05% tuong duong" +b+ "trieu";
    } else if (a>=500) {
        let b = 0.02*a/100;
        document.getElementById("rose").innerText = "voi danh thu " +a+ "trieu, hoa hong cua ban la 0,02% tuong duong" +b+ "trieu";
    } else {
        let b = 0.01*a/100;
        document.getElementById("rose").innerText = "voi danh thu " +a+ "trieu, hoa hong cua ban la 0,01% tuong duong" +b+ "trieu";
    }
}