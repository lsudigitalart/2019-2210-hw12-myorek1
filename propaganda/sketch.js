var music;
var time;
var loadtime;
var playTime;
var amp;

// propoganda imagase
var prop1 
var prop2 
var prop3
var prop4
var prop5
var prop6
var flag
var face
var trapped
var woozy
var you
var cant
var lose
var I
var refuse
var lies
var tired
var with1
var the
var truth
var prop
var death
var polution 
var killingme
var you2
var cant3
var lose2
var I2


var BWspiral1
var spiral1
var spiral2
var spiral3
// Propoganda letter variables
var p = "";
var p2 = 'P'
var r = 'R'
var o = 'O'
var a = 'A'
var g = 'G'
var n = 'N'
var d = 'D'
var propaganda = 'PROPAGANDA'

function preload(){ 
  music = loadSound("propaganda.mp3");
  prop = loadImage("prop.jpg");
  prop1 = loadImage("prop1.jpeg");
  prop2 = loadImage("prop2.jpg");
  prop3 = loadImage("prop3.jpg");
  prop4 = loadImage("prop4.jpg");
  prop5 = loadImage("prop5.jpg");
  prop6 = loadImage("prop6.jpg");
  flag = loadImage("flag.jpg");
  face = loadImage("face.png");
  BWspiral1=loadImage("BWspiral1.gif");
  spiral1 = createImg("BWspiral1.gif")
  trapped =  createImg("trapped.png");
  woozy = createImg("woozy.png");
  you =  createImg("you.png");
  cant = createImg("cant.png");
  lose = createImg("lose.png");
  spiral2 = createImg("spiral2.gif");
  I = createImg("I.png");
  refuse = createImg("refuse.png");
  lies = createImg("lies.png");
  tired = createImg("tired.png");
  with1 = createImg("with.png");
  the = createImg("the.png");
  truth = createImg("truth.png");
  death =  createImg("death.png");
  polution =  createImg("polution.gif");
  killingme =  createImg("killingme.png");
  spiral3 = createImg("spiral3.gif"); 
  you2 = createImg("you2.png");
  cant3 = createImg("cant2.png");
  lose2 = createImg("lose2.png");
  I2 = createImg("I2.png");
}

function setup(){
  createCanvas(800,600);
  noStroke();

if (music.isLoaded()){
loadtime = millis();
print(loadtime); 
music.play();

  }

}

function draw(){
  background(5);

  text(p, 10, 350);

 // playTime
  playTime = millis() - loadtime;

 // hiding the words
if (playTime > 0 && playTime < 10180){
  spiral1.hide();
  
}
if (playTime > 0 && playTime < 60800){
  spiral2.hide();
}
if(playTime>0 && playTime< 106300){
  spiral3.hide();
}
if (playTime > 0 && playTime < 19200){
  trapped.hide();
}

if (playTime>0){
  you.hide();
  cant.hide();
  lose.hide();
  I.hide();
  refuse.hide();
  woozy.hide();
  lies.hide();
  tired.hide();
  with1.hide();
  the.hide();
  truth.hide();
  death.hide();
  polution.hide();
  killingme.hide();
  you2.hide();
  cant3.hide();
  lose2.hide();
  I2.hide();

}

// opening of the song
 // words 1
 Propoganda1(); 
// images
 Propaganda3();

 // flag 
if (playTime > 7200 && playTime < 7400||playTime > 7500 && playTime < 7700){
  image(flag, 0,0,flag.width*1.4, flag.height*1.5);
} 
// words 2
Propoganda2();

//  come back and work on the inbetweens
// vurse 1 

if (playTime > 10180 && playTime< 50100){


spiral1.show();
spiral1.position(8,8);
spiral1.size(800,600);
spiral1.style("z-index", "0");

}
// hide the spiral
if (playTime> 50100){
  spiral1.hide();
}

//vurse 1
vurse1();

// propoganda middle words 
Propoganda4();

// vurse 2
// spiral 2 
if (playTime > 61000){
  spiral2.show();
  spiral2.position(5,8);
  spiral2.size(800,600);
  spiral2.style("z-index", "0");
}

if (playTime > 96000){
  spiral2.hide();

}

vurse2();



Propaganda5();


// spiral 3 
if(playTime > 106300){
  spiral3.show();
  spiral3.position(8,8);
  spiral3.size(800,600);
  spiral3.style("z-index", "0");
}
//1280000
//131700 lies
//14000000lies 
//1679
// lies in the thing 
if(playTime > 137000){
  lies.show();
  lies.position(150,200);
}
if (playTime > 137900){
  lies.hide();
}

// last propoganda
if(playTime > 172290){
  spiral3.hide();
}
//final propoganda 
if(playTime > 172290 && playTime < 172390) {
  textSize(110);
  fill(200,200,200)
  p = 'P'
  }
 
  if (playTime > 172390 ){
     p = ''
  }
  
 
  if(playTime > 172390 && playTime < 172490||playTime > 173290 && playTime < 173390){
    textSize(110);
  fill(200,200,200)
  text(r, 83, 350);
  }
  
  if(playTime > 172490 && playTime < 172590 || playTime > 173390 && playTime < 173490){
   textSize(110);
 fill(200,200,200)
 text(o, 163, 350);
 }
 
 if(playTime > 172590 && playTime < 172690 ||playTime > 173490 && playTime < 173590 ){
   textSize(110);
 fill(200,200,200)
 text(p2, 248, 350);
 }
 
 if(playTime > 172690 && playTime < 172790 ||playTime > 173590 && playTime < 173690){
   textSize(110);
 fill(200,200,200)
 text(a, 313, 350);
 }
 
 if(playTime > 172790 && playTime < 172890||playTime > 173690 && playTime < 173790){
   textSize(110);
 fill(200,200,200)
 text(g, 387, 350);
 }
 
 if(playTime > 172890 && playTime < 172990||playTime > 173790 && playTime < 173890){
   textSize(110);
 fill(200,200,200)
 text(a, 472, 350);
 }
 
 if(playTime > 172990 && playTime < 173090||playTime > 173890 && playTime < 173990){
   textSize(110);
 fill(200,200,200)
 text(n, 546, 350);
 }
 
 if(playTime > 173090 && playTime < 173190 ||playTime > 173990 && playTime < 174090){
   textSize(110);
 fill(200,200,200)
 text(d, 625, 350);
 }
 if(playTime > 173190 && playTime < 173290 ||playTime > 174090 && playTime < 174190){
   textSize(110);
 fill(200,200,200)
 text(a, 705, 350);
 }
 if (playTime > 174190){
   textSize(110);
   fill(180,69,166)
   text(propaganda, 10, 350);
 } 
 
}


//propoganda 4 words 1
//word functions
function vurse1(){
  // show the word trapped
if (playTime > 19200 && playTime < 20200){

  trapped.show();
  trapped.position(0,10);
  trapped.size(800,600);
}
if(playTime > 20200){
  trapped.hide();
}
// woozy
if (playTime > 25300 && playTime < 26200){

  woozy.show();
  woozy.position(10,200);
  
}
if(playTime > 26200){
  woozy.hide();
}

// you cant lose writen out
if (playTime > 35600 && playTime < 36200){
  you.show();
  you.position(160,200);
}
  if (playTime > 36200 && playTime < 81600){
     you.hide();
    }
if (playTime > 36200 && playTime < 36500){
  cant.show();
  cant.position(120,200);
}
if (playTime > 36500){
  cant.hide();
}
if (playTime > 36500 && playTime < 37000){
  lose.show();
  lose.position(120,200);
}
if (playTime > 37000){
  lose.hide();
}

// you cant refuse written out
if (playTime > 40800 && playTime < 41000){
  I.show();
  I.position(380,200);
  if (playTime > 41000){
     I.hide();
    }
  }
if (playTime > 41000 && playTime < 41400){
  cant.show();
  cant.position(120,200);
}
if (playTime > 41400){
  cant.hide();
}
if (playTime > 41400 && playTime < 41900){
  refuse.show();
  refuse.position(-8,200);
}
if (playTime > 41900){
  refuse.hide();
}

// show lies
if (playTime > 46000 && playTime < 46300){
  lies.show();
  lies.position(150,200);
}
if (playTime > 46300){
  lies.hide();
}

// tired with the truth 
if (playTime > 47000 && playTime < 49500){
  tired.show();
  tired.position(200,80);
}
if (playTime > 47300 && playTime < 49500){
  with1.show();
  with1.position(200,180);
}
if (playTime > 47500 && playTime < 49500){
  the.show();
  the.position(200,280);
}
if (playTime > 47800 && playTime < 49500){
  truth.show();
  truth.position(200,380);
}

if (playTime > 48500){
  tired.hide();
  with1.hide();
  the.hide();
  truth.hide();
}
}
function Propoganda1(){
// flash the leterrs a ccross the screen oppening sequence
if(playTime > 300 && playTime < 400 ||playTime > 1500 && playTime < 1600) {
  textSize(110);
  fill(200,200,200)
  p = 'P'
  }
 
  if (playTime > 400 && playTime < 1500|| playTime > 1600 ){
     p = ''
  }
  
 
  if(playTime > 400 && playTime < 500 ||playTime > 1600 && playTime < 1700){
    textSize(110);
  fill(200,200,200)
  text(r, 83, 350);
  }
  
  if(playTime > 500 && playTime < 600 ||playTime > 1700 && playTime < 1800){
   textSize(110);
 fill(200,200,200)
 text(o, 163, 350);
 }
 
 if(playTime > 600 && playTime < 700 ||playTime > 1800 && playTime < 1900){
   textSize(110);
 fill(200,200,200)
 text(p2, 248, 350);
 }
 
 if(playTime > 700 && playTime < 800 ||playTime > 1900 && playTime < 2000){
   textSize(110);
 fill(200,200,200)
 text(a, 313, 350);
 }
 
 if(playTime > 800 && playTime < 900 ||playTime > 2000 && playTime < 2100){
   textSize(110);
 fill(200,200,200)
 text(g, 387, 350);
 }
 
 if(playTime > 900 && playTime < 1000 ||playTime > 2100 && playTime < 2200){
   textSize(110);
 fill(200,200,200)
 text(a, 472, 350);
 }
 
 if(playTime > 1000 && playTime < 1100 ||playTime > 2200 && playTime < 2300){
   textSize(110);
 fill(200,200,200)
 text(n, 546, 350);
 }
 
 if(playTime > 1100 && playTime < 1200 ||playTime > 2300 && playTime < 2400){
   textSize(110);
 fill(200,200,200)
 text(d, 625, 350);
 }
 if(playTime > 1200 && playTime < 1300 ||playTime > 2500 && playTime < 2600){
   textSize(110);
 fill(200,200,200)
 text(a, 705, 350);
 }
 if (playTime > 2500 && playTime < 2600 ||playTime > 2700 && playTime < 2800 ){
   textSize(110);
   fill(180,69,166)
   text(propaganda, 10, 350);
 } 
 
 // big propoganda letters flash
 
 if (playTime > 2900 && playTime < 3100){
   textSize(600);
   fill(200,200,200)
   text('P', 240, 500);
 } 
 
 if (playTime > 3100 && playTime < 3300){
   textSize(600);
   fill(200,200,200)
   text('R', 240, 500);
 } 
 
 if (playTime > 3300 && playTime < 3500){
   textSize(600);
   fill(200,200,200)
   text('O', 240, 500);
 } 
 
 if (playTime > 3500 && playTime < 3700){
   textSize(600);
   fill(200,200,200)
   text('P', 240, 500);
 } 
 if (playTime > 3700 && playTime < 3900){
   textSize(600);
   fill(200,200,200)
   text('A', 240, 500);
 } 
 if (playTime > 3900 && playTime < 4100){
   textSize(600);
   fill(200,200,200)
   text('G', 240, 500);
 } 
 if (playTime > 4100 && playTime < 4300){
   textSize(600);
   fill(200,200,200)
   text('A', 240, 500);
 } 
 if (playTime > 4300 && playTime < 4500){
   textSize(600);
   fill(200,200,200)
   text('N', 240, 500);
 } 
 if (playTime > 4500 && playTime < 4700){
   textSize(600);
   fill(200,200,200)
   text('D', 240, 500);
 } 
 if (playTime > 4700 && playTime < 4900){
   textSize(600);
   fill(200,200,200)
   text('A', 240, 500);
 } 
 if (playTime > 5000 && playTime < 5100 ||playTime > 5200 && playTime < 5300 ){
   textSize(110);
   fill(180,69,166)
   text(propaganda, 10, 350);
 } 
 
}
function Propoganda2(){
  if(playTime > 7800 && playTime < 9100||playTime > 9100 && playTime < 10000) {
    textSize(110);
    fill(200,200,200)
    p = 'P'
    }
   
    //if (playTime > 10100){
       //p = ''
   // }
    
   
    if(playTime > 7900 && playTime < 9100||playTime > 9100 && playTime < 9900){
      textSize(110);
    fill(200,200,200)
    text(r, 83, 350);
    }
    
    if(playTime > 8000 && playTime < 9100||playTime > 9100 && playTime < 9800){
     textSize(110);
   fill(200,200,200)
   text(o, 163, 350);
   }
   
   if(playTime > 8100 && playTime < 9100||playTime > 9100 && playTime < 9700){
     textSize(110);
   fill(200,200,200)
   text(p2, 248, 350);
   }
   
   if(playTime > 8300 && playTime < 9100||playTime > 9100 && playTime < 9600){
     textSize(110);
   fill(200,200,200)
   text(a, 313, 350);
   }
   
   if(playTime > 8400 && playTime < 9100||playTime > 9100 && playTime < 9500){
     textSize(110);
   fill(200,200,200)
   text(g, 387, 350);
   }
   
   if(playTime > 8500 && playTime < 9100||playTime > 9100 && playTime < 9400){
     textSize(110);
   fill(200,200,200)
   text(a, 472, 350);
   }
   
   if(playTime > 8600 && playTime < 9100||playTime > 9100 && playTime < 9300){
     textSize(110);
   fill(200,200,200)
   text(n, 546, 350);
   }
   
   if(playTime > 8700 && playTime < 9100||playTime > 9100 && playTime < 9200){
     textSize(110);
   fill(200,200,200)
   text(d, 625, 350);
   }
   if(playTime > 8800 && playTime < 9100||playTime > 9100 && playTime < 9101){
     textSize(110);
   fill(200,200,200)
   text(a, 705, 350);
   }
  
}
function Propaganda3(){
// flash propoganda images
if (playTime > 5400 && playTime < 5600 ){
  image(prop1, 150,0,prop1.width*2.5, prop1.height*2.5);
} 
   
if (playTime > 5600 && playTime < 5800 ){
  image(prop2, 160,0,prop2.width*.7, prop2.height*.7);
} 
   
if (playTime > 5800 && playTime < 6000 ){
  image(prop3, 160,0,prop3.width*.5, prop3.height*.5);
} 
   
if (playTime > 6000 && playTime < 6200 ){
  image(prop4, 160,0,prop4.width*1.5, prop4.height*1.5);
} 
if (playTime > 6200 && playTime < 6300 ){
  image(prop5, 170,0,prop5.width*.63, prop5.height*.63);
} 
if (playTime > 6300 && playTime < 6500 ){
  image(prop6, 150,0,prop5.width*.7, prop5.height*.7);
} 
if (playTime > 6500 && playTime < 6700 ||playTime > 6900 && playTime < 7200 ){
  textSize(110);
  fill(180,69,166)
  text(propaganda, 10, 350);
} 
}

function vurse2(){
  if (playTime > 66100 && playTime < 67200){

    death.show();
    death.position(170,250);
    
  }
  if(playTime > 67200){
    death.hide();
  }
  // polution
  if (playTime > 77300 && playTime < 78200){
  
    polution.show();
    polution.position(0,7);
    polution.size(820,600);
    
  }
  if(playTime > 78200){
    polution.hide();
  }
  
  // you cant lose writen out
if (playTime > 81100 && playTime < 81600){
     you2.show();
    you2.position(160,230);
    print('you');
  }
    if (playTime > 81800){
       you2.hide();
      }
  if (playTime > 81600 && playTime < 82000){
    cant3.show();
    cant3.position(160,230);
  }
  if (playTime > 82000){
    cant3.hide();
  }
  if (playTime > 82000 && playTime < 82400){
    lose2.show();
    lose2.position(160,230);
  }
  if (playTime > 82400){
    lose2.hide();
  }
  
  // i cant refuse written out
  if (playTime > 86000 && playTime < 86300){
    I2.show();
    I2.position(380,200);
  }
    if (playTime > 86300){
       I.hide();
      }
    
  if (playTime > 86300 && playTime < 86600){
    cant3.show();
    cant3.position(160,200);
  }
  if (playTime > 86600){
    cant3.hide();
  }
  
  if (playTime > 86600 && playTime < 87100){
    refuse.show();
    refuse.position(-10,200);
    print('refuse');
  }
  if (playTime > 87100){
    refuse.hide();
  
  }
  
  // show lies
  if (playTime > 91000 && playTime < 92000){
    lies.show();
    lies.position(150,200);
  }
  if (playTime > 92000){
    lies.hide();
  }
  
  // tired with the truth 
  if (playTime > 92000 && playTime < 94500){
    tired.show();
    tired.position(200,80);
  }
  if (playTime > 92300 && playTime < 94500){
    with1.show();
    with1.position(200,180);
  }
  if (playTime > 92500 && playTime < 94500){
    the.show();
    the.position(200,280);
  }
  if (playTime > 92800 && playTime < 94500){
    truth.show();
    truth.position(200,380);
  }
  
  if (playTime > 94500){
    tired.hide();
    with1.hide();
    the.hide();
    truth.hide();
  }

  if (playTime > 95000 && playTime < 95500){
    killingme.show();
    killingme.position(0,250);
  }


  if (playTime > 95500){
    killingme.hide();

  }
}
function Propoganda4(){
  // flash the leterrs a ccross the screen oppening sequence
  if(playTime > 51000 && playTime < 51100 ||playTime >52300 && playTime < 52400) {
    textSize(110);
    fill(200,200,200)
    p = 'P'
    }
   
    if (playTime > 51100 && playTime < 52300|| playTime > 52400 ){
       p = ''
    }
    
   
    if(playTime > 51100 && playTime < 51200 ||playTime > 52400 && playTime < 52500){
      textSize(110);
    fill(200,200,200)
    text(r, 83, 350);
    }
    
    if(playTime > 51200 && playTime < 51300 ||playTime > 52500 && playTime < 52600){
     textSize(110);
   fill(200,200,200)
   text(o, 163, 350);
   }
   
   if(playTime > 51300 && playTime < 51400 ||playTime > 52600 && playTime < 52700){
     textSize(110);
   fill(200,200,200)
   text(p2, 248, 350);
   }
   
   if(playTime > 51500 && playTime < 51600 ||playTime > 52700 && playTime < 52800){
     textSize(110);
   fill(200,200,200)
   text(a, 313, 350);
   }
   
   if(playTime > 51600 && playTime < 51700 ||playTime > 52800 && playTime < 52900){
     textSize(110);
   fill(200,200,200)
   text(g, 387, 350);
   }
   
   if(playTime > 51700 && playTime < 51800 ||playTime > 52900 && playTime < 53000){
     textSize(110);
   fill(200,200,200)
   text(a, 472, 350);
   }
   
   if(playTime > 51800 && playTime < 51900 ||playTime > 53000 && playTime < 53100){
     textSize(110);
   fill(200,200,200)
   text(n, 546, 350);
   }
   
   if(playTime > 51900 && playTime < 52000 ||playTime > 53100 && playTime < 53200){
     textSize(110);
   fill(200,200,200)
   text(d, 625, 350);
   }
   if(playTime > 52000 && playTime < 52100 ||playTime > 53200 && playTime < 53300){
     textSize(110);
   fill(200,200,200)
   text(a, 705, 350);
   }
   if (playTime > 53300 && playTime < 53400 ||playTime > 53600 && playTime < 53700 ){
     textSize(110);
     fill(180,69,166)
     text(propaganda, 10, 350);
   } 
   
   // big propoganda letters flash
   
   if (playTime > 53900 && playTime < 54000){
     textSize(600);
     fill(200,200,200)
     text('P', 240, 500);
   } 
   
   if (playTime > 54000 && playTime < 54100){
     textSize(600);
     fill(200,200,200)
     text('R', 240, 500);
   } 
   
   if (playTime > 54100 && playTime < 54200){
     textSize(600);
     fill(200,200,200)
     text('O', 240, 500);
   } 
   
   if (playTime > 54200 && playTime < 54300){
     textSize(600);
     fill(200,200,200)
     text('P', 240, 500);
   } 
   if (playTime > 54300 && playTime < 54400){
     textSize(600);
     fill(200,200,200)
     text('A', 240, 500);
   } 
   if (playTime > 54400 && playTime < 54500){
     textSize(600);
     fill(200,200,200)
     text('G', 240, 500);
   } 
   if (playTime > 54500 && playTime < 54600){
     textSize(600);
     fill(200,200,200)
     text('A', 240, 500);
   } 
   if (playTime > 54600 && playTime < 54700){
     textSize(600);
     fill(200,200,200)
     text('N', 240, 500);
   } 
   if (playTime > 54700 && playTime < 54800){
     textSize(600);
     fill(200,200,200)
     text('D', 240, 500);
   } 
   if (playTime > 54800 && playTime < 54900){
     textSize(600);
     fill(200,200,200)
     text('A', 240, 500);
   } 
   if (playTime > 55000 && playTime < 55100 ||playTime > 55200 && playTime < 55300 ){
     textSize(110);
     fill(180,69,166)
     text(propaganda, 10, 350);
   } 
   
   // pictures flash
   if (playTime > 55400 && playTime < 55600 ){
    image(prop1, 150,0,prop1.width*2.5, prop1.height*2.5);
  } 
     
  if (playTime > 55600 && playTime < 55800 ){
    image(prop2, 160,0,prop2.width*.7, prop2.height*.7);
  } 
     
  if (playTime > 55800 && playTime < 56000 ){
    image(prop3, 160,0,prop3.width*.5, prop3.height*.5);
  } 
     
  if (playTime > 56000 && playTime < 56200 ){
    image(prop4, 160,0,prop4.width*1.5, prop4.height*1.5);
  } 
  if (playTime > 56200 && playTime < 56400 ){
    image(prop5, 170,0,prop5.width*.63, prop5.height*.63);
  } 
  if (playTime > 56400 && playTime < 56600 ){
    image(prop6, 150,0,prop5.width*.7, prop5.height*.7);
  } 
  if (playTime > 56600 && playTime < 56800 ||playTime > 57000 && playTime < 57200 ){
    textSize(110);
    fill(180,69,166)
    text(propaganda, 10, 350);
  } 
  if 
  (playTime > 57300 && playTime < 57500||playTime > 57600 && playTime < 57800){
    image(prop, 0,0,prop.width*.8, prop.height*1);
  } 
  //final word before next spiral
  if(playTime > 58000 && playTime < 59100||playTime > 59100 && playTime < 60100) {
    textSize(110);
    fill(200,200,200)
    p = 'P'
    }
   
    if(playTime > 58100 && playTime < 59100||playTime > 59100 && playTime < 60000){
      textSize(110);
    fill(200,200,200)
    text(r, 83, 350);
    }
    
    if(playTime > 58200 && playTime < 59100||playTime > 59100 && playTime < 59900){
     textSize(110);
   fill(200,200,200)
   text(o, 163, 350);
   }
   
   if(playTime > 58300 && playTime < 59100||playTime > 59100 && playTime < 59800){
     textSize(110);
   fill(200,200,200)
   text(p2, 248, 350);
   }
   
   if(playTime > 58400 && playTime < 59100||playTime > 59100 && playTime < 59700){
     textSize(110);
   fill(200,200,200)
   text(a, 313, 350);
   }
   
   if(playTime > 58500 && playTime < 59100||playTime > 59100 && playTime < 59600){
     textSize(110);
   fill(200,200,200)
   text(g, 387, 350);
   }
   
   if(playTime > 58600 && playTime < 59100||playTime > 59100 && playTime < 59500){
     textSize(110);
   fill(200,200,200)
   text(a, 472, 350);
   }
   
   if(playTime > 58700 && playTime < 59100||playTime > 59100 && playTime < 59400){
     textSize(110);
   fill(200,200,200)
   text(n, 546, 350);
   }
   
   if(playTime > 58800 && playTime < 59100||playTime > 59100 && playTime < 59300){
     textSize(110);
   fill(200,200,200)
   text(d, 625, 350);
   }
   if(playTime > 58900 && playTime < 59100||playTime > 59100 && playTime < 59201){
     textSize(110);
   fill(200,200,200)
   text(a, 705, 350);
  }
}

function Propaganda5(){

  // flash the leterrs a ccross the screen oppening sequence
    if(playTime > 96800 && playTime < 96900 ||playTime >97900 && playTime < 98000) {
      textSize(110);
      fill(200,200,200)
      p = 'P'
      }
     
      if (playTime > 96800 && playTime < 96900|| playTime > 98000 ){
         p = ''
      }
      
     
      if(playTime > 96900 && playTime < 97000 ||playTime > 98000 && playTime < 98100){
        textSize(110);
      fill(200,200,200)
      text(r, 83, 350);
      }
      
      if(playTime > 97000 && playTime < 97100 ||playTime > 98100 && playTime < 98200){
       textSize(110);
     fill(200,200,200)
     text(o, 163, 350);
     }
     
     if(playTime > 97100 && playTime < 97200 ||playTime > 98200 && playTime < 98300){
       textSize(110);
     fill(200,200,200)
     text(p2, 248, 350);
     }
     
     if(playTime > 97200 && playTime < 97300 ||playTime > 98300 && playTime < 98400){
       textSize(110);
     fill(200,200,200)
     text(a, 313, 350);
     }
     
     if(playTime > 97300 && playTime < 97400 ||playTime > 98400 && playTime < 98500){
       textSize(110);
     fill(200,200,200)
     text(g, 387, 350);
     }
     
     if(playTime > 97400 && playTime < 97500 ||playTime > 98500 && playTime < 98600){
       textSize(110);
     fill(200,200,200)
     text(a, 472, 350);
     }
     
     if(playTime > 97500 && playTime < 97600 ||playTime > 98600 && playTime < 98700){
       textSize(110);
     fill(200,200,200)
     text(n, 546, 350);
     }
     
     if(playTime > 97600 && playTime < 97700 ||playTime > 98700 && playTime < 98800){
       textSize(110);
     fill(200,200,200)
     text(d, 625, 350);
     }
     if(playTime > 97700 && playTime < 97800 ||playTime > 98800 && playTime < 98900){
       textSize(110);
     fill(200,200,200)
     text(a, 705, 350);
     }
     if (playTime > 99200 && playTime < 99400 ||playTime > 99600 && playTime < 99800 ){
       textSize(110);
       fill(180,69,166)
       text(propaganda, 10, 350);
     } 
     
     // big propoganda letters flash
     
     if (playTime > 99900 && playTime < 100000){
       textSize(600);
       fill(200,200,200)
       text('P', 240, 500);
     } 
     
     if (playTime > 100000 && playTime < 100100){
       textSize(600);
       fill(200,200,200)
       text('R', 240, 500);
     } 
     
     if (playTime > 100100 && playTime < 100200){
       textSize(600);
       fill(200,200,200)
       text('O', 240, 500);
     } 
     
     if (playTime > 100200 && playTime < 100300){
       textSize(600);
       fill(200,200,200)
       text('P', 240, 500);
     } 
     if (playTime > 100300 && playTime < 100400){
       textSize(600);
       fill(200,200,200)
       text('A', 240, 500);
     } 
     if (playTime > 100400 && playTime < 100500){
       textSize(600);
       fill(200,200,200)
       text('G', 240, 500);
     } 
     if (playTime > 100500 && playTime < 100600){
       textSize(600);
       fill(200,200,200)
       text('A', 240, 500);
     } 
     if (playTime > 100600 && playTime < 100700){
       textSize(600);
       fill(200,200,200)
       text('N', 240, 500);
     } 
     if (playTime > 100700 && playTime < 100800){
       textSize(600);
       fill(200,200,200)
       text('D', 240, 500);
     } 
     if (playTime > 100800 && playTime < 100900){
       textSize(600);
       fill(200,200,200)
       text('A', 240, 500);
     } 
     if (playTime > 101000 && playTime < 101100 ||playTime > 101200 && playTime < 101300 ){
       textSize(110);
       fill(180,69,166)
       text(propaganda, 10, 350);
     } 
     
     // pictures flash
     if (playTime > 101400 && playTime < 101600 ){
      image(prop1, 150,0,prop1.width*2.5, prop1.height*2.5);
    } 
       
    if (playTime > 101600 && playTime < 101800 ){
      image(prop2, 160,0,prop2.width*.7, prop2.height*.7);
    } 
       
    if (playTime > 101800 && playTime < 102000 ){
      image(prop3, 160,0,prop3.width*.5, prop3.height*.5);
    } 
       
    if (playTime > 102000 && playTime < 102200 ){
      image(prop4, 160,0,prop4.width*1.5, prop4.height*1.5);
    } 
    if (playTime > 102200 && playTime < 102400 ){
      image(prop5, 170,0,prop5.width*.63, prop5.height*.63);
    } 
    if (playTime > 102400 && playTime < 102600 ){
      image(prop6, 150,0,prop5.width*.7, prop5.height*.7);
    } 
    if (playTime > 102600 && playTime < 102800 ||playTime > 103000 && playTime < 103200 ){
      textSize(110);
      fill(180,69,166)
      text(propaganda, 10, 350);
    } 
    if 
    (playTime > 103300 && playTime < 103500||playTime > 103600 && playTime < 103800){
      image(prop, 0,0,prop.width*.8, prop.height*1);
    } 
    //final word before next spiral
    if(playTime > 104000 && playTime < 105100||playTime > 105100 && playTime < 106100) {
      textSize(110);
      fill(200,200,200)
      p = 'P'
      }
     
      if(playTime > 104100 && playTime < 105100||playTime > 105100 && playTime < 106000){
        textSize(110);
      fill(200,200,200)
      text(r, 83, 350);
      }
      
      if(playTime > 104200 && playTime < 105100||playTime > 105100 && playTime < 105900){
       textSize(110);
     fill(200,200,200)
     text(o, 163, 350);
     }
     
     if(playTime > 104300 && playTime < 105100||playTime > 105100 && playTime < 105800){
       textSize(110);
     fill(200,200,200)
     text(p2, 248, 350);
     }
     
     if(playTime > 104400 && playTime < 105100||playTime > 105100 && playTime < 105700){
       textSize(110);
     fill(200,200,200)
     text(a, 313, 350);
     }
     
     if(playTime > 104500 && playTime < 105100||playTime > 105100 && playTime < 105600){
       textSize(110);
     fill(200,200,200)
     text(g, 387, 350);
     }
     
     if(playTime > 104600 && playTime < 105100||playTime > 105100 && playTime < 105500){
       textSize(110);
     fill(200,200,200)
     text(a, 472, 350);
     }
     
     if(playTime > 104700 && playTime < 105100||playTime > 105100 && playTime < 105400){
       textSize(110);
     fill(200,200,200)
     text(n, 546, 350);
     }
     
     if(playTime > 104800 && playTime < 105100||playTime > 105100 && playTime < 105300){
       textSize(110);
     fill(200,200,200)
     text(d, 625, 350);
     }
     if(playTime > 104900 && playTime < 105100||playTime > 105100 && playTime < 105201){
       textSize(110);
     fill(200,200,200)
     text(a, 705, 350);
    }
}

