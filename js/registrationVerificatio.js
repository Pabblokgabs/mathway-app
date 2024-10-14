
document.addEventListener('DOMContentLoaded', () => {

    //To unable the submit button on the registration form if the terms&cons is not checked
    const checkbox = document.getElementById('terms-and-conditions');
    const button = document.getElementById('submitButton');
    button.disabled = true;
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });



    const selectElement = document.getElementById('supportingDocument');
    const inputContainer = document.getElementById('inputContainer');

    selectElement.addEventListener('change', () => {
        // Show or hide the inputContainer based on the selected option
        if (selectElement.value) {
            inputContainer.classList.remove('hidden');
        } else {
            inputContainer.classList.add('hidden');
        }
    });


 });