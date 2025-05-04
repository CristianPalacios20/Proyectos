<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'conexion.php';

$data = json_decode(file_get_contents("php://input"), true);

error_log("Datos recibidos: " . print_r($data, true));

if ($data === null) {
    echo json_encode([
        "success" => false,
        "message" => "No se recibieron datos válidos"
    ]);
    exit;
}

if (!isset($data["correo"]) || !isset($data["contrasena"])) {
    echo json_encode([
        "success" => false,
        "message" => "Faltan datos de usuario y/o contraseña"
    ]);
    exit;
}


$correo = $data["correo"];
$contrasena = $data["contrasena"];

$stmt = $conn -> prepare("SELECT id, nombre, apellidos, correo, contrasena FROM usuarios WHERE correo = ?");
$stmt->bind_param("s", $correo);
$stmt->execute();
$result = $stmt->get_result();

if($result->num_rows === 1){
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
    }else{
        echo json_encode([
            "success" => false,
            "message" => "Contraseña incorrecta",
        ]);
    }
}else {
    echo json_encode([
        "success" => false,
        "message" => "Usuario no encontrado"
    ]);
}
$stmt->close();
$conn->close();
?>