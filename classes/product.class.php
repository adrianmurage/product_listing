<?php

include_once './classes/dbh.class.php';

class Product extends Dbh
{
    public function getAllProducts()
    {
        $query = "SELECT * FROM products";
        $result = $this->connect()->query($query);

        $rows = array();
        while ($row = $result->fetch()) {
            $rows[] = $row;
        }

        return $rows;
    }

    public function deleteProducts(array $ids)
    {
        $placeholders = trim(str_repeat('?,', count($ids)), ',');
        $query = "DELETE FROM products WHERE id IN ($placeholders)";
        $statement = $this->connect()->prepare($query);
        return $statement->execute($ids);
    }
}
