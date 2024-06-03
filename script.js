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
