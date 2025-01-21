// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//Toggle hamburgemenyknapp
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.querySelector(".sidebar");

    // När hamburgermenyn klickas på, öppna menyn
    hamburgerBtn.addEventListener("click", function () {
        sidebar.classList.add("active");  // Visa sidomenyn
        hamburgerBtn.classList.add("active");  // Ändra hamburgermenyn (tre streck till kryss)
    });

    // När kryssknappen klickas på, stäng menyn
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");  // Dölja sidomenyn
        hamburgerBtn.classList.remove("active");  // Återställ hamburgermenyn till tre streck
    });
});
