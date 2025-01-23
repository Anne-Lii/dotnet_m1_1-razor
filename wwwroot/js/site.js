
//Toggle hamburgemeny-knappen
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.querySelector(".sidebar");

    //Visar menyn vid klick på hamburgemenyn-knappen
    hamburgerBtn.addEventListener("click", function () {
        sidebar.classList.add("active"); //Visa sidomenyn
        hamburgerBtn.classList.add("active"); 
    });

    //Stäng meny vid klick på kryss
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active"); //Dölja sidomenyn
        hamburgerBtn.classList.remove("active");
    });
});
