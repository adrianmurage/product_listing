$(document).ready(function () {
  const form = document.getElementById("addProduct");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Working");
    const formData = new FormData(form);

    const formDataObject = {};
    console.log(formData);
    for (data of formData) {
      formDataObject[data[0]] = data[1];
      console.log(data);
    }
    console.log(formDataObject);
  });

  // TODO: add a way to create the final product object that gets sent to the db

  //get the value of the select
  $("#productType").on("change", function () {
    TypeSwitcher(this.value);
  });
});

function TypeSwitcher(value) {
  clearOptions();
  handleProductTypes[value]();
}

const handleProductTypes = {
  DVD: insertDvd,
  Furniture: insertFurniture,
  Book: insertBook,
  None: clearOptions,
};
function insertDvd() {
  const parent = document.getElementById("typeswitcher");

  const dvdSize = document.createElement("input");
  const dvdSizeLabel = document.createElement("label");
  dvdSizeLabel.setAttribute("for", "size");
  dvdSizeLabel.innerHTML = "Size (MB)";
  dvdSize.type = "input";
  dvdSize.id = "size";
  dvdSize.name = "size";
  parent.appendChild(dvdSizeLabel);
  parent.appendChild(dvdSize);
}

function insertFurniture() {
  const parent = document.getElementById("typeswitcher");

  //furniture height
  const furnitureHeight = document.createElement("input");
  const furnitureHeightLabel = document.createElement("label");
  furnitureHeightLabel.setAttribute("for", "height");
  furnitureHeightLabel.innerHTML = "Height (CM)";
  furnitureHeight.type = "input";
  furnitureHeight.id = "height";
  furnitureHeight.name = "height";
  parent.appendChild(furnitureHeightLabel);
  parent.appendChild(furnitureHeight);

  //furniture width
  const furnitureWidth = document.createElement("input");
  const furnitureWidthLabel = document.createElement("label");
  furnitureWidthLabel.setAttribute("for", "width");
  furnitureWidthLabel.innerHTML = "Width (CM)";
  furnitureWidth.type = "input";
  furnitureWidth.id = "width";
  furnitureWidth.name = "width";
  parent.appendChild(furnitureWidthLabel);
  parent.appendChild(furnitureWidth);

  //furniture length
  const furnitureLength = document.createElement("input");
  const furnitureLengthLabel = document.createElement("label");
  furnitureLengthLabel.setAttribute("for", "length");
  furnitureLengthLabel.innerHTML = "Length (CM)";
  furnitureLength.type = "input";
  furnitureLength.id = "length";
  furnitureLength.name = "length";
  parent.appendChild(furnitureLengthLabel);
  parent.appendChild(furnitureLength);
}

function insertBook() {
  const parent = document.getElementById("typeswitcher");
  const bookWeight = document.createElement("input");
  const bookWeightLabel = document.createElement("label");
  bookWeightLabel.setAttribute("for", "weight");
  bookWeightLabel.innerHTML = "Weight (KG)";
  bookWeight.type = "input";
  bookWeight.id = "weight";
  bookWeight.name = "weight";
  parent.appendChild(bookWeightLabel);
  parent.appendChild(bookWeight);
}

function clearOptions() {
  const parent = document.getElementById("typeswitcher");
  parent.innerHTML = "";
}
