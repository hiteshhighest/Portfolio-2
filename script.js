// Loading
let Dark = true;

function Theme() {
    if (Dark) {
        document.querySelector('body').classList.add('Light');
        document.querySelector('body').classList.remove('Dark');
        document.querySelector('.Theme').src = 'Images/Dark.svg';
        Dark = false;
    } else {
        document.querySelector('body').classList.add('Dark');
        document.querySelector('body').classList.remove('Light');
        document.querySelector('.Theme').src = 'Images/Light.svg';
        Dark = true;
    }
}

window.onload = function() {
    setTimeout(function() {
        document.querySelector(".loading-page").style.display = "none";
    }, 2500);
};

const numDots = 30; // Number of dots
for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
            
    const top = Math.random() * 100 + 'vh';
    const left = Math.random() * 100 + 'vw';
    dot.style.top = top;
    dot.style.left = left;
            
    dot.style.setProperty('--i', i);

    document.body.appendChild(dot);
}



// Function to toggle the sidebar visibility on mobile
function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}

// Close the sidebar when clicking outside of it
document.addEventListener("click", function (event) {
    const sidebar = document.querySelector(".sidebar");
    const menuButton = document.querySelector(".menu-btn");

    // Check if the click is outside the sidebar and the menu button
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

// Ensure the sidebar is not opened automatically when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("active"); // Make sure it's closed initially
});
