adminInterface();

function adminInterface() {
    // Insert buttons
  //  document.querySelector("body").insertAdjacentHTML('afterbegin', '<button onclick="actionFields();">Responded</button>');

    checkStatus();

}

function actionFields() {
    // Overwrite the status field
    document.querySelector('input[datavalue="6"]').value = "Completed";

    
    // Detect the user
    let user = document.querySelector(".login-greeting").innerText;
    if (user == "Hi Super User,") {
        // Overwrite the email field
        document.querySelector('input[datavalue="7"]').value = "james.mackay@eit.edu.au";
    }

}


// Filter rows based on status
function checkStatus() {
    let ticketStatus = document.querySelectorAll("*").innerHTML;

    console.log(ticketStatus[2]);

   /* for(i = 0; i < status.length; i++) {
        if(status[i] == "Completed") {
            console.log("worked!");
        }
    } */
   
}