<?php

include_once './classes/dbh.class.php';

class Test extends Dbh
{
    public function getAllUsers()
    {
        $query = "SELECT FirstName, LastName FROM test_table";
        $statement = $this->connect()->query($query);
        while ($row = $statement->fetch()) {
            echo $row['FirstName'] . ' | ' . $row['LastName'] .  '<br>';
        }
    }

    public function setNewUser($firstName, $lastName){
        $query = "INSERT INTO test_table(FirstName, LastName) VALUES(?, ?)";
        $statement = $this->connect()->prepare($query);
        $statement->execute([$firstName, $lastName]);

    }
}

