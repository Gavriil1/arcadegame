/*jshint esversion: 6 */
//Background image:
document.body.style.backgroundImage = "url('assets/background/feedbackbackground.jpg')";

// This script was published for emailJs application on  https://www.emailjs.com/docs/tutorial/creating-contact-form/
// I added to it if condition which checks if textarea is empty.
// In addition, I added command to move the user to the home page after feedback is submitted.


// we initialize the SDK with our public key
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('ZeVrVpnrISRsAcECy');
})();

//We get the textarea value from the form. If it is  empty we stop execution
//If value has a message I send it to my email with emailJs
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // prevent action to accept empty field
        const messageInput = document.getElementById('subject');

        if (messageInput.value.trim() === '') {
        window.alert('Please leave a feedback message');
        process.exit(0);
        }
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                window.location.href="/arcadegame/index.html";
                window.alert("Your Feedback was received. Thank you");
            }, function(error) {
                console.log('FAILED...', error);
                window.alert( "Unfortunately, your feedback was not submitted successfully. Please try again later.");
            });
    });
};