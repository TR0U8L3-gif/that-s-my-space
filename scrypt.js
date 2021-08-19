var phone = document.getElementById("window");;
var minimized = true;

function menu_in(x) {
    console.log(x);
    x.classList.add("change");
}
function menu_out(x) {
    console.log(x);
    x.classList.remove("change");
}

function minimize(){
    minimized = !minimized;
    console.log(minimized + " " + phone);
    if(minimized){
        phone.style.top = "0";
    }
    else{
        phone.style.top = "90%";
    }   
}
