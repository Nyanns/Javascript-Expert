export default function initializeForm() {
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('registrationform');
        const email = document.getElementById('email');
        const country = document.getElementById('country');
        const zip = document.getElementById('zip');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmpassword');
        const successMessage = document.getElementById('successMessage');
        const formDataDisplay = document.getElementById('formDataDisplay'); // Element to display form data

        // Error messages
        const errorMsg = {
            email: "Please enter a valid email.",
            country: "Country is required.",
            zip: "Zip code should be 5 digits.",
            password: "Password must be at least 8 characters.",
            confirmPassword: "Passwords must match."
        };

        // Validation functions
        function emailValidate() {
            return email.validity.valid;
        }

        function countryValidate() {
            return country.value.trim() !== '';
        }

        function zipValidate() {
            return zip.value.length === 5;
        }

        function passwordValidate() {
            return password.value.length >= 8;
        }

        function confirmPasswordValidate() {
            return password.value === confirmPassword.value;
        }

        // Display error or success for each field
        function validateField(field, validator, errorMessageId, errorText) {
            const errorElement = document.getElementById(errorMessageId);
            if (!validator()) {
                errorElement.textContent = errorText;
                errorElement.style.display = 'block';
                field.style.borderColor = 'red';
                return false;
            } else {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
                field.style.borderColor = 'green';
                return true;
            }
        }

        // Event listeners for real-time validation
        email.addEventListener('input', function () {
            validateField(email, emailValidate, 'emailError', errorMsg.email);
        });
        country.addEventListener('input', function () {
            validateField(country, countryValidate, 'countryError', errorMsg.country);
        });
        zip.addEventListener('input', function () {
            validateField(zip, zipValidate, 'zipError', errorMsg.zip);
        });
        password.addEventListener('input', function () {
            validateField(password, passwordValidate, 'passwordError', errorMsg.password);
        });
        confirmPassword.addEventListener('input', function () {
            validateField(confirmPassword, confirmPasswordValidate, 'confirmpasswordError', errorMsg.confirmPassword);
        });

        // Function to save form data to localStorage as an array of entries
        function saveFormData() {
            const formData = {
                email: email.value,
                country: country.value,
                zip: zip.value,
                password: password.value,
                confirmPassword: confirmPassword.value
            };

            // Retrieve existing data or initialize as an empty array
            const savedData = JSON.parse(localStorage.getItem('formDataArray')) || [];
            savedData.push(formData); // Add new form data to the array

            // Save updated array to localStorage
            localStorage.setItem('formDataArray', JSON.stringify(savedData));
            console.log('Form data saved:', formData);
            displayFormData(); // Display all entries below the form
        }

        // Function to retrieve and display all form data entries from localStorage
        function displayFormData() {
            const savedData = JSON.parse(localStorage.getItem('formDataArray')) || [];
            formDataDisplay.innerHTML = ''; // Clear the current display

            savedData.forEach((entry, index) => {
                // Create elements for each entry
                const entryDiv = document.createElement('div');
                entryDiv.classList.add('form-entry');

                entryDiv.innerHTML = `
                    <p><strong>Entry ${index + 1}:</strong></p>
                    <p>Email: ${entry.email}</p>
                    <p>Country: ${entry.country}</p>
                    <p>Zip: ${entry.zip}</p>
                `;

                formDataDisplay.appendChild(entryDiv);
            });

            formDataDisplay.style.display = savedData.length > 0 ? 'block' : 'none';
        }

        // Function to display success message
        function displaySuccessMessage() {
            successMessage.style.display = 'block';
        }

        // Submit event listener to handle form submission and data saving
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent page refresh
            if (
                emailValidate() &&
                countryValidate() &&
                zipValidate() &&
                passwordValidate() &&
                confirmPasswordValidate()
            ) {
                saveFormData(); // Save form data
                displaySuccessMessage(); // Show success message
                form.reset(); // Reset form fields
            }
        });

        // Load saved data on page load
        displayFormData();
    });
}
