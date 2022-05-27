<?php

include_once './classes/product.class.php';

// $sku = array_key_exists('sku', $_POST) ? $_POST['sku'] : "";

// {
//     "ProductSku": "DI2983HS9",
//     "ProductName": "Chair",
//     "ProductPrice": "10",
//     "ProductType": "Furniture",
//     "ProductMeasurementValue": "10 x 30 x 40"
// }
$products = new Product();
$results = $products->setProduct($_REQUEST["values"]["ProductSku"], $_REQUEST["values"]["ProductName"], $_REQUEST["values"]["ProductPrice"], $_REQUEST["values"]["ProductType"], $_REQUEST["values"]["ProductMeasurementValues"]);

echo json_encode($results); 

// $environment = getenv("ENVIRONMENT");

// if ($environment == "development"){
//     header('Location:/productlist/');
// } elseif ($environment == "production") {
//     header('Location:/');
// }
