<?php

$cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
$cleardb_server = $cleardb_url["host"];
$cleardb_username = $cleardb_url["user"];
$cleardb_password = $cleardb_url["pass"];
$cleardb_db = substr($cleardb_url["path"], 1);
$active_group = 'default';
$query_builder = TRUE;
// Connect to DB
$conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);

if (!$conn) {
    echo "Connection falied!";
} else {
    echo 'Connection successful!' . '<br>';
};


$query = "SELECT * FROM test_table";
$result = $conn->query($query);

$rows = $result->num_rows;

for ($i = 0; $i < $rows; ++$i) {
    $result->data_seek($i);
    echo 'First Name: ' . htmlspecialchars($result->fetch_assoc()['FirstName']) . '<br>';
}

echo "hi productlist";