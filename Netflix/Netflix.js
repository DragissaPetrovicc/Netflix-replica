const sign_up_open = document.getElementById("sign-up-open");
const sign_up_container = document.getElementById("sign-up-container");
const sign_up_close = document.getElementById("sign-up-close");

sign_up_open.onclick = function(){
sign_up_container.style.display= "flex";

}
sign_up_close.onclick = function(){
    sign_up_container.style.display = "none";
    
    }