function thue_thu_nhap() {
    let a = parseFloat(document.getElementById("monney").value);
    let tntt = a - 11;
    if (tntt>80) {
        let pay = 0.35*tntt - 9.85;
        document.getElementById("result").innerText = "thue TNCN thang nay cua khoan thu nhap "+a+" la " +pay+" trieu";
    } else if(tntt>52) {
        let pay = 0.3*tntt - 5.85;
        document.getElementById("result").innerText = "thue TNCN thang nay cua khoan thu nhap "+a+" la " +pay+" trieu";
    } else if (tntt>32) {
        let pay = 0.25*tntt - 3.25;
        document.getElementById("result").innerText = "thue TNCN thang nay cua khoan thu nhap "+a+" la " +pay+" trieu";
    } else if (tntt>18) {
        let pay = 0.2*tntt - 1.65;
        document.getElementById("result").innerText = "thue TNCN thang nay cua khoan thu nhap "+a+" la " +pay+" trieu";
    } else  if (tntt>10) {
        let pay = 0.15*tntt - 0.75;
        document.getElementById("result").innerText = "thue TNCN thang nay cua khoan thu nhap "+a+" la " +pay+" trieu";
    } else if (tntt>5) {
        let pay = 0.1*tntt - 0.25;
        document.getElementById("result").innerText = "thue TNCN thang nay cua khoan thu nhap "+a+" la " +pay+" trieu";
    } else {
        let pay = 0.05*tntt;
        document.getElementById("result").innerText = "thue TNCN thang nay cua khoan thu nhap "+a+" la " +pay+" trieu";
    }
}