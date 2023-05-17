/*jshint esversion: 6 */
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('ZeVrVpnrISRsAcECy');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                window.location.href="/arcadegame/index.html";
                window.alert("Your Feedback was received. Thank you")
            }, function(error) {
                console.log('FAILED...', error);
                window.alert( "Unfortunately, your feedback was not submitted successfully. Please try again later.")
            });
    });
}