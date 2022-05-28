<?php

include_once './classes/product.class.php';

$products = new Product();
$results = $products->getAllProducts();

echo json_encode($results);
