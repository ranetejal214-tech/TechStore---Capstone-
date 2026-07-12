document.addEventListener("DOMContentLoaded", () => {

    // Buy Now button functionality
    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Product added to cart!");
        });
    });

    // Contact form functionality
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            alert("Thank you! Your message has been sent successfully.");

            form.reset();
        });
    }

});