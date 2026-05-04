/*
Student Name: Tobias McMillan
File Name: HomeVidButton.js
Date: 12/14/2025
*/

// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// makes the button show/hide the table of videos
const button = document.getElementById("toggleVids");
const section = document.getElementById("videos");

button.addEventListener("click", () => {
    if (window.getComputedStyle(section).display === "none") {
        section.style.display = "block";
        button.textContent = "Hide Videos";
    } else {
        section.style.display = "none";
        button.textContent = "See Videos about The World Cup";
    }
});
