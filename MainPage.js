document.addEventListener('DOMContentLoaded', function () {
    let imageContainers = document.querySelectorAll('.left-section .image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', function () {
            updateRightSection(container);
        });
    });
});

function updateRightSection(imageContainer) {
    let title = imageContainer.getAttribute('data-title');
    let subtitle = imageContainer.getAttribute('data-subtitle');
    let description = imageContainer.getAttribute('data-description');
    let imgSrc = imageContainer.querySelector('img').src;

    let rightImageElement = document.querySelector('.right-section .box-image');
    let rightTitleElement = document.querySelector('.right-section .box-title');
    let rightSubtitleElement = document.querySelector('.right-section .box-subtitle');
    let rightDescriptionElement = document.querySelector('.right-section .box-description');

    rightImageElement.src = imgSrc;
    rightTitleElement.textContent = title;
    rightSubtitleElement.textContent = subtitle;
    rightDescriptionElement.textContent = description;
}

document.addEventListener('DOMContentLoaded', function () {
    let imageContainers = document.querySelectorAll('.left-section .image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', function () {
            updateRightSection(container);
        });
    });

    // Populate the painting list in the popup dynamically
    let paintingList = document.querySelector('.painting-list');
    imageContainers.forEach(container => {
        let title = container.getAttribute('data-title');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true; // Default: all paintings are selected
        checkbox.setAttribute('data-id', container.id);
        let label = document.createElement('label');
        label.textContent = title;
        label.prepend(checkbox);

        let div = document.createElement('div');
        div.classList.add('painting-item');
        div.appendChild(label);

        paintingList.appendChild(div);
    });
});

// Open the overlay popup
function openEditOverlay() {
    document.getElementById('popup-overlay').style.display = 'flex';
}

// Close the overlay popup
function closeEditOverlay() {
    document.getElementById('popup-overlay').style.display = 'none';
}

// Apply the changes (remove unchecked paintings)
function applyChanges() {
    let checkboxes = document.querySelectorAll('.painting-list input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        let paintingId = checkbox.getAttribute('data-id');
        let painting = document.getElementById(paintingId);
        if (checkbox.checked) {
            painting.style.display = 'flex'; // Keep the painting visible
        } else {
            painting.style.display = 'none'; // Hide the painting
        }
    });
    closeEditOverlay(); // Close the popup after applying changes
}