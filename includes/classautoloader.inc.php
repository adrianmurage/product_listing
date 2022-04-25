<?php

spl_autoload_register('autoLoader');
define('BASEURL', $_SERVER['DOCUMENT_ROOT']); 



function autoLoader($className)
{
    $url = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

    if (strpos($url, 'includes') !== false) {
        $path = BASEURL . '../classes/';
    } else {

        $path = BASEURL . "classes/";
    }
    $extension = ".class.php";


    $fullPath = $path . $className . $extension;

    if (!file_exists($fullPath)) {
        return false;
    }

    include_once $fullPath;
}
