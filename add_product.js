$(document).ready(function () {
  const form = document.getElementById("product_form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    const formDataObject = {};
    for (data of formData) {
      formDataObject[data[0]] = data[1];
    }

    // console.log(handlePostObject[formDataObject["productType"]])
    postObject =
      handlePostObject[formDataObject["productType"]](formDataObject);

    console.log(postObject);

    $.ajax({
      url: "./submitform.php",
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

  // TODO: add a way to create the final product object that gets sent to the db
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

  //fieldset legend
  const legend = document.createElement("legend");
  legend.innerHTML = "Please provide the size of the DVD in MBs";

  const dvdSize = document.createElement("input");
  const dvdSizeLabel = document.createElement("label");
  dvdSizeLabel.setAttribute("for", "size");
  dvdSizeLabel.innerHTML = "Size (MB)";
  dvdSize.type = "input";
  dvdSize.id = "size";
  dvdSize.name = "size";
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
  furnitureHeight.type = "input";
  furnitureHeight.id = "height";
  furnitureHeight.name = "height";
  parent.appendChild(legend);
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

  //fieldset legend
  const legend = document.createElement("legend");
  legend.innerHTML = "Please provide the weight of the book in KGs";

  const bookWeight = document.createElement("input");
  const bookWeightLabel = document.createElement("label");
  bookWeightLabel.setAttribute("for", "weight");
  bookWeightLabel.innerHTML = "Weight (KG)";
  bookWeight.type = "input";
  bookWeight.id = "weight";
  bookWeight.name = "weight";
  parent.appendChild(legend);
  parent.appendChild(bookWeightLabel);
  parent.appendChild(bookWeight);
}

function clearOptions() {
  const parent = document.getElementById("typeswitcher");
  parent.innerHTML = "";
}
