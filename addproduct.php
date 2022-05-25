<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="./add_product.js"></script>
    <title>Add Product</title>
</head>

<body>
    <center>
        <h1>Storing Form data in Database</h1>
        <form action="./submitform.php" method="post">
            <label for="sku">SKU:</label>
            <input type="text" id="sku">
            <br>
            <label for="name">Name</label>
            <input type="text" id="name">
            <br>
            <label for="price">Price ($)</label>
            <input type="text" id="price">
            <br>
            <label for="productType">Type Switcher:</label>
            <select name="productType" id="productType">
                <option value="None" id="none">--Please choose an option--</option>
                <option value="DVD" id="DVD">DVD</option>
                <option value="Furniture" id="Furniture">Furniture</option>
                <option value="Book" id="Book">Book</option>
            </select>

            <fieldset id="typeswitcher"></fieldset>
            <input type="submit" value="Submit">
        </form>
    </center>
</body>

</html>