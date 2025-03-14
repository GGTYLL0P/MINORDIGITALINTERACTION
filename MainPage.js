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
    