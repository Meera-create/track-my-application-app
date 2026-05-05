//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

document.getElementById("continueBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const selectedOption = document.querySelector(
        'input[name="changedName"]:checked'
    );

    if (!selectedOption) {
        alert("Please select Yes or No");
        return;
    }

    if (selectedOption.value === "yes") {
        window.location.href = "/visa-date.html";
    } else if (selectedOption.value === "no") {
        window.location.href = "/re-do-application.html";
    }
});

})



function validateDate(event){
  
  let dayValue =document.getElementById("passport-issued-day").value;
  let monthValue = document.getElementById("passport-issued-month").value;
  let yearValue = document.getElementById("passport-issued-year").value;


if (dayValue <= 0 || dayValue >=32 ||
monthValue <= 0 || monthValue >=13 
  || yearValue <= 1999 || yearValue >= 2027) {
    document.getElementById("error-date").innerHTML = " Error - Enter a valide date"
    return false;
  }
  return true;
}






function myFunction(event) {
  let x = document.getElementById("event-name").value;
  let y = x.length;

  if (isNaN(x) || y !== 12) {
    event.preventDefault();   // STOP page changing
    document.getElementById("ref-error").innerHTML = "Input not valid";
    return false;
  }
return true;
}





function validateOptions(event){

  event.preventDefault();

  let serviceOption = document.getElementById("sort").value;


   if(serviceOption === ""){
    document.getElementById("error-message").innerHTML =
    "Error: Please choose a service from the list";
    return false;
  }

  if(serviceOption === "visa"){
    window.location.href = "/visa-email.html";
  }

  else if(serviceOption === "passport" || serviceOption ==="HMLR" || serviceOption === "driving"){
    window.location.href = "/page-not-found.html";
    
  }

}


 function verifyName(event){

  let userName = document.getElementById("event-name").value;
  let nameCheck = Array.from(userName).every((char)=>
  /[A-Za-z]/.test(char));


  if (nameCheck === false ){
    document.getElementById("error-name").innerHTML =
    "Error: Enter only letters - no numbers";
   
    return false;
    
  }
  
return true;
   
  }