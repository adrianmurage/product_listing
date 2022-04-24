<?php

class Dbh
{
    private $cleardb_url = null;
    private $cleardb_host = null;
    private $cleardb_username = null;
    private $cleardb_password = null;
    private $cleardb_db_name = null;

    function __construct()
    {
        $this->cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
        $this->cleardb_host = $this->cleardb_url["host"];
        $this->cleardb_username = $this->cleardb_url["user"];
        $this->cleardb_password = $this->cleardb_url["pass"];
        $this->cleardb_db_name = substr($this->cleardb_url["path"], 1);
    }

    protected function connect()
    {
        $dsn = 'mysql:host=' . $this->cleardb_host . ';dbname=' . $this->cleardb_db_name;
        $pdo = new PDO($dsn, $this->cleardb_username, $this->cleardb_password);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        if (!$pdo) {
            echo "connection failed!";
        } else {
            echo "connection successful!" . '<br>';
        }
        return $pdo;
    }
}
