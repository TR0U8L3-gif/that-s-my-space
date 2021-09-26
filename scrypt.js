var phone = document.getElementById("window");
var minimized = true;
var closed = true;
var close_s = true;
var open_s = false;
var click = false;
var close_w = document.getElementById("close");
var side = document.getElementById("side");

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
        phone.style.top = "0%";

    }
    else{
        phone.style.top = "80%";
    }
}

function close_side(){
    if(click == false){
        click = true;
        if(open_s == false){
            close_s = !close_s;
            if(close_s){
                
                open_s = true;
                side.style.left = "-50%";
                side.style.visibility = "hidden";
                side.style.opacity = "0";
                setTimeout(function(){
                    side.style.left = "100%";
                },800);
                setTimeout(function(){
                    open_s = false;
                    click = false;
                },800);
                
            }
            else{
                side.style.visibility = "visible";
                side.style.opacity = "1";
                side.style.left = "0";
                setTimeout(function(){
                    click = false;
                },800);
            }
        }
    }
    
}

function close_but(){
    close_w.style.visibility= "visible";
    close_w.style.opacity= "1";
}

function no_but(){
    close_w.style.visibility= "hidden";
    close_w.style.opacity= "0";
}