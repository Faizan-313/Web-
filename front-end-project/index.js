document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("input[name='Name']");
    const emailInput = document.querySelector("input[name='Email']");
    const dobInput = document.querySelector("input[name='DOB']");
    const countrySelect = document.querySelector("select[name='country']");
    const genderInputs = document.querySelectorAll("input[name='gender']");
    const consentCheckbox = document.querySelector("input[name='consent']");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        if (dobInput.value.trim() === "") {
            alert("Please enter your date of birth.");
            isValid = false;
        }

        if (countrySelect.value === "") {
            alert("Please select your state.");
            isValid = false;
        }

        let genderSelected = false;
        for (const genderInput of genderInputs) {
            if (genderInput.checked) {
                genderSelected = true;
                break;
            }
        }
        if (!genderSelected) {
            alert("Please select your gender.");
            isValid = false;
        }

        if (!consentCheckbox.checked) {
            alert("Please confirm that the details you provided are correct.");
            isValid = false;
        }
        
        if (!isValid) {
            event.preventDefault();
        }
    });
});
