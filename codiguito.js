
var contraseñas=0;
function mostrarContra(){
    var mostrar = document.getElementById("ContLog");

    if (mostrar.type =="password"){
        mostrar.type ="text";
    }
    else{
        mostrar.type ="password";
    }

}
/*
document.getElementById("enviar1").addEventListener("click", comprobarContraseña);

function comprobarContraseña(){
    event.preventDefault();
    var contraseña1=document.getElementById("Contraseña").value;
    var contraseña2=document.getElementById("Repetir").value;
    var correo=document.getElementById("correo")

    if (contraseña1 == contraseña2){
        contraseñas=1;
    }
    else {
        contraseñas=2;
    }

}*/


document.getElementById("logear").addEventListener("click",function(){
    document.getElementById("logearse").style.display="block";
    document.getElementById("registrarse").style.display="none";
    document.getElementById("inicial").style.display="none";
    document.getElementById("final").style.display="none";
});

document.getElementById("alta").addEventListener("click",function(){
    document.getElementById("registrarse").style.display="block";
    document.getElementById("logearse").style.display="none";
    document.getElementById("inicial").style.display="none";
    document.getElementById("final").style.display="none";
});
document.getElementById("final").addEventListener("click",function(){
    document.getElementById("final").style.display="block";
    document.getElementById("logearse").style.display="none";
    document.getElementById("inicial").style.display="none";
    document.getElementById("registrarse").style.display="none";
});

//function error(mensaje){
 //   document.getElementById("mensajeError").style.display="block";
  //  document.getElementById("mensajeError").innerHTML=mensaje;
    //document.getElementById("mensajeError").className="error";     
//}

document.getElementById("enviar2").addEventListener("click", coacito);



function validarPass(){
    var p1 = document.getElementById("Contraseña").value;
    var expresion=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    
    if(!expresion.test(p1)){
        document.getElementById("p").innerHTML="Contraseña no valida";
        return false;
    }
        setCookie("Contraseña",p1,1);
        return true;
    
}
function validarPass2(){
    var p1 = document.getElementById("Contraseña").value;
    var p2 = document.getElementById("Repetir").value;
    if (p1 != p2) {   
        document.getElementById("p").innerHTML="Contraseñas no coinciden";
        return false;
    }
    return true;
}

function validarMail(){
    var correo=document.getElementById("email").value;
    var expresion=/\w+@\w+\.+[a-z]/;
    var expresion2= /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    
    if(expresion.test(correo)||expresion2.test(correo)){
          setCookie("Correo",correo,1);
        return true;
    }
    
    document.getElementById("p").innerHTML="Email no valido";
    return false;
}


document.getElementById("enviar1").addEventListener("click",validar);

function validar(e){
    if(validarMail() && validarPass() && validarPass2()){
            document.getElementById("final").style.display="none";
            document.getElementById("registrarse").style.display="none";
            document.getElementById("inicial").style.display="none";
            document.getElementById("logearse").style.display="block";
            return true;
    }
    else{
        e.preventDefault();
        return false;
        
    }
    
}

document.getElementById("enviar2").addEventListener("click", conectarse);

function conectarse(){
    var p1 = document.getElementById("Contraseña").value;
    var p2=document.getElementById("ContLog").value;
    if (p1==p2){
        document.getElementById("final").style.display="block";
        document.getElementById("registrarse").style.display="none";
        document.getElementById("inicial").style.display="none";
        document.getElementById("logearse").style.display="none";
    }
    else {
        document.getElementById("p").innerHTML="Contraseña erronea";
        return false;
    }

}

function comprobar(e){
    var a=getCookie("Correo");
    var b=getCookie("Contraseña");
    
    if(document.getElementById("correo").value==document.getElementById("correo2").value && document.getElementById("pass1").value==document.getElementById("pass2").value){

    document.getElementById("conect").style.display="block";
    document.getElementById("log").style.display="none";
    document.getElementById("a").innerHTML="Bienvenido "+document.getElementById("correo").value+" has iniciado sesión con éxito...";
        
    }else{
        document.getElementById("c").innerHTML="No se ha podido establecer conexion, revise los datos...";
        document.getElementById("c").style.className="error";
        e.preventDefault();
    }
   
    
}

function desconectar(){
    
    deleteCookie("Correo");
    deleteCookie("Contraseña");
    document.getElementById("f1").reset();
    document.getElementById("f2").reset();
    document.getElementById("f3").reset();
    document.getElementById("log").style.display="block";
    document.getElementById("conect").style.display="none";
    document.getElementById("c").innerHTML="Se ha desconectado con éxito";
    document.getElementById("c").className="confirm";
    document.getElementById("mensajeError").style.display="none";
    
}

    

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function deleteCookie(cname){
      return document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  function volverLog(){
    document.getElementById("final").style.display="none";
    document.getElementById("registrarse").style.display="none";
    document.getElementById("inicial").style.display="none";
    document.getElementById("logearse").style.display="block";
  }
  
