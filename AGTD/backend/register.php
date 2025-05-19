<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require('conexion.php');

$data = json_decode(file_get_contents("php://input"), true);

if(!isset($data["correo"]) || !isset($data["contrasena"])){
    echo json_encode([
        "success" => false,
        "message" => "Faltan datos de usuario y/o contrasena"
    ]);
    exit;
}

$nombre = $data["nombre"];
$correo = strtolower($data["correo"]);
$contrasena = $data["contrasena"];

$chekCorreo = "SELECT id FROM usuarios WHERE correo = ?";
$chek_stmt = $conn -> prepare($chekCorreo);
$chek_stmt->bind_param("s", $correo);
$chek_stmt->execute();
$chek_stmt->store_result();

if($chek_stmt->num_rows > 0){
    echo json_encode([
        "success" => false,
        "message" => "¡El correo '${correo}', ya está registrado!"
    ]);
    $chek_stmt->close();
    $conn->close();
    exit;
}

$chek_stmt->close();

$stmt = $conn -> prepare("INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)");
$contrasena_hash = password_hash($contrasena, PASSWORD_BCRYPT);
$stmt -> bind_param("sss", $nombre, $correo, $contrasena_hash);

if($stmt->execute()){
    echo json_encode([
        "success" => true,
        "message" => "Usuario registrado correctamente"
    ]);
}else{
    echo json_encode([
        "success" => false,
        "message" => "¡Error al registrar usuario!"
    ]);
}

$stmt->close();
$conn->close();
?>