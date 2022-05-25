<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="./load_data.js"></script>
    <title>Product List</title>
</head>

<body>
    <h1>Product List</h1>
    <form method="GET" action="./addproduct.php">
        <input type="submit" value="Add">
    </form>
    <button id="mass-delete">Mass Delete</button>
    <hr>
    <div id="productlist">

    </div>
</body>

</html>