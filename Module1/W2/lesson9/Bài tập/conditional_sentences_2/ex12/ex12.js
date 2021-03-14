function tinh_lai_suat() {
    let a = parseFloat(document.getElementById("money1").value);
    let b = parseFloat(document.getElementById("lai_suat").value);
    let c = parseFloat(document.getElementById("month").value);
    let monney =  a*((1+b)**c);
    let tien_lai=monney - a;
    document.getElementById("result").innerText = "so tien lai cua khoan gui "+a+" trieu sau "+c+" ky voi lai suat "+b+" la "+tien_lai+" trieu";
}