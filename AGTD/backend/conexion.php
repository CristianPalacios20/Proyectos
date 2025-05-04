<?php
//Api conexión
$servername = "127.0.0.1";
$port       = "3306";
$username   = "root";
$password   = "2008";
$dbname     = "portafolio_csp";

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    echo json_encode([
        'success' => false,
        'message' => 'Error en la conexión a MySQL en Google Cloud'
    ]);
    exit;
}
$conn->set_charset("utf8mb4");
?>