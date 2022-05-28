<?php
include_once "./classes/route.class.php";
include_once "./classes/dbh.class.php";

/**
 * -----------------------------------------------
 * PHP Route Things
 * -----------------------------------------------
 */

//define your route. This is main page route. for example www.example.com
Route::add('/', function () {

    //define which page you want to display while user hit main page. 
    include('productlist.php');
});

// route for /add-product
Route::add('/add-product', function () {
    include('addproduct.php');
});

//method for execution routes    
Route::submit();
