
//set connection to the socket

//var socket = io('http://localhost:8080');

//button html style

$("#signInButton").click(function(){
	$("#login").animate({
		width:"0px",
		height:"0px"
	});
	
	$("#signup").animate({
		height:"300px",
		width:"100%"
	});
});


$("#logInButton").click(function(){
	$("#signup").animate({
		width:"0px",
		height:"0px"
	});
	$("#login").animate({
		height:"300px",
		width:"100%"
	});
});

//form content object
function newAccountInfo(){
	var optiont = document.getElementById("choix");
this.name = document.getElementById("newName").value,
this.email = document.getElementById("newEmail").value,
this.avatar = document.getElementById("newAvatar").value.substring(12),
this.interest = optiont.options[optiont.selectedIndex].value,
this.password = document.getElementById("newPassword").value
}

function accountInfo(){
this.email = document.getElementById("logEmail").value,
this.password = document.getElementById("logPassword").value
}


//send form

$("#signInBtn").click(function(){
	account = new newAccountInfo();
	if(validateAccount(account)){
		if(validatePasswords(account)){
		$.post("http://localhost:8080/signin", account, function(data){
			if(data=="true"){
				alert("account has been created!");
			}
			else{
				alert("sorry this email is already occupied...");
			}
		});
	}
	else{
		alert("your passwords dont match");
	}
	}
	else{
		alert("please enter valid email and no special characters\n# / * < > ' ");
	}
});

$('#loginBtn').click(function(){
	$.post("http://localhost:8080/login", new accountInfo(), function(data){
		alert(JSON.stringify(data[0]));
		if(data == "false"){
		alert("wrong password or username, please try again!");
		}
		else{
			var user = JSON.stringify(data[0]);
			var connecté = JSON.parse(user);
			
			document.getElementById('userPic').setAttribute("name", connecté.interest);
			alert($('#userPic')[0].name);
			if(profPic.name != connecté.interest){
				
			}
			alert('You logged in with user: '+connecté.EMAIL);
			document.getElementById("userPic").src = "images/user.bmp";
		
		
		
		}
	});
});


function validateAccount(account) {
	    var emailReg= /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	    var normalReg= /^[A-Za-z0-9-_!]/
	    return(emailReg.test(account.email)&&normalReg.test(account.name)&&normalReg.test(account.password));
}

function validatePasswords(account){
	pass1 = document.getElementById("newPassword");
	pass2 = document.getElementById("newPassword2");
	if(pass1.value == pass2.value){
		return true;
	}
	else{
		return false;
	}
}