var eria = [
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//0番台,0~9
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//1番台,10~19
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//2番台
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//3番台
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//4番台
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//5番台
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//6番台
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//7番台
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//8番台
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//9番台
    "yet","yet","yet","yet","yet","yet","yet","yet","yet","yet",//10番台
    ];


function change_index(){
    window.location.href = "index.html";
}

window.onload = load();

function load(){
    x=0;
    n = eria.length;
    console.log(n);
    while(x < n){
        x = x + 1;
        key = "eria_" + x;
        eria[x] = window.localStorage.getItem(key);
        if(eria[x] = "true"){
        }
    }
    if(eria_1 = "true"){
        console.log(eria_1);
        document.getElementById("eria_1").src = "image/eria_1.PNG";
    }
}
