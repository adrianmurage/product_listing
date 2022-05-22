<?php

include_once './classes/dbh.class.php';

class Test extends Dbh
{
    public function getAllUsers()
    {
        $query = "SELECT FirstName, LastName FROM test_table";
        $result = $this->connect()->query($query);

        $rows = array();
        while ($row = $result->fetch()) {
            $rows[] = $row;
        }
        return $rows;
    }

    public function setNewUser($firstName, $lastName){
        $query = "INSERT INTO test_table(FirstName, LastName) VALUES(?, ?)";
        $statement = $this->connect()->prepare($query);
        $statement->execute([$firstName, $lastName]);

    }
}

