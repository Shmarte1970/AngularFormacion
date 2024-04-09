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

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta para obtener todas las filas y columnas de la tabla
$sql = "SELECT * FROM $nombreTabla";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Crear el archivo CSV
    $archivo = fopen($archivo_csv, "w");
 
    /*
    // Escribir encabezados en el archivo CSV
    $encabezados = array_keys($result->fetch_assoc());
    fputcsv($archivo, $encabezados);
     */


    // Reiniciar el puntero de los resultados
    $result->data_seek(0);

    // Escribir filas en el archivo CSV
    while ($row = $result->fetch_assoc()) {
        $fila = array_values($row);
        fputcsv($archivo, $fila);
        fwrite($archivo, "\n");
    }

    fclose($archivo);
    echo "Listado de filas y columnas de la tabla $nombreTabla guardado en $archivo_csv";
} else {
    echo "No se encontraron resultados para la tabla $nombreTabla";
}

// Cerrar conexión
$conn->close();

?>

