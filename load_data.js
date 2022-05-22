$(document).ready(function () {
  $.ajax({
    url: "./getproducts.php",
    success: function (data) {
      if (data.length > 0) {
        var displayUsers = processUsers(JSON.parse(data));
      }
      $("#user-data").html(displayUsers);
    },
  });
});

function processUsers(data) {
  let html = "";

  if (Array.isArray(data)) {
    data.map((user) => {
      html += `<div> First Name: ${user["FirstName"]} </div></br>`;
    });
  }
  return html;
}
