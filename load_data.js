$(document).ready(function () {
  // get all products from db
  $.ajax({
    url: "./getproducts.php",
    success: function (data) {
      if (data.length > 0) {
        var displayProducts = processProducts(JSON.parse(data));
        $("#productlist").append(displayProducts);
      }
    },
  });

  //mass delete logic
  const massDeleteBtn = document.getElementById("mass-delete");

  massDeleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const values = [];
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.id);

      //this removes the product from the page
      checkbox.parentElement.remove();
    });

    // request to delete the products from the db
    $.ajax({
      url: "./deleteproducts.php",
      type: "POST",
      data: { values: values },
      success: function (data) {
        console.log(data);
      },
    });
  });
});

//create HTML elements from the product object obtained from db
function processProducts(data) {
  const parent = document.getElementById("productlist");

  if (Array.isArray(data)) {
    data.map((product) => {
      // create product div
      const product_div = document.createElement("div");
      product_div.className = "product-card";
      product_div.innerHTML = `${product["ProductSKU"]} ${product["ProductName"]}`;

      //create checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = product["ID"];
      checkbox.className = "delete-checkbox";
      product_div.appendChild(checkbox);
      parent.appendChild(product_div);
    });
  }
}
