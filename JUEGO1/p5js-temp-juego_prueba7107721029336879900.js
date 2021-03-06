var osos;
var mamas;
var arboles=[];
var cazadores=[];
var cortadores;
var tortugas=[];
var peces=[];
var bolsas=[];
var numPez=20;
var numBolsa=20;
var numTortuga=15;
var numArboles=40;
var numCazadores=7;
var pez;
var pezM;
var mama1;
var mama2;
var oso;
var osoHerido;
var bolsa;
var tortuga;
var tortugaEnf;
var arbol;
var tronco;
var cazador;
var leñador;
var fondoP;
var fondoV;
var fondoM;
var ganar;
var perder;
var Introo;
var Intro1=1;
var Intro2=2;
var Intro3=3;
var ganador=4;
var perdedor=5;
var Nivel1=6;
var Nivel2=7;
var Nivel3=8;
var intro=9;
var estado=0;
var fuente1;
var fuente2;
var fuente3;
var fuente4;
var puntaje1=0;
var puntaje2=0;
var puntaje3=0;
var puntajeMalo1=0;
var puntajeMalo2=0;
var puntajeMalo3=0;


function preload() {
  pez=loadImage('data/pez.png');
  pezM=loadImage('data/pezMuerto.png');
  mama1=loadImage('data/mamaOso1.png');
  mama2=loadImage('data/mamaOso2.png');
  oso=loadImage('data/osoBebe.png');
  osoHerido=loadImage('data/osoHerido.png');
  bolsa=loadImage('data/bolsa.png');
  tortuga=loadImage('data/tortuga.png');
  tortugaEnf=loadImage('data/torEnferma.png');
  arbol=loadImage('data/arbol.png');
  tronco=loadImage('data/tronco.png');
  cazador=loadImage('data/cazador.png');
  leñador=loadImage('data/cortador.png');
  fondoP=loadImage('data/paisaje2.png');
  fondoV=loadImage('data/paisaje1.png');
  fondoM=loadImage('data/paisaje3.png');
  ganar=loadImage('data/ganaste.png');
  perder=loadImage('data/perder.png');
  Introo=loadImage('data/intro.png');
  fuente1 = loadFont('data/Biko_Black.otf');
  fuente2 = loadFont('data/Biko_Bold.otf');
  fuente3 = loadFont('data/Biko_Light-Restricted.otf');
  fuente4 = loadFont('data/Biko_Regular.otf');
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  estado = Nivel3;

  //console.log("hello");

  for (i=0; i<numArboles; i++) {
    arboles[i]=new arbolito();
  }
  for (j=0; j<numCazadores; j++) {
    cazadores[j]=new hombreMalo();
  }
  for (k=0; k<numTortuga; k++) {
    tortugas[k]=new tortuguita();
  }
  for (l=0; l<numPez; l++) {
    peces[l]=new pecesitos();
  }
  for (m=0; m<numBolsa; m++) {
    bolsas[m]=new basura();
  }

  mamas=new MamaO();
  osos= new osito();
  cortadores=new hombreCorta();
} 

function draw() { 
  if (estado==intro) {
    background(Introo);
  }
  if (estado==Intro1) {
    background(104, 180, 111);

    background(fondoV);
    fill(0, 0, 0);
    push();
    textFont(fuente1, 15);
    textAlign(CENTER);
    text('¡No dejes que corten los árboles!', width/2, height/6);
    pop();
    push();
    textFont(fuente4, 15);
    textAlign(CENTER);
    text('¡Dale un toque al malhechor!', width/2, height/3);
    pop();
  }

  if (estado==Intro2) {
    background(164, 214, 233);
    background(fondoP);
    fill(0, 0, 0);
    push();
    textFont(fuente1, 14);
    textAlign(CENTER);
    text('¡Ayuda a la cría a llegar con su mamá!', width/2, height/6);
    pop();
    push();
    textFont(fuente4, 13);
    textAlign(CENTER);
    text('¡Gira el iPad y cuidado con los malos!', width/2, height/4);
    pop();
  } else if (estado==Intro3) {
    background(167, 207, 159);
    background(fondoM);
    fill(0, 0, 0);
    push();
    textFont(fuente1, 15);
    textAlign(CENTER);
    text('¡No dejes que la tortuga coma plástico!', width/2, height/6);
    pop();
    push();
    textFont(fuente4, 15);
    textAlign(CENTER);
    text('¡Rompe las bolsas y ciudado con los peces!', width/2, height/3);
    pop();
  } else if (estado==Nivel1) {

    background(104, 180, 111);


    for (i=0; i<numArboles; i++) {
      arboles[i].dibujar();

      cortadores.dibujar();
      cortadores.mover();

      if (dist(arboles[i].x, arboles[i].y, cortadores.x, cortadores.y)<10 && arboles[i].viva) {
        arboles[i].morir();
        puntajeMalo1++;
      }




      if (puntaje1>15)
      {

        estado=Intro2;


      } else if (puntajeMalo1>10)
      {
        estado=perder;


      }
    }

    stroke(0);
    fill(0, 0, 0);
    textFont(fuente4);
    textSize(30);
    textAlign(CENTER);
    text(puntaje1, 60, 50);
  } else if (estado==Nivel2) {
    background(164, 214, 233);


    for (j=0; j<numCazadores; j++) {
      cazadores[j].dibujar();
      cazadores[j].mover();
      mamas.mover();
      osos.dibujar();
      osos.mover();
      if (dist(cazadores[j].x, cazadores[j].y, osos.x, osos.y) < 20 && osos.viva) {
        osos.morir();
      }
    }


    if (dist(osos.x, osos.y, mamas.x, mamas.y)<40)
    {
      estado=Intro3;
    } 

    if (osos.viva==false) {
      
      estado=perder;
    }


  } else if (estado==Nivel3) {
    background(167, 207, 159);

    for (  k=0; k<numTortuga; k++) {
      tortugas[k].dibujar();
      tortugas[k].mover();
      for (l=0; l<numPez; l++) {
        peces[l].dibujar();
        peces[l].mover();
        for (m=0; m<numBolsa; m++) {
          bolsas[m].dibujar();
          bolsas[m].mover();

          if (dist(tortugas[k].x, tortugas[k].y, bolsas[m].x, bolsas[m].y)<10 && bolsas[m].viva) {
            bolsas[m].partir();
            tortugas[k].enfermar();
            tortugas.enfermedad++;
            if (tortugas.enfermedad>5) {
              tortugas.morir();
              puntajeMalo3++;
            }
          }
        }
      }
    }

    if (puntaje3>=15)
    {
      estado=ganar;
      puntaje1=0;
      puntajeMalo1=0;
      puntaje2=0;
      puntajeMalo2=0;
      puntaje3=0;
      puntajeMalo3=0;
    } else if (puntajeMalo3>10)
    {
      estado=perder;

    }

    if (puntaje3>=15)
    {
      estado=ganar;
    } 

    fill(0, 0, 0);
    textFont(fuente4);
    textSize(30);
    textAlign(CENTER);
    text(puntaje3, 60, 50);
  } else if (estado==ganador)
  {
      estado=ganar;
      puntaje1=0;
      puntajeMalo1=0;
      puntaje2=0;
      puntajeMalo2=0;
      puntaje3=0;
      puntajeMalo3=0;
    background(ganar);
    fill(0, 0, 0);
    push();
    textFont(fuente2, 20);
    textAlign(CENTER);
    text('¡Ganaste y ganó la tierra!', width/2, width/10);
    pop();
    push();
    textFont(fuente3, 15);
    textAlign(CENTER);
    text('¡Un día más de vida a tu planeta!', width/2, width/7);
    pop();
  } else if (estado==perdedor)
  {
      estado=ganar;
      puntaje1=0;
      puntajeMalo1=0;
      puntaje2=0;
      puntajeMalo2=0;
      puntaje3=0;
      puntajeMalo3=0;
    background(perder);
    fill(0, 0, 0);
    push();
    textFont(fuente2, 20);
    textAlign(CENTER);
    text('¡Perdiste y perdió la tierra!', width/2, width/10);
    pop();
    push();
    textFont(fuente3, 15);
    textAlign(CENTER);
    text('¡El calentamiento global es real!', width/2, width/7);
    pop();
  }
}


/*
function touchEnded() {
 if (estado==intro) {
 estado=Intro1;
 } else if (estado==Intro1) {
 estado=Nivel1;
 } else if (estado==Nivel1) {
 text(touch[0].x, width/2, height/2);
 puntaje++;
 if (dist(touch[0].x, touch[0].y, cortadores.x, cortadores.y)<40) {
 puntaje++;
 cortadores.rebotar();
 background(255);
 }
 } else if (estado==Intro2) {
 estado=Nivel2;
 } else if (estado==Intro3) {
 estado=Nivel3;
 } else if (estado==perdedor ||estado==ganador) {
 estado=intro;
 }
 return false;
 }*/

function touchEnded(){
  if (estado==Nivel1) {


    if (dist(touch[0].x, tocuh[0].y, cortadores.x, cortadores.y)<40) {
      puntaje1++;
      cortadores.rebotar();
    }
  }
}

function mouseReleased() {
  if (estado==intro) {
    estado=Intro1;
  } else if (estado==Intro1) {
    estado=Nivel1;
  }  else if (estado==Intro2) {
    estado=Nivel2;
  } else if (estado==Intro3) {
    estado=Nivel3;
  } else if (estado==perdedor ||estado==ganador) {
    estado=intro;
  }
  return false;
}

function touchMoved() {

  if (estado==Nivel3) {
    for (l=0; l<numPez; l++) {
      for (m=0; m<numBolsa; m++) {

        if (dist(touch[0].x, touch[0].y, bolsas[m].x, bolsas[m].y)<20 && bolsas[m].viva) {
          bolsas[m].partir();
          puntaje3++;
        }
        if (dist(touch[0].x, touch[0].y, peces[l].x, peces[l].y)<20 && peces[l].viva) {
          peces[l].morir();
          puntajeMalo3++;
        }
      }
    }
  }
  return false;
}


function basura() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.viva = true;
  this.bolsa= bolsa;
  this.dirX=0.01;
  this.dirY=0.01;

  this.dibujar=function()
  {
    if (this.viva) {
      imageMode(CENTER);
      image(this.bolsa, this.x, this.y, 15, 15);
    }
  }

  this.partir=function()
  {
    this.viva=false;
  }
  this.mover=function()
  {
    this.x=this.x+this.dirX;
    this.y=this.y+this.dirY;
    if (this.x>=width||this.x<=0) {
      // this.y=this.y+this.dirY;
      this.dirX=-this.dirX;
      if (this.y>=height||this.y<=0) {
        this.dirY=-this.dirY;
      }
    }
  }
}

function tortuguita() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.viva = true;
  this.dirX=-1;
  this.dirY=-1;
  this.tortuga= tortuga;
  this.enferma= tortugaEnf;
  this.enfermita=false;
  this.enfermedad=0;
  this.dibujar=function()
  {
    if (this.viva)
    {
      if (this.enfermita==false) {
        imageMode(CENTER);
        image(this.tortuga, this.x, this.y, 30, 30);
      } else {
        imageMode(CENTER);
        image(this.enferma, this.x, this.y, 30, 30);
      }
    }
  }
  this.mover=function() {
    this.x=this.x+this.dirX;
    if (this.x<=0 ||this.x>width) {
      this.y=this.y+this.dirY;
      this.dirX=-this.dirX;
      if (this.y<=0||this.y>height) {
        this.dirY=-this.dirY;
        this.y=this.y+this.dirY;
      }
    }
  }

  this.enfermar=function() {
    this.enfermita=true;
    this.enfermedad++;
  }
  this.morir=function()
  {
    this.viva=false;
  }
}

function osito() {

  this.x = width/5;
  this.y = 3*height/4 -20;
  this.dirX=0;
  this.dirY=0;
  this.viva = true;

  this.oso = oso;
  this.osoHerido  =osoHerido;
  this.muerto=0;
  this.herida=false;

  this.dibujar=function()
  {
    if (this.viva) {
      if (this.herida) {
        imageMode(CENTER);
        image(this.osoHerido, this.x, this.y, 40, 40);
      } else if (this.herida==false) {
        imageMode(CENTER);
        image(this.oso, this.x, this.y, 40, 40);
      }
    }
  }

  this.morir=function() {
    this.viva=false;
  }
  this.enfermar=function() {
    this.herida=true;
    this.muerto++;
  }

  this.mover=function() {
if(this.viva||this.herida){
  
      this.x=this.x+this.dirX;
    this.y=this.y+this.dirY;
    this.dirX=map(rotationX, -90, 90, 1, -1);
    this.dirY=map(rotationY, -90, 90, 1, -1);
    if (this.x>width) {
      this.x=20;
    }
    if (this.x<0) {
      this.x=width-20;
    }
    if (this.y>height) {
      this.y=20;
    }
    if (this.y<0) {
      this.y=height-20;
    }
  
  }
}
}
function MamaO() {
  this.x=4*width/5;
  this.y=height/8;
  this.mama1=mama1;
  this.mama2=mama2;
  this.seg=millis/1000;
  this.mover=function()
  {
    imageMode(CENTER);
    if (this.seg%2==0)
    {
      image(this.mama1, this.x, this.y, 40, 40);
    } else {
      image(this.mama2, this.x, this.y, 40, 40);
    }
  }
}


function pecesitos() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.viva = true;
  this.dirX=-0.1;
  this.dirY=-0.1;
  this.pez= pez;
  this.pezM=pezM;
  this.dibujar=function()
  {
    if (this.viva) {
      imageMode(CENTER);
      image(this.pez, this.x, this.y, 15, 15);
    } else {
      imageMode(CENTER);
      image(this.pezM, this.x, this.y, 15, 15);
    }
  }
  this.morir=function() {
    this.viva=false;
  }
  this.mover=function() {
    this.y=this.y+this.dirY;

    if (this.y>height||this.y<=0) {
      this.x=this.x+this.dirX;
      this.dirY=-this.dirY;
      if (this.x>width||this.x<=0) {
        this.dirX=-this.dirX;
        this.x=this.x+this.dirX;
      }
    }
  }
}

function arbolito() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.viva = true;
  this.arbol=arbol;
  this.tronco=tronco;
  this.dibujar=function()
  {
    if (this.viva) {
      imageMode(CENTER);
      image(this.arbol, this.x, this.y, 40, 60);
    } else {
      imageMode(CENTER);
      image(this.tronco, this.x, this.y, 30, 50);
    }
  }
  this.morir=function() {
    this.viva=false;
  }
}



function hombreMalo() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX=0.3;
  this.dirY=0.3;
  this.cazador=cazador;
  this.dibujar=function() {
    imageMode(CENTER);
    image(this.cazador, this.x, this.y, 20, 30);
  }
  this.mover=function() {
    this.x=this.x+this.dirX;
    if (this.x<=0||this.x>=width) {
      this.dirX=-this.dirX;
      this.y=this.y+this.dirY
        if (this.y<=0||this.y>=height) {
        this.dirY=-this.dirY;
        this.y=this.y+this.dirY;
      }
    }
  }
}



function hombreCorta() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX=0.1;
  this.dirY=10;
  this.leñador=leñador;
  this.rebote=false;
  this.dibujar=function() {
    imageMode(CENTER);
    image(this.leñador, this.x, this.y, 30, 40);
  }
  this.mover=function() {
    this.x=this.x+this.dirX;
    if (this.x<=0||this.x>=width || this.rebote==true) {
      this.dirX=-this.dirX;
      this.y=this.y+this.dirY

        if (this.y<=0||this.y>=height) {
        this.dirY=-this.dirY;
        this.y=this.y+this.dirY;
      }
    }
    this.rebote=false;
  }

  this.rebotar=function() {
    this.rebote=true;
  }
}