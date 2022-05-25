$(document).ready(function () {
  // function to hide and disable fieldsets
  hideFieldsets();
  function hideFieldsets() {
    $("#DVD-fieldset").hide();
    $("#DVD-fieldset").prop("disabled", true);

    $("#Furniture-fieldset").hide();
    $("#Furniture-fieldset").prop("disabled", true);

    $("#Book-fieldset").hide();
    $("#Book-fieldset").prop("disabled", true);
  }

  //get the value of the select
  $("#productType").on("change", function () {
    if (this.value == "DVD") {
      hideFieldsets();
      $("#DVD-fieldset").show();
      $("#DVD-fieldset").prop("enabled", true);
    } else if (this.value == "Furniture") {
      hideFieldsets();
      $("#Furniture-fieldset").show();
      $("#Furniture-fieldset").prop("enabled", true);
    } else if (this.value == "Book") {
      hideFieldsets();
      $("#Book-fieldset").show();
      $("#Book-fieldset").prop("enabled", true);
    } else {
      hideFieldsets();
    }
  });
});
