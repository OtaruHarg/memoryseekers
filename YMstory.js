var story = 
[
    [//0-
        "00-",//story[0][0][0]
        [//01-
            "010",//null
            "011",//chara_a
            "012",//chara_b
            "013",//chara_c
            "014",//haikei
            "015",//serihu_chara
            "016" //serihu_naiyou
        ]
    ],[//1-
        "10-",
        [//11-
            "110",//null
            "111",//chara_a
            "112",//chara_b
            "113",//chara_c
            "114",//haikei
            "115",//serihu_chara
            "116" //serihu_naiyou
        ],[//12-
            "120",
            ""
        ]
    ]
];



function YMstory(x){
    while(story_end[x] > stage){
        document.getElementById("chara_a").src = story[x][stage][1];
        document.getElementById("chara_b").src = story[x][stage][2];
        document.getElementById("chara_c").src = story[x][stage][3];
        document.getElementById("haikei").src = story[x][stage][4];
        document.getElementById("serihu_chara").textContent = story[x][stage][5];
        document.getElementById("serihu_naiyou").textContent = story[x][stage][6];
    }
}



function next(){
    stage = stage + 1;
}