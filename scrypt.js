var phone = document.getElementById("window");
var minimized = true;
var closed = true;
var close_w = document.getElementById("close");

function menu_in(x) {
    console.log(x);
    x.classList.add("change");
}
function menu_out(x) {
    console.log(x);
    x.classList.remove("change");
}

function minimize_but(){
    minimized = !minimized;
    if(minimized){
        phone.style.top = "0";
    }
    else{
        phone.style.top = "80vh";
    }   
}

function close_but(){
    close_w.style.visibility= "visible";

}

function no_but(){
    close_w.style.visibility= "hidden";
}