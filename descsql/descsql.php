<?php

// Configuración de la conexión a la base de datos MySQL
$servername = "localhost";
$username = "admin";
$password = "admin2023";
$dbname = "covellone";

// Nombre de la tabla de la que deseas obtener la estructura
$nombreTabla = "empresa";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta para obtener la estructura de la tabla
$sql = "DESC $nombreTabla";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Crear el archivo CSV
    $archivo_csv = fopen("estructura_tabla.csv", "w");

    // Escribir encabezados
    $columnas = array();
    while ($row = $result->fetch_assoc()) {
        $columnas[] = $row["Field"];
    }
    fputcsv($archivo_csv, $columnas);

    fclose($archivo_csv);
    echo "Estructura de la tabla guardada en estructura_tabla.csv";
} else {
    echo "No se encontraron resultados";
}

// Cerrar conexión
$conn->close();

?>
