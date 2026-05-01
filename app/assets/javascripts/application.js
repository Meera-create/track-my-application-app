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
