<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: DELETE");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json"); 

    echo json_encode([
        "correo" => "Roayasmith08@gmail.com",
        "contrasena" => "3223866819"
    ])
?>