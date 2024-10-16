// JavaScript for Bootstrap validation
(function() {
    'use strict';

    // Fetch the form we want to apply custom Bootstrap validation styles to
    var form = document.getElementById('payment-form');
    var errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        // Check if the form is valid
        if (!form.checkValidity()) {
            event.preventDefault(); // Prevent form submission
            event.stopPropagation(); // Stop further event propagation
            errorMessage.classList.remove('d-none'); // Show the error message
        } else {
            errorMessage.classList.add('d-none'); // Hide the error message if valid
        }

        form.classList.add('was-validated'); // Apply Bootstrap validation styles
    }, false);
})();