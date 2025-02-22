// Get the popup and the close button
const loginPopup = document.getElementById("loginPopup");
const closeBtn = document.querySelector(".close-btn");

// When the user clicks on the close button, close the popup
closeBtn.addEventListener("click", () => {
    window.close(); // Close the popup window
});

// When the user clicks anywhere outside of the popup, close it
window.addEventListener("click", (event) => {
    if (event.target === loginPopup) {
        window.close(); // Close the popup window
    }
});

// Handle Google Sign-In button click
document.getElementById("googleSignInBtn").addEventListener("click", (event) => {
    event.preventDefault();
    // Add your Google Sign-In logic here
    console.log("Signing in with Google...");

    // Close the popup after signing in
    window.close(); // Close the popup window
});