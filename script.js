function fondodark(){
    var fondodark = document.getElementsByTagName("body")[0];
    fondodark.style.backgroundColor = "#000000";
}
function fondolight(){
    var fondolight = document.getElementsByTagName("body")[0];
    fondolight.style.backgroundColor = "#ffffff";
}

function checker(){
    if(document.getElementById("check").checked){
        fondodark();
    }else{
        fondolight();
    }
}