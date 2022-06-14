let bolean=false;


function clickConf() {
    
if(bolean==false){
    
        document.getElementsByClassName("panelConfContenido")[0].className = "panelConfContenido activado"; 
       
       
        bolean=true;
    }else{
        document.getElementsByClassName("panelConfContenido")[0].className = "panelConfContenido"; 

        bolean=false;
    }
    
}
/*LOGICA PARA LOS SWITCH DE PANELES*/ 

let eyeBolean1=true;

function clickeye1(){
    if(eyeBolean1==true){
        //eye activo=> a desactivado
        document.getElementById("itemeye1").className +=" activoeye";
        document.getElementById("eyeon1").style.display = "none";
        document.getElementById("eyeoff1").style.display = "flex";
        document.getElementById("columna1").style.display="none";
        eyeBolean1=false;
    }else{
        //eye desactivado=>activado
        document.getElementById("itemeye1").className = 'itemeye';
        document.getElementById("eyeon1").style.display = "flex";
        document.getElementById("eyeoff1").style.display = "none";
        document.getElementById("columna1").style.display="flex";
        eyeBolean1=true;
    }
}

let eyeBolean2=true;
function clickeye2(){
    if(eyeBolean2==true){
        //eye activo=> a desactivado
        document.getElementById("itemeye2").className +=" activoeye";
        document.getElementById("eyeon2").style.display = "none";
        document.getElementById("eyeoff2").style.display = "flex";
        document.getElementById("columna2").style.display="none";
        eyeBolean2=false;
    }else{
        
        //eye desactivado=>activado
        document.getElementById("itemeye2").className = 'itemeye';
        document.getElementById("eyeon2").style.display = "flex";
        document.getElementById("eyeoff2").style.display = "none";
        document.getElementById("columna2").style.display="flex";
        eyeBolean2=true;
    }
}

let eyeBolean3=true;
function clickeye3(){
    if(eyeBolean3==true){

        //eye activo=> a desactivado
        document.getElementById("itemeye3").className +=" activoeye";
        document.getElementById("eyeon3").style.display = "none";
        document.getElementById("eyeoff3").style.display = "flex";
        document.getElementById("columna3").style.display="none";
        eyeBolean3=false;
    }else{
         //eye desactivado=>activado
         document.getElementById("itemeye3").className = 'itemeye';
         document.getElementById("eyeon3").style.display = "flex";
         document.getElementById("eyeoff3").style.display = "none";
         document.getElementById("columna3").style.display="flex";
        eyeBolean3=true;
    }
}
