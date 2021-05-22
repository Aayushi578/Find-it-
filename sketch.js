function preload() {
  bgImage = loadImage("image1.jpg");
}

 function setup() {
    createCanvas(displayWidth,displayHeight);
 }
 function draw() {
   background(bgImage);
   textSize(20);
   fill("black");
   //text("X:"+ mouseX +" Y:" + mouseY,mouseX,mouseY);
   posX = mouseX;
   posY = mouseY;
   //hidden object 1-sheep
   if(posX >= 122 && posX <= 151 && posY >= 83 && posY <= 109){
    text("FOUND !",posX+20,posY+20);
    }
   //hidden object 2-tortoise
   if(posX >= 1140 && posX <= 1182 && posY >= 76 && posY <= 103){
   text("FOUND !",posX+20,posY+20);
   }
   //hidden object 3-hippo
   if(posX >= 945 && posX <= 1004 && posY >= 188 && posY <= 230){
   text("FOUND !",posX+20,posY+20);
   }
   //hidden object 4-pig
   if(posX >= 598 && posX <= 636 && posY >= 458 && posY <= 510){
   text("FOUND !",posX+20,posY+20);
   }
   //hidden object 5-bison
   if(posX >= 669 && posX <= 722 && posY >= 226 && posY <= 278){
   text("FOUND !",posX+20,posY+20);
   }
   //hidden object 6-elephant
   if(posX >= 243 && posX <= 299 && posY >= 190 && posY <= 228){
   text("FOUND !",posX+20,posY+20);
   }
   //hidden object 7-lion
   if(posX >= 723 && posX <= 785 && posY >= 96 && posY <= 141){
   text("FOUND !",posX+20,posY+20);
   }
   //hidden object 8-deer
   if(posX >= 25 && posX <= 101 && posY >= 322 && posY <= 428){
   text("FOUND !",posX+20,posY+20);
   }
   //hidden object 9-fish
   if(posX >= 207 && posX <= 242 && posY >= 8 && posY <= 80){
   text("FOUND !",posX+20,posY+20);
   }
   //hidden object 10-giraffe
   if(posX >= 429 && posX <= 445 && posY >= 15 && posY <= 112){
   text("FOUND !",posX+20,posY+20);
   }
 }