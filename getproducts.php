<?php

include_once './classes/test.class.php';

$users = new Test();
$results = $users->getAllUsers();

echo json_encode($results);

?>