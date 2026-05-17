var main_story = [null,"true",null,null,null,null,null,null,null];
window.onload = load();

function load(){
    var kaisuu = 1;
    while(kaisuu < 8){
        kaisuu = kaisuu + 1;
        main_story[kaisuu] = window.localStorage.getItem("main_story_" + kaisuu);
        if(main_story[kaisuu] == "true"){
        }else{
            console.log(kaisuu);
            document.getElementById("main_story_" + kaisuu + "_3").textContent = ("第" + kaisuu + "話「？？？」");
            document.getElementById("main_story_" + kaisuu + "_4").textContent = "";
            document.getElementById("mainstorys_" + kaisuu).src = "story/card_unlock.png";
            main_story[kaisuu] = "false";
        }
    }
}

function mainstory(x){
    if(main_story[x] == "true"){
        window.location.href = "Y_main_" + x + ".html";
    }
}

function Ystory(x){
    if(Ystory[x] == "true"){
        window.location.href = "Y_story_" + x + ".html";
    }
}