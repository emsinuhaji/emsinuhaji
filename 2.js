function CheckUsername(inputtxt) 
{ 
	var usernm=  /^[A-Za-z]\w{5,8}$/;
	if(inputtxt.value.match(usernm)) 
	{ 
		alert('Correct, try another...')
		return true;
	}
	else
	{ 
		alert('Wrong...!')
		return false;
	}
}


function CheckPassword(inputtxt) 
{ 
	var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,9}$/;
	if(inputtxt.value.match(decimal)) 
	{ 
		alert('Correct, try another...')
		return true;
	}
	else
	{ 
		alert('Wrong...!')
		return false;
	}
} 
