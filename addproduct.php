<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="./add_product.js"></script>
    <link rel="stylesheet" href="./addproduct.css">
    <title>Add Product</title>
</head>

<body>
    <section class="header">
        <h1 class="page_heading">Product Add</h1>
        <input class="save_btn" type="submit" form="product_form" value="Save">
        <input class="cancel_btn" form="cancel" type="submit" value="Cancel">

    </section>

    <hr>
    <form id="product_form">
        <label for="sku">SKU:</label>
        <input required type="text" id="sku" name="sku">
        <br>
        <label for="name">Name:</label>
        <input required type="text" id="name" name="name">
        <br>
        <label for="price" min="1">Price ($):</label>
        <input required type="number" id="price" name="price">
        <br>
        <label for="productType">Type Switcher:</label>
        <select required name="productType" id="productType">
            <option value="" id="none">--Please choose an option--</option>
            <option value="DVD" id="DVD">DVD</option>
            <option value="Furniture" id="Furniture">Furniture</option>
            <option value="Book" id="Book">Book</option>
        </select>

        <fieldset id="typeswitcher"></fieldset>
    </form>
    <form id="cancel" method="GET" action="./productlist.php">
    </form>
</body>

</html>