$(document).ready(function () {
  $.ajax({
    url: "./getproducts.php",
    success: function (data) {
      if (data.length > 0) {
        var displayUsers = processUsers(JSON.parse(data));
      }
      $("#user-data").append(displayUsers);
    },
  });
});

function processUsers(data) {
  const parent = document.getElementById("user-data");

  if (Array.isArray(data)) {
    data.map((user) => {
      const node = document.createElement("div");

      node.className = "card";
      node.innerHTML = `${user["FirstName"]} ${user["LastName"]}`;

      node.addEventListener("click", () => {
        console.log(`${user["FirstName"]} clicked`);
      });

      parent.appendChild(node);
    });
  }
  return parent;
}
