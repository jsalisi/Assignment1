var bearpics = document.getElementById("bearImages");
var dogpics = document.getElementById("dogImages");
var birdpics = document.getElementById("birdImages");
var horsepics = document.getElementById("horseImages");
var selectImage = bearpics;

var bear_size_width = 150;
var bear_size_height = 150;

var dog_size_width = 150;
var dog_size_height = 150;

var bird_size_width = 150;
var bird_size_height = 150;

var horse_size_width = 150;
var horse_size_height = 150;

var bear_pos_left = 600;
var bear_pos_top = 0;

var dog_pos_left = 200;
var dog_pos_top = 0;

var bird_pos_left = -200;
var bird_pos_top = 0;

var horse_pos_left = -600;
var horse_pos_top = 0;

var control_pos = -718;

document.getElementById("bearImages").addEventListener("click", function(){
    selectImage = bearpics
    document.getElementById("img1").style.backgroundImage = "url(img/bears/bear1.png)";
    document.getElementById("img2").style.backgroundImage = "url(img/bears/bear2.png)";
    document.getElementById("img3").style.backgroundImage = "url(img/bears/bear3.png)";
})

document.getElementById("dogImages").addEventListener("click", function(){
    selectImage = dogpics
    document.getElementById("img1").style.backgroundImage = "url(img/dogs/dog1.png)";
    document.getElementById("img2").style.backgroundImage = "url(img/dogs/dog2.png)";
    document.getElementById("img3").style.backgroundImage = "url(img/dogs/dog3.png)";
})

document.getElementById("birdImages").addEventListener("click", function(){
    selectImage = birdpics
    document.getElementById("img1").style.backgroundImage = "url(img/birds/bird1.png)";
    document.getElementById("img2").style.backgroundImage = "url(img/birds/bird2.png)";
    document.getElementById("img3").style.backgroundImage = "url(img/birds/bird3.png)";
})

document.getElementById("horseImages").addEventListener("click", function(){
    selectImage = horsepics
    document.getElementById("img1").style.backgroundImage = "url(img/horses/horse1.png)";
    document.getElementById("img2").style.backgroundImage = "url(img/horses/horse2.png)";
    document.getElementById("img3").style.backgroundImage = "url(img/horses/horse3.png)";
})

document.getElementById("up").addEventListener("click", function(){    
    if (selectImage == bearpics) {
        bear_pos_top = bear_pos_top - 5;
        selectImage.style.top = bear_pos_top+"px";
    }
    else if (selectImage == dogpics) {
        dog_pos_top = dog_pos_top - 5;
        selectImage.style.top = dog_pos_top+"px";
    }
    else if (selectImage == birdpics) {
        bird_pos_top = bird_pos_top - 5;
        selectImage.style.top = bird_pos_top+"px";
    }
    else if (selectImage == horsepics) {
        horse_pos_top = horse_pos_top - 5;
        selectImage.style.top = horse_pos_top+"px";
    }
})

document.getElementById("down").addEventListener("click", function(){
    if (selectImage == bearpics) {
        bear_pos_top = bear_pos_top + 5;
        selectImage.style.top = bear_pos_top+"px";
    }
    else if (selectImage == dogpics) {
        dog_pos_top = dog_pos_top + 5;
        selectImage.style.top = dog_pos_top+"px";
    }
    else if (selectImage == birdpics) {
        bird_pos_top = bird_pos_top + 5;
        selectImage.style.top = bird_pos_top+"px";
    }
    else if (selectImage == horsepics) {
        horse_pos_top = horse_pos_top + 5;
        selectImage.style.top = horse_pos_top+"px";
    }
})

document.getElementById("right").addEventListener("click", function(){
    if (selectImage == bearpics) {
        bear_pos_left = bear_pos_left + 5;
        selectImage.style.left = bear_pos_left+"px";
    }
    else if (selectImage == dogpics) {
        dog_pos_left = dog_pos_left + 5;
        selectImage.style.left = dog_pos_left+"px";
    }
    else if (selectImage == birdpics) {
        bird_pos_left = bird_pos_left + 5;
        selectImage.style.left = bird_pos_left+"px";
    }
    else if (selectImage == horsepics) {
        horse_pos_left = horse_pos_left + 5;
        selectImage.style.left = horse_pos_left+"px";
    }
})

document.getElementById("left").addEventListener("click", function(){
    if (selectImage == bearpics) {
        bear_pos_left = bear_pos_left - 5;
        selectImage.style.left = bear_pos_left+"px";
    }
    else if (selectImage == dogpics) {
        dog_pos_left = dog_pos_left - 5;
        selectImage.style.left = dog_pos_left+"px";
    }
    else if (selectImage == birdpics) {
        bird_pos_left = bird_pos_left - 5;
        selectImage.style.left = bird_pos_left+"px";
    }
    else if (selectImage == horsepics) {
        horse_pos_left = horse_pos_left - 5;
        selectImage.style.left = horse_pos_left+"px";
    }
})

document.getElementById("img1").addEventListener("click", function(){
    if (selectImage == bearpics) {
        selectImage.style.backgroundImage = "url(img/bears/bear1.png)";
    }
    else if (selectImage == dogpics) {
        selectImage.style.backgroundImage = "url(img/dogs/dog1.png)";
    }
    else if (selectImage == birdpics) {
        selectImage.style.backgroundImage = "url(img/birds/bird1.png)";
    }
    else if (selectImage == horsepics) {
        selectImage.style.backgroundImage = "url(img/horses/horse1.png)";
    }
})

document.getElementById("img2").addEventListener("click", function(){
    if (selectImage == bearpics) {
        selectImage.style.backgroundImage = "url(img/bears/bear2.png)";
    }
    else if (selectImage == dogpics) {
        selectImage.style.backgroundImage = "url(img/dogs/dog2.png)";
    }
    else if (selectImage == birdpics) {
        selectImage.style.backgroundImage = "url(img/birds/bird2.png)";
    }
    else if (selectImage == horsepics) {
        selectImage.style.backgroundImage = "url(img/horses/horse2.png)";
    }
})

document.getElementById("img3").addEventListener("click", function(){
    if (selectImage == bearpics) {
        selectImage.style.backgroundImage = "url(img/bears/bear3.png)";
    }
    else if (selectImage == dogpics) {
        selectImage.style.backgroundImage = "url(img/dogs/dog3.png)";
    }
    else if (selectImage == birdpics) {
        selectImage.style.backgroundImage = "url(img/birds/bird3.png)";
    }
    else if (selectImage == horsepics) {
        selectImage.style.backgroundImage = "url(img/horses/horse3.png)";
    }
})

document.getElementById("upSize").addEventListener("click", function(){    
    if (selectImage == bearpics) {
        bear_size_width = bear_size_width * 1.05;
        bear_size_height = bear_size_height * 1.05;
    
        selectImage.style.width = bear_size_width+"px";    
        selectImage.style.height = bear_size_height+"px";
    }
    else if (selectImage == dogpics) {
        dog_size_width = dog_size_width * 1.05;
        dog_size_height = dog_size_height * 1.05;
    
        selectImage.style.width = dog_size_width+"px";    
        selectImage.style.height = dog_size_height+"px";
    }
    else if (selectImage == birdpics) {
        bird_size_width = bird_size_width * 1.05;
        bird_size_height = bird_size_height * 1.05;
    
        selectImage.style.width = bird_size_width+"px";    
        selectImage.style.height = bird_size_height+"px";
    }
    else if (selectImage == horsepics) {
        horse_size_width = horse_size_width * 1.05;
        horse_size_height = horse_size_height * 1.05;
    
        selectImage.style.width = horse_size_width+"px";    
        selectImage.style.height = horse_size_height+"px";
    }
})

document.getElementById("downSize").addEventListener("click", function(){
    if (selectImage == bearpics) {
        bear_size_width = bear_size_width / 1.05;
        bear_size_height = bear_size_height / 1.05;
    
        selectImage.style.width = bear_size_width+"px";    
        selectImage.style.height = bear_size_height+"px";
    }
    else if (selectImage == dogpics) {
        dog_size_width = dog_size_width / 1.05;
        dog_size_height = dog_size_height / 1.05;
    
        selectImage.style.width = dog_size_width+"px";    
        selectImage.style.height = dog_size_height+"px";
    }
    else if (selectImage == birdpics) {
        bird_size_width = bird_size_width / 1.05;
        bird_size_height = bird_size_height / 1.05;
    
        selectImage.style.width = bird_size_width+"px";    
        selectImage.style.height = bird_size_height+"px";
    }
    else if (selectImage == horsepics) {
        horse_size_width = horse_size_width / 1.05;
        horse_size_height = horse_size_height / 1.05;
    
        selectImage.style.width = horse_size_width+"px";    
        selectImage.style.height = horse_size_height+"px";
    }
})

document.getElementById("open").addEventListener("click", function(){
    if (control_pos == -718) {
        control_pos = control_pos + 250
        document.getElementById("control").style.bottom = control_pos+"px";
        document.getElementById("open").style.backgroundImage = "url(img/buttons/close.png)";
    }
    else if (control_pos == -468) {
        control_pos = control_pos - 250
        document.getElementById("control").style.bottom = control_pos+"px";
        document.getElementById("open").style.backgroundImage = "url(img/buttons/open.png)";
    }
})

document.getElementById("reset").addEventListener("click", function(){
    if (selectImage == bearpics) {
        bear_size_width = 150;
        bear_size_height = 150;
        
        bear_pos_left = 600;
        bear_pos_top = 0;
        
        selectImage.style.left = "600px";
        selectImage.style.top = "0px";
        
        selectImage.style.width = "150px";    
        selectImage.style.height = "150px";
    }
    else if (selectImage == dogpics) {
        dog_size_width = 150;
        dog_size_height = 150;
        
        dog_pos_left = 200;
        dog_pos_top = 0;
        
        selectImage.style.left = "200px";
        selectImage.style.top = "0px";
        
        selectImage.style.width = "150px";    
        selectImage.style.height = "150px";
    }
    else if (selectImage == birdpics) {
        bird_size_width = 150;
        bird_size_height = 150;

        bird_pos_left = -200;
        bird_pos_top = 0;
        
        selectImage.style.left = "-200px";
        selectImage.style.top = "0px";
        
        selectImage.style.width = "150px";    
        selectImage.style.height = "150px";
    }
    else if (selectImage == horsepics) {
        horse_pos_left = -600;
        horse_pos_top = 0;

        horse_size_width = 150;
        horse_size_height = 150;
        
        selectImage.style.left = "-600px";
        selectImage.style.top = "0px";
        
        selectImage.style.width = "150px";    
        selectImage.style.height = "150px";
    }        
})






