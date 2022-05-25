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
            <p>
                <label for="firstName">First Name:</label>
                <input type="text" name="first_name" id="firstName">
            </p>
            <p>
                <label for="lastName">Type Switcher</label>
                <input type="text" name="last_name" id="lastName">
            </p>
            <label for="productType">Type Switcher:</label>
            <select name="productType" id="productType">
                <option value="" id="none">--Please choose an option--</option>
                <option value="DVD" id="DVD">DVD</option>
                <option value="Furniture" id="Furniture">Furniture</option>
                <option value="Book" id="Book">Book</option>
            </select>
            <fieldset id="DVD-fieldset">
                <label for="name">Name (4 to 8 characters):</label>
                <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10">
            </fieldset>
            <fieldset id="Furniture-fieldset">
                <label for="name">OtherName (4 to 8 characters):</label>
                <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10">
            </fieldset>
            <fieldset id="Book-fieldset">
                <label for="name">FinalName (4 to 8 characters):</label>
                <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10">
            </fieldset>
            <input type="submit" value="Submit">
        </form>
    </center>
</body>

</html>