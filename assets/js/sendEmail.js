//Applied Code learned from the module - 'Sending Emails Using EmailJS' (Code Institute)

function sendMail(contactForm){
    emailjs.send("gmail", "inspirotype_submission_form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "quote_submission": contactForm.userquote.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        }
    );
        return false;
}