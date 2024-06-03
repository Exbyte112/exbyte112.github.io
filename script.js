document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalDescription = document.getElementById('modal-description');
    const span = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', () => {
            const description = item.getAttribute('data-description');
            modalDescription.textContent = description;
            modal.style.display = 'block';
        });
    });

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

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
        var description = this.querySelector("p").textContent;

        // Open the modal with the image and description
        openModal(imageUrl, description);
    });
});
