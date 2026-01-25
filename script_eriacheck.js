var eria_x,eria_y;
var key,val;
window.onload = eriacheck();

function save(){
    key = "keido";
    val = eria_x;
    window.localStorage.setItem(key,val)
    key = "ido";
    val = eria_y;
    window.localStorage.setItem(key,val)
}

function eriacheck(){
    console.log("eriacheck");
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

function successCallback(position){
    console.log("success");
    eria_x = position.coords.longitude;
    console.log(eria_x);
    eria_y = position.coords.latitude;
    console.log(eria_y);
    save();
    window.location.href = "geteria.html";
}

function master(change){
    if(change == "geteria"){
        window.location.href = "geteria.html";
    }else if(change == "index"){
        window.location.href = "index.html";
    }
}

function errorCallback(error){
    console.log("error");
    alert("位置情報が取得できませんでした。");
    window.location.href = "index.html";
}
