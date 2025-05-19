<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'conexion.php';

ini_set('display_errors', 0);
error_reporting(0);

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["correo"]) || !isset($data["contrasena"])) {
    echo json_encode([
        "success" => false,
        "message" => "Faltan datos de usuario y/o contraseña"
    ]);
    exit;
}


$identificador = $data["correo"];
$contrasena = $data["contrasena"];

$stmt = $conn -> prepare("SELECT id, nombre, apellidos, correo, contrasena FROM usuarios WHERE correo = ? OR celular = ?");
$stmt->bind_param("ss", $identificador, $identificador);
$stmt->execute();
$result = $stmt->get_result();

if( $result->num_rows === 1){
    $usuario = $result->fetch_assoc();
    if (password_verify ($contrasena, $usuario['contrasena'])) {
        echo json_encode([
            'success' => true,
            'usuario' => [
                'id' => $usuario['id'],
                'nombre' => $usuario['nombre'],
                'correo' => $usuario['correo']
            ]
        ]);
    }else {
        echo json_encode([
            "success" => false,
            "message" => "usuario y/o contraseña incorrecto "
        ]);
    }
}else {
    echo json_encode([
        "success" => false,
        "message" => "usuario y/o contraseña incorrecto "
    ]);
}
$stmt->close();
$conn->close();
?>