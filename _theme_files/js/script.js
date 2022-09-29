// Some JavaScript to load the image and show the form. There is no actual backend functionality. This is just the UI

const form = document.querySelector('#img-form');

function loadImage(e) {
  const file = e.target.files[0];

  if (!isFileImage(file)) {
      alert('Please select an image file');
        return;
  }

  form.style.display = 'block';
  document.querySelector(
    '#filename'
  ).innerHTML = file.name;
}

function isFileImage(file) {
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    return file && acceptedImageTypes.includes(file['type'])
}

document.querySelector('#img').addEventListener('change', loadImage);
