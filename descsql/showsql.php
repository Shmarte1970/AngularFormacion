<?php

// Configuración de la conexión a la base de datos MySQL
$servername = "localhost";
$username = "admin";
$password = "admin2023";
$dbname = "covellone";

// Nombre de la tabla de la que deseas obtener la información de las columnas
$nombreTabla = "empresa";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta para obtener la información de las columnas de la tabla
$sql = "SHOW COLUMNS FROM $nombreTabla";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Crear el archivo CSV
    $archivo_csv = fopen("$nombreTabla.csv", "w");

    // Escribir encabezados en el archivo CSV
    fputcsv($archivo_csv, array('Field', '', 'Type'));

    // Escribir filas con información de las columnas
    while ($row = $result->fetch_assoc()) {
        fputcsv($archivo_csv, array($row["Field"], '', $row["Type"]));
    }

    fclose($archivo_csv);
    echo "Información de las columnas de la tabla guardada en $nombreTabla.csv";
} else {
    echo "No se encontraron resultados para la tabla $nombreTabla";
}

// Cerrar conexión
$conn->close();

?>

