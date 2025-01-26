const fileInput = document.getElementById('file-input');
const uploadedImage = document.getElementById('uploaded-image');
const backgroundImage = document.getElementById('background-image');
const designerArea = document.querySelector('.af-designer-area'); // Updated class name
const scaleInput = document.getElementById('scale');
const rotateInput = document.getElementById('rotate');
const xInput = document.getElementById('x');
const yInput = document.getElementById('y');
const bgColorInput = document.getElementById('bg-color');

// File upload event
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
      uploadedImage.style.display = "block";

      // Ensure the uploaded image doesn't exceed the background image's size
      const bgWidth = backgroundImage.width;
      const bgHeight = backgroundImage.height;
      
      // Constrain the uploaded image size
      uploadedImage.style.maxWidth = `${bgWidth}px`;
      uploadedImage.style.maxHeight = `${bgHeight}px`;
      
      // Reset transform values when a new image is uploaded
      uploadedImage.style.transform = `translate(-50%, -50%)`;
    };
    reader.readAsDataURL(file);
  }
});

// Update transformations
scaleInput.addEventListener('input', updateTransform);
rotateInput.addEventListener('input', updateTransform);
xInput.addEventListener('input', updateTransform);
yInput.addEventListener('input', updateTransform);

// Update background color
bgColorInput.addEventListener('input', (event) => {
  designerArea.style.backgroundColor = event.target.value;
});

function updateTransform() {
  const scale = scaleInput.value;
  const rotate = rotateInput.value;
  const x = xInput.value;
  const y = yInput.value;

  // Apply transformation to the uploaded image
  uploadedImage.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotate}deg) translate(${x}px, ${y}px)`;
}
