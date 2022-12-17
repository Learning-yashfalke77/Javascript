const images = {
    fileInput: document.querySelector('#file-input'),
    imageContainer: document.querySelector('.images'),
    numOfFiles: document.querySelector('#no-of-files'),
}

let noOfFiles = 0;


images.fileInput.addEventListener('change', function () {
    if (!(images.fileInput.files.length > 10)) {
        images.imageContainer.innerHTML = ''
        images.numOfFiles.textContent = `${images.fileInput.files.length} Images Selected`

        for (const iterator of images.fileInput.files) {
            let reader = new FileReader();
            const figure = document.createElement('figure')
            const figCaption = document.createElement('figcaption')

            figCaption.innerText = iterator.name
            figure.append(figCaption)
            reader.onload = () => {
                let img = document.createElement('img')
                img.src = reader.result
                figure.insertBefore(img, figCaption)
            }
            images.imageContainer.append(figure)
            reader.readAsDataURL(iterator)
        }
    } else {
        images.numOfFiles.textContent = `0 Images Selected`
        images.imageContainer.innerHTML = ''
        alert('Please select ten images only')
    }


})

