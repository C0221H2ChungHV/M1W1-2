function chuyen_doi() {
    let a =parseFloat(document.getElementById("met").value);
    let f = a*3.2808;
    document.getElementById("result").innerText= "ket qua chuyen doi la " +f+ " Ft";
}