var cptNotifications = 0;
var interet = "sports";
  var shown = false; 
var notif;  
function notification(){

if(cptNotifications != 0){
	$( "#notification" ).effect( "bounce", { times: 2 }, "slow" );
document.getElementById("notification").innerText= cptNotifications;
}

}
function drapPic(){
	$("#drapPic").animate({
        height: '+=10px',
        width: '+=10px'
    }); //fait sauter le drag me!
}
function drapPic2(){
	$("#drapPic").animate({
        height: '-=10px',
        width: '-=10px'
    }); //fait sauter le drag me!
}
function match(){  //fait apparaitre le coeur
	var img = new Image();
	img.style.display = "block";
	img.src= "images/heart.png"
	document.body.appendChild(img);
}
function checkNotif(){ //remet le compteur a zero
	cptNotifications = 0;
	document.getElementById('notification').style.visibility = "hidden";
}



function toggleMenu() { //fait apparaitre le menu notifications
  

	
	
  if(shown == true) { // if is menuBox displayed, hide it
    $("#menu-box").hide(500);
	shown = false;
  }
  else { // if is menuBox hidden, display it
    $("#menu-box").show(500);
	shown = true;
	
	
	  	$.post("http://localhost:8080/notifs", document.getElementById('select').value, function(data){
		if(data == "false"){
		alert("No recent match!");
		}
		else{
		$("#notif").innerHTML += "Vous avez un match avec" + data;	
		var notif = document.getElementById("menu");
		var li = document.createElement("LI");
		var txt = document.createTextNode(data);
		li.appendChild(txt);
		menu.appendChild(li);
		}
	});
  }
}



function allowDrop(ev) { //permet de dropper
    ev.preventDefault();
	var sp1 = document.createElement("span");
	sp1.appendChild(document.getElementById("thumbsUp"));
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
			
	
}
function submitting(){
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	var likes = document.getElementById("select").value;
	if(user == "Mickey" && pass == "password" && likes == "sports"){
		var pp = document.getElementById("profilePic");
		document.getElementById("profilePic").img.src= 'images/heart.png';
		return false;
	}
	if(user && pass && likes){
		return true;
		
	}
	else{
		document.getElementById("user").style.backgroundColor = "pink";
		document.getElementById("pass").style.backgroundColor = "pink";
		alert("Veuillez remplir les champs obligatoires.");
		return false;

	}
}
function verification(champ){
	if(champ.value == ""){
		champ.style.backgroundColor = "pink";
	}
	else if(champ.value != ""){
		champ.style.backgroundColor = "white";
	}

}
function drop(ev) {
    ev.preventDefault();
	var profPic = document.getElementsByClassName('profilePic');
	var selection = document.getElementById('select');
	var matching = ev.target;
	profPic.name = selection.value;
    var data = ev.dataTransfer.getData("text");
		var img = new Image();
	img.setAttribute("id", "thumbsUp");	
	img.name = interet;
	img.src= "images/heart.png";
if(profPic.name == matching.className){
	ev.target.appendChild(img);
	cptNotifications++;
	notif += ev.target.id;
	document.getElementById('notification').style.visibility = "visible";
}	//tue le kid
else{
	$(ev.target).effect( "shake" ); //no match!
}
var sp2 = document.getElementById("dropPic");
var parentDiv = sp2.parentNode;
parentDiv.replaceChild(sp1,sp2);
}

