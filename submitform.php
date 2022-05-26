<?php

include_once './classes/test.class.php';
include_once './classes/dbh.class.php';

$sku = array_key_exists('sku', $_POST) ? $_POST['sku'] : "";

echo $sku; 

// <?php

// include_once './classes/test.class.php';
// include_once './classes/dbh.class.php';

// $first_name = array_key_exists('first_name', $_POST) ? $_POST['first_name'] : "";
// $last_name = array_key_exists('last_name', $_POST) ? $_POST['last_name'] : "";


// echo $first_name; 
// echo $last_name; 

// $insertUser = new Test();
// $insertUser->setNewUser($first_name, $last_name);

// $environment = getenv("ENVIRONMENT");

// if ($environment == "development"){
//     header('Location:/productlist/');
// } elseif ($environment == "production") {
//     header('Location:/');
// }
