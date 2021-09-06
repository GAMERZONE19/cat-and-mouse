var cat,cat1Image,cat2Image,cat3Image,catlastImage;
var mouse,mouse1Image,mouse2Image,mouse3Image,mouselastImage;
var backgroundImage;

function preload() {
    //load the images here
    cat1Image =loadImage("images/cat1.png");
    mouse1Image =loadImage("images/mouse1.png");
    backgroundImage =loadImage ("images/garden.png");
    cat2 = loadAnimation("images/cat2.png");
    cat3 = loadAnimation("images/cat3.png");
    cat4 = loadAnimation("images/cat4.png");
    mouse2 = loadAnimation("images/mouse2.png");
    mouse = loadAnimation("images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");



}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,670,40,40);
    mouse =createSprite(150,690,30,30);
   

cat.addImage(cat1Image);
cat.scale = 0.2;


mouse.addImage(mouse1Image);
mouse.scale = 0.1;
}

function draw() {
    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
text( mouseX + ',' + mouseY ,10,45) ;
    drawSprites();
  
  
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX= -5;
       cat.addAnimation("cat2");
        cat.changeAnimation("cat3");
        cat.frameDelay = 35;
   }
     
     if(cat.X - mouse.X <(cat.width - mouse.width)/2){
         cat.addAnimation("catRunning",cat2);
         cat.changeAnimation("catRunning");
     }
   
     if (keyCode === LEFT_ARROW){
   mouse.addAnimation("mouseTeasing",mouse2);
   mouse.changeAnimation("mouseTeasing");
   mouse.frameDelay = 25;
   
     }
}

