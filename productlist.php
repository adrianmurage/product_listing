<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="./load_data.js"></script>
    <link rel="stylesheet" href="./productlist.css">
    <title>Product List</title>
</head>

<body>
    <section class="header">
        <h1 class="page_heading">Product List</h1>
        <button class="massdelete_btn" id="mass-delete">MASS DELETE</button>
        <input class="addproduct_btn" form="add_product"  type="submit" value="ADD">
    </section>

    <hr>
    <div id="productlist">

    </div>
    <form id="add_product"method="GET" action="./addproduct.php">
    </form>
</body>

</html>