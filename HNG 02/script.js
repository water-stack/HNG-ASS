document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const submitButton = document.querySelector('[data-testid="test-contact-submit"]');
    const successMessage = document.getElementById('success-message');
    let successHideTimeout = null;

    const errorElements = {
        'full-name': document.getElementById('error-full-name'),
        'email': document.getElementById('error-email'),
        'subject': document.getElementById('error-subject'),
        'message': document.getElementById('error-message')
    };

    function showError(field, message) {
        const el = errorElements[field];
        el.textContent = message;
        el.classList.remove('hidden');
    }

    function hideError(field) {
        const el = errorElements[field];
        el.textContent = '';
        el.classList.add('hidden');
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateForm() {
        let isValid = true;

        // Validate full name
        if (!fullName.value.trim()) {
            showError('full-name', 'Full name is required');
            isValid = false;
        } else {
            hideError('full-name');
        }

        // Validate email
        if (!email.value.trim()) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError('email');
        }

        // Validate subject
        if (subject.value === '') {
            showError('subject', 'Subject is required');
            isValid = false;
        } else {
            hideError('subject');
        }

        // Validate message
        if (!message.value.trim()) {
            showError('message', 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError('message', 'Message must be at least 10 characters long');
            isValid = false;
        } else {
            hideError('message');
        }

        return isValid;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission
            successMessage.textContent = 'Transmission successful. Response pending verification.';
            successMessage.classList.remove('hidden');

            // Reset form
            form.reset();

            // Hide success message after 5 seconds
            if (successHideTimeout) clearTimeout(successHideTimeout);
            successHideTimeout = setTimeout(function() {
                successMessage.classList.add('hidden');
            }, 5000);
        }
    });

    // Real-time validation
    [fullName, email, subject, message].forEach(field => {
        field.addEventListener('blur', function(e) {
            // Validate only the changed field for better UX
            switch (e.target.id) {
                case 'full-name':
                    if (!fullName.value.trim()) showError('full-name', 'Full name is required'); else hideError('full-name');
                    break;
                case 'email':
                    if (!email.value.trim()) showError('email', 'Email is required');
                    else if (!validateEmail(email.value)) showError('email', 'Please enter a valid email address');
                    else hideError('email');
                    break;
                case 'subject':
                    if (subject.value === '') showError('subject', 'Subject is required'); else hideError('subject');
                    break;
                case 'message':
                    if (!message.value.trim()) showError('message', 'Message is required');
                    else if (message.value.trim().length < 10) showError('message', 'Message must be at least 10 characters long');
                    else hideError('message');
                    break;
            }
        });

        field.addEventListener('input', function() {
            // Light real-time clearing of errors when user corrects input
            switch (this.id) {
                case 'full-name':
                    if (fullName.value.trim()) hideError('full-name');
                    break;
                case 'email':
                    if (validateEmail(email.value)) hideError('email');
                    break;
                case 'subject':
                    if (subject.value !== '') hideError('subject');
                    break;
                case 'message':
                    if (message.value.trim().length >= 10) hideError('message');
                    break;
            }
        });
    });
});
