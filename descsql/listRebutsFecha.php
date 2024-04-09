<?php

// Configuración de la conexión a la base de datos MySQL
$servername = "localhost";
$username = "admin";
$password = "admin2023";
$dbname = "rebuts";

// Nombre de la tabla de la que deseas obtener la información
$nombreTabla = "rebut";

// Nombre del archivo CSV
$archivo_csv = "listado_$nombreTabla.csv";

// Fecha mínima para el filtro
$fecha_minima = "2024-03-25";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta para obtener todas las filas y columnas de la tabla que tengan la fecha mayor a la fecha mínima
$sql = "SELECT * FROM $nombreTabla WHERE data > '$fecha_minima'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Crear el archivo CSV
    $archivo = fopen($archivo_csv, "w");

    // Escribir filas en el archivo CSV
    while ($row = $result->fetch_assoc()) {
        $fila = array_values($row);
        fputcsv($archivo, $fila);

        // Añadir una línea en blanco después de cada registro
        fwrite($archivo, "\n");
    }

    // Obtener la cantidad de registros
    $cantidad_registros = $result->num_rows;

    // Escribir la cantidad de registros al final del archivo CSV
    fwrite($archivo, "Cantidad de registros: $cantidad_registros\n");

    fclose($archivo);
    echo "Listado de filas y columnas de la tabla $nombreTabla con fecha mayor a $fecha_minima guardado en $archivo_csv";
} else {
    echo "No se encontraron resultados para la tabla $nombreTabla con fecha mayor a $fecha_minima";
}

// Cerrar conexión
$conn->close();

?>

