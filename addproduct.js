// listen to changes on the product type switcher
$("#productType").on("change", function () {
  TypeSwitcher(this.value);
});
// listen to changes on the product type switcher

// Decide what markup to generate based on product type
function TypeSwitcher(value) {
  clearOptions();
  handleProductTypes[value]();
}

const handleProductTypes = {
  DVD: insertDvd,
  Furniture: insertFurniture,
  Book: insertBook,
  "": clearOptions,
};
// Decide what markup to generate based on product type

// Generate markup for the various Product types in the add product form
function insertDvd() {
  const parent = document.getElementById("typeswitcher");

  //fieldset legend
  const legend = document.createElement("legend");
  legend.innerHTML = "Please provide the size of the DVD in MBs";

  const dvdSize = document.createElement("input");
  const dvdSizeLabel = document.createElement("label");
  dvdSizeLabel.setAttribute("for", "size");
  dvdSizeLabel.innerHTML = "Size (MB)";
  dvdSize.type = "number";
  dvdSize.id = "size";
  dvdSize.name = "size";
  dvdSize.setAttribute("required", true);
  dvdSize.setAttribute("min", "1");
  parent.appendChild(legend);
  parent.appendChild(dvdSizeLabel);
  parent.appendChild(dvdSize);
}

function insertFurniture() {
  const parent = document.getElementById("typeswitcher");

  //fieldset legend
  const legend = document.createElement("legend");
  legend.innerHTML = "Please provide dimensions in H x W x L format";

  //furniture height
  const furnitureHeight = document.createElement("input");
  const furnitureHeightLabel = document.createElement("label");
  furnitureHeightLabel.setAttribute("for", "height");
  furnitureHeightLabel.innerHTML = "Height (CM)";
  furnitureHeight.type = "number";
  furnitureHeight.id = "height";
  furnitureHeight.name = "height";
  furnitureHeight.setAttribute("required", true);
  furnitureHeight.setAttribute("min", "1");
  parent.appendChild(legend);
  parent.appendChild(furnitureHeightLabel);
  parent.appendChild(furnitureHeight);

  //furniture width
  const furnitureWidth = document.createElement("input");
  const furnitureWidthLabel = document.createElement("label");
  furnitureWidthLabel.setAttribute("for", "width");
  furnitureWidthLabel.innerHTML = "Width (CM)";
  furnitureWidth.type = "number";
  furnitureWidth.id = "width";
  furnitureWidth.name = "width";
  furnitureWidth.setAttribute("required", true);
  furnitureWidth.setAttribute("min", "1");
  parent.appendChild(furnitureWidthLabel);
  parent.appendChild(furnitureWidth);

  //furniture length
  const furnitureLength = document.createElement("input");
  const furnitureLengthLabel = document.createElement("label");
  furnitureLengthLabel.setAttribute("for", "length");
  furnitureLengthLabel.innerHTML = "Length (CM)";
  furnitureLength.type = "number";
  furnitureLength.id = "length";
  furnitureLength.name = "length";
  furnitureLength.setAttribute("required", true);
  furnitureLength.setAttribute("min", "1");
  parent.appendChild(furnitureLengthLabel);
  parent.appendChild(furnitureLength);
}

function insertBook() {
  const parent = document.getElementById("typeswitcher");

  //fieldset legend
  const legend = document.createElement("legend");
  legend.innerHTML = "Please provide the weight of the book in KGs";

  const bookWeight = document.createElement("input");
  const bookWeightLabel = document.createElement("label");
  bookWeightLabel.setAttribute("for", "weight");
  bookWeightLabel.innerHTML = "Weight (KG)";
  bookWeight.type = "number";
  bookWeight.id = "weight";
  bookWeight.name = "weight";
  bookWeight.setAttribute("required", true);
  bookWeight.setAttribute("step", "0.001");
  parent.appendChild(legend);
  parent.appendChild(bookWeightLabel);
  parent.appendChild(bookWeight);
}

function clearOptions() {
  const parent = document.getElementById("typeswitcher");
  parent.innerHTML = "";
}
// Generate markup for the various Product types in the add product form

// handle the add product form submission
const form = document.getElementById("product_form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formDataObject = {};

  for (data of formData) {
    formDataObject[data[0]] = data[1];
  }

  postObject = handlePostObject[formDataObject["productType"]](formDataObject);

  $.ajax({
    url: "./addproduct.request.php",
    type: "POST",
    data: { values: postObject },
    success: function (data) {
      if (data) {
        console.log("navigate");
        location.href = "/";
      } else {
        console.log(data);
      }
    },
  });
});
// handle the add product form submission

// create the object to be sent in the body of the POST request on submission of the add product form
const handlePostObject = {
  DVD: dvdMeasurement,
  Furniture: furnitureMeasurements,
  Book: bookMeasurement,
};

function furnitureMeasurements(formDataObject) {
  measurement =
    formDataObject["height"] +
    " x " +
    formDataObject["width"] +
    " x " +
    formDataObject["length"];

  postObject = {
    ProductSku: formDataObject["sku"],
    ProductName: formDataObject["name"],
    ProductPrice: formDataObject["price"],
    ProductType: formDataObject["productType"],
    ProductMeasurementValues: measurement,
  };

  return postObject;
}

function dvdMeasurement(formDataObject) {
  postObject = {
    ProductSku: formDataObject["sku"],
    ProductName: formDataObject["name"],
    ProductPrice: formDataObject["price"],
    ProductType: formDataObject["productType"],
    ProductMeasurementValues: formDataObject["size"],
  };
  return postObject;
}

function bookMeasurement(formDataObject) {
  postObject = {
    ProductSku: formDataObject["sku"],
    ProductName: formDataObject["name"],
    ProductPrice: formDataObject["price"],
    ProductType: formDataObject["productType"],
    ProductMeasurementValues: formDataObject["weight"],
  };

  return postObject;
}
// create the object to be sent in the body of the POST request on submission of the add product form
