<?php

include_once './classes/product.class.php';

$products = new Product();
$results = $products->setProduct($_REQUEST["values"]["ProductSku"], $_REQUEST["values"]["ProductName"], $_REQUEST["values"]["ProductPrice"], $_REQUEST["values"]["ProductType"], $_REQUEST["values"]["ProductMeasurementValues"]);

echo json_encode($results);
