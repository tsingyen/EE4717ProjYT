//Script - login.js



// Function called when the form is submitted.
function chkName(){
	let checkName = document.getElementById("name").value;
	console.log(checkName);
	let checkNameArray = checkName.split('');
	console.log(checkNameArray);

	// Validate!

	if (checkNameArray.length == 0)
	{
	    let text = "The name format is invalid";
	    document.getElementById("checkIfNameOk").innerHTML = text;
	}
	else if(checkValidStringName(checkNameArray[checkNameArray.length - 1]) || checkNameArray[checkNameArray.length - 1] == ' ') {
    	let text = "The name format is valid";
    	document.getElementById("checkIfNameOk").innerHTML = text;
    }
 	else {
    	text = "Your name " + checkName + " contains invalid characters. Please change it";
    	document.getElementById("checkIfNameOk").innerHTML = text;
    	// document.getElementById("job_name").value = "";
 	}

	//One last check using for loop
	for (let a = 0; a < checkNameArray.length; a++){
		if (checkValidStringName(checkNameArray[a]) || checkNameArray[a] == " "){
			let text = "The name format is valid";
    	document.getElementById("checkIfNameOk").innerHTML = text;
		}
		else {
			console.log("Should be invalid");
			text = "Your name " + checkName + " contains invalid characters. Please change it";
    	document.getElementById("checkIfNameOk").innerHTML = text;
			return;
		}
	}
}


function chkEmail(){
	let checkEmail = document.getElementById("email").value;
    console.log(checkEmail);
  	//Email can only split once.
 	 let emailFormatCheck = checkEmail.split('@');
  	console.log(emailFormatCheck);
  	console.log("The email length is " + emailFormatCheck.length);
  	if (emailFormatCheck.length != 2 || checkEmail == '@'){

   		let warning = "You have an invalid email-format";
    	console.log("I got in here");
    	document.getElementById("checkIfEmailOk").innerHTML = warning;
  	}
  	else {
    	//proceed with the validation
    	warning = "The E-mail format is valid";
    	document.getElementById("checkIfEmailOk").innerHTML = warning;

    	//Check userNamePart
    	let userNamePart = checkEmail.split('@')[0];
    	let userNameArray = userNamePart.split('');
    	console.log(userNameArray);
    	for (let i = 0; i < userNameArray.length - 1; i++){
      		if(checkValidStringUsername(userNameArray[userNameArray.length - 1]) == false) {
       		let text = "Invalid Character";
        	document.getElementById("checkIfEmailOk").innerHTML = text;
      	}
     	else {
       		text = "The E-mail format is valid";
        	document.getElementById("checkIfEmailOk").innerHTML = text;

					//Check that final username for the email format is still valid
          for(let b = 0; b < userNameArray.length; b++){
            if (checkValidStringUsername(userNameArray[b]) == false) {
              let warning = "The username format still contains invalid characters";
              document.getElementById("checkIfEmailOk").innerHTML = warning;
              return;
            }
          }

        	//Now Check the domain's address extension.
       		//Can only be up to 2 or 4 extensions
        	//let domainAddressPart = checkEmail.split('@')[1];
        	let domainAddressPart = emailFormatCheck[1];
        	if (domainAddressPart == null){
          	//When split with '@', the index at [1] is undefined
          	return
        }
        console.log("The domain splitted address is " + domainAddressPart);
        let domainAddressArray = domainAddressPart.split('.');
        console.log("The domainAddressArray is " + domainAddressArray);
        if (domainAddressArray.length > 4 || domainAddressArray.length < 2){
          let warning = "The domain address format is wrong";
          document.getElementById("checkIfEmailOk").innerHTML = warning;
        }
        else {

          //Check that domain name contain valid chacracters
          for(let k = 0; k < domainAddressArray.length; k++){
            if (checkValidStringName(domainAddressArray[k]) == false) {
              let warning = "The domain address format contains invalid characters";
              document.getElementById("checkIfEmailOk").innerHTML = warning;
              return;
            }
          }


          let warning = "The E-mail format is valid";
          document.getElementById("checkIfEmailOk").innerHTML = warning;

          //Now check that the last domain address have at least 2 to 3 strings
          let lastCheck = domainAddressArray[domainAddressArray.length - 1];
          let lastCheckArray = lastCheck.split('');
          if (lastCheckArray.length == 2 || lastCheckArray.length == 3) {
            let warning = "The E-mail format is valid";
            document.getElementById("checkIfEmailOk").innerHTML = warning;
          }
          else {
            console.log("The last domain address is " + lastCheckArray);
            console.log(`It has ${lastCheckArray.length} strings.`)
            let warning = "The last domain address do not have the required amount of strings";
            document.getElementById("checkIfEmailOk").innerHTML = warning;

          }
        }
      }
    }
  }
}



function chkDate(){
	// Get today's date
	let today = new Date();
	let tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);
    tomorrow = tomorrow.toISOString().slice(0, 10);
    console.log(tomorrow);

    dateElement = document.getElementById("date");
	dateElement.min = tomorrow;
}

chkDate();


//Function to check for acceptable Name characters
function checkValidStringName(inputtxt)
{
  return /^[a-zA-Z]+$/.test(inputtxt);
}
// Function to check acceptable Userame characters
function checkValidStringUsername(inputtxt)
{
  return /^[a-zA-Z0-9.-]+$/.test(inputtxt);
}
