// Contact form interaction

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            "Thank you, " + name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}


// Simple page-load animation

document.addEventListener("DOMContentLoaded", function() {

    document.body.style.opacity = "0";

    setTimeout(function() {

        document.body.style.transition = "opacity 0.5s ease";

        document.body.style.opacity = "1";

    }, 100);

});