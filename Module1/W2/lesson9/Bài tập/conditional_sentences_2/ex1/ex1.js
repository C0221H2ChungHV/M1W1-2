function chuyen_doi() {
    let a =parseFloat(document.getElementById("doC").value);
    let f = a*9/5 + 32;
    document.getElementById("result").innerText= "ket qua chuyen doi la " +f+ " do F";
}