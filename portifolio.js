
var skCount=2;

function displaySkills(op){

    switch(op)
    {
        case 1:document.getElementById("skills").style.display="flex";
               document.getElementById("education").style.display="none";
               break;
        
        case 2: 
               document.getElementById("education").style.display="block";
               document.getElementById("skills").style.display="none";
              
               break;
        default:
            alert("hello")
    }



















    if(skCount%2==0)
    {
        document.getElementById("skills").style.display="flex";
    }
    else{
        document.getElementById("skills").style.display="none";
    }
    skCount++;
}