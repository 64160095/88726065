const imageUploadInput = document.getElementById('imageUpload');
const imageContainer = document.getElementById('imageContainer');
const noImagesMessage = document.getElementById('noImagesMessage');
const uploadForm = document.getElementById('uploadForm');

const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
const api_key = "DEMO_API_KEY"

uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const files = imageUploadInput.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(event) {
            const imageUrl = event.target.result;

            const imageItem = document.createElement('div');
            imageItem.classList.add('imageItem');

            const img = document.createElement('img');
            img.src = imageUrl;

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'ลบ';
            deleteButton.addEventListener('click', function() {
                imageContainer.removeChild(imageItem);
                checkIfImagesExist();
            });

            imageItem.appendChild(img);
            imageItem.appendChild(deleteButton);
            imageContainer.appendChild(imageItem);
        };

        reader.readAsDataURL(file);
    }

    checkIfImagesExist();
});

function checkIfImagesExist() {
    if (imageContainer.children.length === 0) {
        noImagesMessage.style.display = 'block';
    } else {
        noImagesMessage.style.display = 'none';
    }
}
