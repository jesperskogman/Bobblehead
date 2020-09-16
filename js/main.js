var content = document.getElementById("success");
var button = document.getElementById("alert-button");

button.onclick = function(){
    console.log("babbaboe");

    if(content.className == "alert alert-success alert-dismissible fade hidden"){
        content.className = "alert alert-success alert-dismissible fade show";
    }
    

};