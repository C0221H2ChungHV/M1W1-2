function fun() {
    let a = parseInt(document.getElementById("num").value);
    if (a>0) {
        document.write("a>0");
    } else if (a<0) {
        document.write("a<0");
    } else document.write("a==0");

}