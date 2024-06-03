// Open the modal with the image and description of the clicked project item
function openModal(imageUrl, description) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    var modalDescription = document.getElementById("modal-description");

    // Set the image source and description
    modalImage.innerHTML = "<img src='" + imageUrl + "' alt='Project Image'>";
    modalDescription.textContent = description;

    // Show the modal
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("modal").style.display = "none";
};

// Attach click event listeners to each project item
var projectItems = document.querySelectorAll(".project-item");
projectItems.forEach(function(item) {
    item.addEventListener("click", function() {
        // Get the image URL and description of the clicked project item
        var imageUrl = this.querySelector("img").getAttribute("src");
        var description = this.getAttribute("data-description");

        // Open the modal with the image and description
        openModal(imageUrl, description);
    });
});
