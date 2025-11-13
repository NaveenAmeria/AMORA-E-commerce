// script.js

// Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Find the menu toggle button
    var menuToggleButton = document.getElementById('menuToggle');
    
    // Check if the button exists before adding an event listener
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', function() {
            var navbar = document.getElementById('navbar');
            
            // Check if the navbar exists
            if (navbar) {
                navbar.classList.toggle('active'); // Toggle the 'active' class for the navbar
            }
        });
    }
});