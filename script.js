let booleanVar=true;

function boo(){
    if (booleanVar === false){
        document.getElementById("scary").style.display="block";
        document.getElementById("aww").style.display="none";
        booleanVar = true;
    }
    else{
        document.getElementById("scary").style.display="none";
        document.getElementById("aww").style.display="block";
        booleanVar = false;
    }
}