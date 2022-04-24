<?php

class Test extends Dbh
{
    public function getUser()
    {
        $query = "SELECT * FROM test_table";
        $result = $this->connect()->query($query);
        while ($row = $result->fetch()) {
            echo $row['FirstName'] . '<br>';
        }
    }
}
