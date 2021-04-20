var dog,dog1,dog2,dog3,dog4;
var input1,button1,button2;
var s1;
var food,food1;
var state,state1,state2;
var s2;
var song;
var send;
function preload(){
dog1=loadImage("1.png");
dog2=loadImage("2.png");
dog3=loadImage("3.png");
dog4=loadImage("4.png");
food1=loadImage("5.jpg");
song=loadSound("song.mp3");

}
function setup() {
  createCanvas(800,400);
  dog=createSprite(200,200);
  food=createSprite(200,300);
  food.addImage(food1);
  food.scale=0.08;
  dog.addImage("dog2",dog2);
  dog.addImage("dog1",dog1);
  dog.addImage("dog3",dog3);
  dog.addImage("dog4",dog4);
  
  input1 = createInput("  ");
  button1 = createButton('Send');
  button2 = createButton('Feed');
  state=1;
  
  state1=1;
  state2=1;
  input1.position(500, 200);
  button1.position(515, 300);
  button2.position(315, 300);
  s2=0;
  s1=0;
}

function draw() {
  background("cream");
  drawSprites();
  fill("red");
  stroke("blue");
  strokeWeight(1);
  textSize(23);
  text("Meet Sheru",100,100); 
  text("Type Message",500,100); 
  button1.mousePressed(()=>{
    s1=input1.value();
  });
 

  if(food.visible==true){
    button2.mousePressed(()=>{
    state=2;
  
  });
   }
   if(food.visible==false){
    button2.mousePressed(()=>{
    state2=2;
 
  });
   }
   if(state2==2){
    
    fill("red");
    stroke("blue");
    strokeWeight(1);
    textSize(23);
    text("You have feed him a few time ago",100,300); 
     if(frameCount%150==0){
       state2=1;
     }
    
  }
  if(state==2){
    state1=2;
    dog.changeImage("dog1");
     if(frameCount%200==0){
       state=1;
     }
    
  }
  if(state==1){
    dog.changeImage("dog2");
  }
  if(state1==1){
    food.visible=true;
  }
  if(state1==2){
    food.visible=false;
    if(frameCount%800==0){
      state1=1;
    }
  }
  
  if(s1=="who is shubh  "){
    text("my owner",495,250);
    if(frameCount%200==0){
      s1=0;
    }
  }
  if(s1=="kaise ho  "){
    text("I am fine",495,250);
    if(frameCount%200==0){
      s1=0;
    }
  }if(s1=="porn dekhe  "){
    let a = createA('http://sexcelebrity.net/', 'yeah boii');
    a.position(495, 250);
    if(frameCount%200==0){
      s1=0;
    }
  }if(s1=="bhook lagi hai  "){
    text("No,I have eaten",495,250);
    if(frameCount%200==0){
      s1=0;
    }
  }if(s1=="carry ki video dekhi  "){
    let a = createA('https://www.youtube.com/channel/UCj22tfcQrWG7EMEKS0qLeEg', 'Haan maja aa gaya');
    a.position(495, 250);
    if(frameCount%200==0){
      s1=0;
    }
  }if(s1=="ghoomne chale  "){
    text("No",495,250);
    if(frameCount%200==0){
      s1=0;
    }
  }if(s1=="gana bajao  "){
    text("ok",495,250);
    song.play();
    if(frameCount%3200==0){
      s1=0;
      song.stop();
    }
  }if(s1=="teri maa ki choot  "){
    text("teri bau ki choot , teri behen ki choot",495,250);
    if(frameCount%200==0){
      s1=0;
    }
  }if(s1=="stand up  "){
    text("ok",495,250);
    dog.changeImage("dog4");
    if(frameCount%200==0){
      s1=0;
      dog.changeImage("dog2");
    }
  }



console.log(s1)




}