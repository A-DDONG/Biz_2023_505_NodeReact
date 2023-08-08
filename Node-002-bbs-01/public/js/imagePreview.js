const imagesPreview = (input, imageBox) => {
  const files = input.files;

  for (let file of files) {
    const reader = new FileReader();
    reader.onload = (fe) => {
      const img = document.createElement("img");
      img.src = fe.target.result;
      img.width = 100;
      img.height = 100;

      imageBox.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
};

const imagePreview = (input, imageBox) => {
  const file = input.files[0];

  const reader = new FileReader();
  reader.onload = (fe) => {
    const img = document.createElement("img");
    img.src = fe.target.result;
    img.width = 100;
    img.height = 100;

    imageBox.appendChild(img);
  };
  reader.readAsDataURL(file);
};
