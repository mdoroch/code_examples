const closeButton = document.createElement("div");
closeButton.classList.add('.zoom-close');
closeButton.innerHTML = "<div/>"
const description = document.createElement("div");
description.classList.add('zoom-description');
const zoomPicture = document.createElement("div");
zoomPicture.classList.add('zoom');

const backgroundContainer = document.createElement("div")
backgroundContainer.innerHTML = "<div class=\"background-inactive\"></div>";

const imageContainer = document.createElement("div")
imageContainer.innerHTML = "<div class=\"image-container-inactive\"></div>";
backgroundContainer.appendChild(closeButton)
imageContainer.appendChild(zoomPicture)
imageContainer.appendChild(description)

backgroundContainer.appendChild(imageContainer)


document.addEventListener("DOMContentLoaded", function() {
    const images = document.body.querySelectorAll('.content img');
    const contentElem = document.querySelector('.content');
    const imagesArray = Array.from(images);
    for (let i=0;i<images.length; i++) {
        images[i].classList.add('cursor-zoom-in');
    }
    contentElem.addEventListener('click', (event) => {
        if (event.target.tagName.toUpperCase() === 'IMG') {
            renderZoomedView(event.target)
        }
    });
    document.body.addEventListener('click', (event) => {
        if (event.target.tagName.toUpperCase() !== 'IMG') {
            closeZoomedView();
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeZoomedView();
        }
    })
});

function renderZoomedView(image) {
    let imagesrc = image.src;
    const imageDescription = image.dataset && image.dataset.description;
    if (imageDescription == null) {
        description.innerText = '';
    }
    else {
        description.innerText = imageDescription;
    }
    // zoomPicture.innerHTML = <img src="${imagesrc}"/>
        document.body.appendChild(backgroundContainer)
    closeButton.classList.remove("close-button-inactive")
    description.classList.remove("description-inactive")
    zoomPicture.classList.remove("zoompicture-inactive")
    backgroundContainer.classList.add('background-active')
    imageContainer.classList.add('image-container-active')
    closeButton.classList.add("close-button-active")
    description.classList.add("description-active")
    zoomPicture.classList.add("zoompicture-active")

    const header = document.querySelector('header');
    header.classList.add('hide-header')
}

function closeZoomedView() {
    backgroundContainer.classList.remove('background-active')
    closeButton.classList.remove("close-button-active")
    description.classList.remove("description-active")
    zoomPicture.classList.remove("zoompicture-active")
    imageContainer.classList.remove('image-container-active')

    closeButton.classList.add("close-button-inactive")
    description.classList.add("description-inactive")
    zoomPicture.classList.add("zoompicture-inactive")

    const header = document.querySelector('header');
    header.classList.remove('hide-header')
}
