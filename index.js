var type_now = 1;
var fin = "false";
var click = 1;
var originalnames = ["藤丘ヒロミ","本郷タカシ","飯田カミュ"];
var names = [null,null,null,null,null,null,null,null,null,null];
var playername;
var card_url;
var eria = //0="name",1="eria_x",2="eria_y",3="画像url"
    [    ["","","",""]//
        ,["図書館","137.032196","","1-I6dn2_k1vc4DS_utZ3r85G7xT7jBo3I"]//所沢瑞樹(3)
        ,["","","",""]//
    ];


window.onload = loading();


function tyeck(x){
    if(!playername){
        type_now = 7;
        console.log(type_now);
    }else{
        console.log("click");
        type_now = x;
    }
}

function loading(){
    playername = window.localStorage.getItem("playername");
    if(playername){
    }else{
        names[1] = originalnames[Math.floor(Number(Math.random()* originalnames.length))];
        names[2] = originalnames[Math.floor(Number(Math.random()* originalnames.length))];
        names[3] = originalnames[Math.floor(Number(Math.random()* originalnames.length))];
        names[4] = originalnames[Math.floor(Number(Math.random()* originalnames.length))];
    }
    mainloops();
}


async function mainloops(){
    while(fin != "true"){
        const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));//timeはミリ秒
        await sleep(100);
        //ﾛｸﾞｲﾝ画面を非表示する
        document.getElementById("login_gamen").style.zIndex = -1;
        document.getElementById("login_gamen").style.opacity = 0;
        document.getElementById("login_moji").style.zIndex = -1;
        document.getElementById("login_moji").style.opacity = 0;
        //ﾎﾞﾄﾑｴﾘｱの表示
        document.getElementById("bottom_cover").style.zIndex = 10;
        document.getElementById("bottom_cover").style.opacity = 1;
        document.getElementById("bottom_eria").style.zIndex = 100;
        document.getElementById("bottom_eria").style.opacity = 1;
        //ｴﾘｱﾁｪｯｸﾎﾞﾀﾝを隠す
        document.getElementById("button_eriacheck").style.zIndex = -1;
        document.getElementById("button_eriacheck").style.opacity = 0;
        //お知らせ画面の非表示
        document.getElementById("osirase").style.zIndex = -1;
        document.getElementById("osirase").style.opacity = 0;
        //設定ﾎﾞﾀﾝ_1非表示
        document.getElementById("option_button_1").style.zIndex = -1;
        document.getElementById("option_button_1").style.opacity = 0;
        //設定ﾎﾞﾀﾝ_2の非表示
        document.getElementById("option_button_2").style.zIndex = -1;
        document.getElementById("option_button_2").style.opacity = 0;
        //ﾌﾟﾚｲﾔｰﾈｰﾑを入力する
        document.getElementById("playername").textContent = playername;
        //names_1を非表示
        document.getElementById("tutorial_1").style.zIndex = -1;
        document.getElementById("tutorial_1").style.opacity = 0;
        //names_2を非表示
        document.getElementById("tutorial_2").style.zIndex = -1;
        document.getElementById("tutorial_2").style.opacity = 0;
        //names_3を非表示
        document.getElementById("tutorial_3").style.zIndex = -1;
        document.getElementById("tutorial_3").style.opacity = 0;
        //names_4を非表示
        document.getElementById("tutorial_4").style.zIndex = -1;
        document.getElementById("tutorial_4").style.opacity = 0;
        //ﾌﾟﾚｲﾔｰﾈｰﾑの非表示
        document.getElementById("playernameback").style.zIndex = -1;
        document.getElementById("playernameback").style.opacity = 0;
        //ﾒﾓﾘｰｴﾘｱの非表示
        document.getElementById("memoryeria").style.zIndex = -1;
        document.getElementById("memoryeria").style.opacity = 0;
        switch(type_now){
            case 0://全非表示
            break;
            case 1:
                //ﾛｸﾞｲﾝ画面を表示する
                document.getElementById("login_gamen").style.zIndex = 100;
                document.getElementById("login_gamen").style.opacity = 1;
                document.getElementById("login_moji").style.zIndex = 150;
                document.getElementById("login_moji").style.opacity = 1;
                //ﾎﾞﾄﾑｴﾘｱの非表示
                document.getElementById("bottom_cover").style.zIndex = -1;
                document.getElementById("bottom_cover").style.opacity = 1;
                document.getElementById("bottom_eria").style.zIndex = -1;
                document.getElementById("bottom_eria").style.opacity = 1;
            break;//login
            case 2:
                //ﾌﾟﾚｲﾔｰﾈｰﾑの表示
                document.getElementById("playernameback").style.zIndex = 10;
                document.getElementById("playernameback").style.opacity = 1;
            break;//ﾎｰﾑ
            case 3:
                //ｴﾘｱﾁｪｯｸﾎﾞﾀﾝを表示する
                document.getElementById("button_eriacheck").style.zIndex = 10;
                document.getElementById("button_eriacheck").style.opacity = 1;
            break;//ｴﾘｱﾁｪｯｸ
            case 4:
                //ﾒﾓﾘｰｴﾘｱの表示
                document.getElementById("memoryeria").style.zIndex = 10;
                document.getElementById("memoryeria").style.opacity = 1;
            break;//ｺﾚｸｼｮﾝ
            case 5:
                //設定ﾎﾞﾀﾝ_1の表示
                document.getElementById("optioneria").style.zIndex = 10;
                document.getElementById("optioneria").style.opacity = 1;
                //設定ﾎﾞﾀﾝ_1の表示
                document.getElementById("option_button_1").style.zIndex = 20;
                document.getElementById("option_button_1").style.opacity = 1;
                //設定ﾎﾞﾀﾝ_2の表示
                document.getElementById("option_button_2").style.zIndex = 20;
                document.getElementById("option_button_2").style.opacity = 1;
            break;//設定
            case 6://お知らせ
                //お知らせ画面の表示
                document.getElementById("osirase").style.zIndex = 100;
                document.getElementById("osirase").style.opacity = 1;
            break;
            case 7://ﾁｭｰﾄﾘｱﾙ
                //名前欄を表示
                document.getElementById("playernameback").style.zIndex = 200;
                document.getElementById("playernameback").style.opacity = 1;
                //names_1を表示
                document.getElementById("tutorial_1").style.zIndex = 200;
                document.getElementById("tutorial_1").style.opacity = 1;
                //names_2を表示
                document.getElementById("tutorial_2").style.zIndex = 200;
                document.getElementById("tutorial_2").style.opacity = 1;
                //names_3を表示
                document.getElementById("tutorial_3").style.zIndex = 200;
                document.getElementById("tutorial_3").style.opacity = 1;
                //names_4を表示
                document.getElementById("tutorial_4").style.zIndex = 200;
                document.getElementById("tutorial_4").style.opacity = 1;
                //名前に文言を
                document.getElementById("playername").style.fontSize = "5vw";
                document.getElementById("playername").textContent = "Answer your CODENAME.";
                document.getElementById("names_1").textContent = names[1];
                document.getElementById("names_2").textContent = names[2];
                document.getElementById("names_3").textContent = names[3];
                document.getElementById("names_4").textContent = names[4];
            break;
            case 8:
                //ﾎﾞﾄﾑｴﾘｱの非表示
                document.getElementById("bottom_cover").style.zIndex = -1;
                document.getElementById("bottom_cover").style.opacity = 0;
                document.getElementById("bottom_eria").style.zIndex = -1;
                document.getElementById("bottom_eria").style.opacity = 0;
                document.getElementById("story_haikei").style.zIndex = 10;
                while(document.getElementById("story_haikei").style.opacity < 1){
                    await sleep(0.00001);
                    document.getElementById("story_haikei").style.opacity = (Number(document.getElementById("story_haikei").style.opacity) + 0.01);
                }
                document.getElementById("story_fream").style.opacity = 20;
                while(document.getElementById("story_fream").style.opacity < 1){
                    await sleep(0.00001);
                    document.getElementById("story_fream").style.opacity = (Number(document.getElementById("story_fream").style.opacity) + 0.01);
                }
                document.getElementById("story_serihu").style.opacity = 20;
                while(document.getElementById("story_serihu").style.opacity < 1){
                    await sleep(0.00001);
                    document.getElementById("story_serihu").style.opacity = (Number(document.getElementById("story_serihu").style.opacity) + 0.01);
                }
            break;
            default:
            break;
        }
        saving();
    }
}

function saving(){
    window.localStorage.setItem("playername",playername);
}

function eriacheck(){
    navigator.geolocation.getCurrentPosition(success,fail);
}


var eria_x,eria_y;

function success(pos){
    eria_x = pos.coords.longitude;
    eria_y = pos.coords.latitude;
    kaisuu_eria = 0;
    arrive_eria = "null";
    while(arrive_eria = "null"){
        if((eria[kaisuu_eria][1]-0.000036) <= eria_x 
            & eria_x <= (eria[kaisuu_eria][1]+0.000036) 
            & (eria[kaisuu_eria][2]-0.00003) <= eria_y 
            & eria_y <= (eria[kaisuu_eria][2]+0.00003)
        ){
            arrive_eria = eria[kaisuu_eria][0];
        }else{
            kaisuu_eria = kaisuu_eria + 1;
        }
    }
}

function fail(pos){
    alert('位置情報の取得に失敗しました。エラーコード：');
}

function yatagarasu(){
    team = 1;
    playername = names[1];
    tyeck(2);
}


function crow(){
    team = 2;
    playername = names[2];
    tyeck(2);
}

function hatoba(){
    team = 3;
    playername = names[3];
    tyeck(2);
}

function flashback(){
    team = 4;
    playername = names[4];
    tyeck(2);
}

function gazou(card_url){
    document.getElementById("gazouhikei").style.zIndex = 100;
    document.getElementById("gazouhaike").style.opacity = 1;
    document.getElementById("gazou").src = "https://drive.google.com/uc?export=view&id=" + card_url;
}

function story(){
    tyeck(8);
}