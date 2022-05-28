<?php

include_once './classes/product.class.php';

$products = new Product();
$results = $products->deleteProducts($_REQUEST["values"]);

echo json_encode($results);
