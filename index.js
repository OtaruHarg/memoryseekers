var pl_name;


window.onload = load();

function load(){
    pl_name = window.localStorage.getItem("pl_name");
    if(!pl_name){
        window.location.href = "wakeup.html";
    }else{
        window.localStorage.getItem("");
    }
}