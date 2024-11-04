function initializeDropdowns() {
    document.addEventListener("DOMContentLoaded", () => {
        // Attach event listeners to all dropdowns
        const dropdowns = document.querySelectorAll('.dropdown');

        for (const dropdown of dropdowns) {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');

            // Toggle the menu on button click
            toggle.addEventListener('click', (event) => {
                menu.classList.toggle('visible');
                event.stopPropagation(); // Prevents the document click listener from immediately closing the menu
            });
        }

        // Close any open dropdown if clicking outside
        document.addEventListener('click', (event) => {
            dropdowns.forEach(dropdown => {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (!dropdown.contains(event.target)) {
                    menu.classList.remove('visible');
                }
            });
        });
    });
}

// Export the function as default for ES6 module usage
export default initializeDropdowns;
