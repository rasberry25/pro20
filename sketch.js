var cat,cat1,bg;
var rat,rat1
var c1
var r1
var c2,r2
function preload() {
    cat1=loadImage("images/cat1.png")
    bg=loadImage("images/garden.png")
    rat1=loadImage("images/mouse1.png")
    c1=loadAnimation("images/cat2.png","images/cat3.png")
    r1=loadAnimation("images/mouse2.png","images/mouse3.png")
    c2=loadAnimation("images/cat4.png")
    r2=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(850,600);
    cat.addImage(cat1);
    cat.scale=0.2;

    rat=createSprite(200,600);
    rat.addImage(rat1);
    rat.scale=0.2;
}

function draw() {

    background(bg);
    if(cat.x-rat.x<(cat.width-rat.width)/2){
     cat.velocityX=0
     cat.addAnimation("standing",c2)
     cat.changeAnimation("standing")

     rat.addAnimation("standing",r2)
     rat.changeAnimation("standing")
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
    cat.velocityX=-3;
    cat.addAnimation("running",c1)
    cat.changeAnimation("running")
    rat.addAnimation("laughing",r1)
    rat.frameDelay=25
    rat.changeAnimation("laughing")
  }


}
