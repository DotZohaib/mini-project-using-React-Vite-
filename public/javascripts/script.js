document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("user-photo").addEventListener("click", function(){
        document.getElementById("user-dropdown").classList.toggle("hidden");
    });
    // Alert for testing purposes
    alert("I am working with JavaScript");
});