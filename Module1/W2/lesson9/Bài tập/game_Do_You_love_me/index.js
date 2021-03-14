function love() {
alert("<3");
}
function run() {
    let x = Math.round(Math.random()*window.innerHeight);
    let y = Math.round(Math.random()*window.innerWidth);
    document.getElementById("no").style.left = x;
    document.getElementById("no").style.top = y;
}