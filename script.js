var contador = 0;
function fondodark() {
    var fondodark = document.getElementsByTagName("body")[0];
    fondodark.style.backgroundColor = "#000000";
}
function fondolight() {
    var fondolight = document.getElementsByTagName("body")[0];
    fondolight.style.backgroundColor = "#f2f2f2";
}

function checker() {
    if (document.getElementById("check").checked) {
        fondodark();
        contar();
        contador++;
    } else {
        fondolight();
        contar();
        contador++;
    }
}
function contar(){
    if(contador % 5 == 0){
        alert("Es necesario cambiar tantas veces?👀")
        contador=0;
    }
}