$(document).ready(function () {
  // get all products from db when the page fully loads
  $.ajax({
    url: "./getproducts.request.php",
    success: function (data) {
      if (data.length > 0) {
        var displayProducts = processProducts(JSON.parse(data));
        $("#productlist").append(displayProducts);
      }
    },
  });
  // get all products from db when the page fully loads
});

//logic for the mass delete button
const massDeleteBtn = document.getElementById("mass-delete");

massDeleteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  const values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.id);
  });

  function removeFromDOM() {
    checkboxes.forEach((checkbox) => {
      checkbox.parentElement.remove();
    });
  }

  $.ajax({
    url: "./deleteproducts.request.php",
    type: "POST",
    data: { values: values },
    success: function (data) {
      console.log(data);
      removeFromDOM();
    },
  });
});
//logic for the mass delete button

//create HTML elements from the product object obtained from db
function processProducts(data) {
  const parent = document.getElementById("productlist");

  if (Array.isArray(data)) {
    data.map((product) => {
      // create product div
      const product_div = document.createElement("div");
      product_div.className = "product_card";
      const p_sku = document.createElement("p");
      p_sku.innerHTML = product["ProductSKU"];
      const p_prodname = document.createElement("p");
      p_prodname.innerHTML = product["ProductName"];
      const p_price = document.createElement("p");
      p_price.innerHTML = `${product["ProductPrice"]} $`;
      const p_dimensions = document.createElement("p");

      if (product["ProductType"] == "DVD") {
        p_dimensions.innerHTML = `Size: ${product["ProductMeasurementValues"]} MB`;
      } else if (product["ProductType"] == "Book") {
        p_dimensions.innerHTML = `Weight: ${product["ProductMeasurementValues"]} KG`;
      } else {
        p_dimensions.innerHTML = `Dimensions: ${product["ProductMeasurementValues"]}`;
      }

      //create checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = product["ID"];
      checkbox.className = "delete-checkbox";

      product_div.appendChild(checkbox);
      product_div.appendChild(p_sku);
      product_div.appendChild(p_prodname);
      product_div.appendChild(p_price);
      product_div.appendChild(p_dimensions);
      parent.appendChild(product_div);
    });
  }
}
//create HTML elements from the product object obtained from db
