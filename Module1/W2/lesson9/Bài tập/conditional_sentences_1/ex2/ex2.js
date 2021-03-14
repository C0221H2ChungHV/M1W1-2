function ket_qua() {
let a = parseInt(document.getElementById("age").value);
if (a<15) {
    document.getElementById("thong_bao").innerText = "Hoc sinh khong du tuoi vao lop 10";
} else {
    document.getElementById("thong_bao").innerText = "Hoc sinh du tuoi vao lop 10";
}
}