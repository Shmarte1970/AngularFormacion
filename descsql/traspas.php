<?php
// Parámetros de conexión a la base de datos
$servername = "localhost";
$username = "admin";
$password = "admin2023";
$dbname = "pruebasnucleares";

// Detalles de las tablas y campos
$tabla_receptor = "zcempresa";
$tabla_emisora = "email";
$campo_temporal = "temporal";
$campo_receptor = "emailEmpresa";
$campo_emisor = "email";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    echo "Fallo de conexión: " . $conn->connect_error . "\n";
} else {
    echo "Conexión realizada con éxito\n";
    
    // Verificar si el campo temporal existe en la tabla receptora
    $sql_check_field = "SHOW COLUMNS FROM $tabla_receptor LIKE '$campo_temporal'";
    $result_check_field = $conn->query($sql_check_field);

    if ($result_check_field->num_rows == 0) {
        // Crear el campo temporal si no existe
        $sql_create_field = "ALTER TABLE $tabla_receptor ADD COLUMN $campo_temporal INT(11)";
        if ($conn->query($sql_create_field) === true) {
            echo "Campo temporal '$campo_temporal' creado en la tabla '$tabla_receptor'\n";
        } else {
            echo "Error al crear campo temporal: " . $conn->error . "\n";
        }
    }
    
    // Actualizar el campo temporal con valores secuenciales del 1 al total de registros
    $sql_update_temporal = "SET @row_number := 0";
    if ($conn->query($sql_update_temporal) === true) {
        echo "Campo temporal inicializado con éxito\n";
        
        $sql_update_temporal_values = "UPDATE $tabla_receptor SET $campo_temporal = (@row_number:=@row_number + 1)";
        if ($conn->query($sql_update_temporal_values) === true) {
            echo "Campo temporal actualizado con éxito\n";
            
            // Actualizar el campo emailEmpresa con los valores de la tabla email usando el campo temporal como coincidencia
            $sql_update_emailEmpresa = "UPDATE $tabla_receptor, $tabla_emisora
                                        SET $tabla_receptor.$campo_receptor = $tabla_emisora.$campo_emisor
                                        WHERE $tabla_receptor.$campo_temporal = $tabla_emisora.id";
            if ($conn->query($sql_update_emailEmpresa) === true) {
                echo "¿El campo $campo_receptor se ha actualizado correctamente? (s/n): ";
                $respuesta = strtolower(trim(fgets(STDIN)));
                if ($respuesta === 's') {
                    echo "¿Desea borrar el campo $campo_temporal de $tabla_receptor? (s/n): ";
                    $borrar_temporal = strtolower(trim(fgets(STDIN)));
                    if ($borrar_temporal === 's') {
                        // Borrar el campo temporal si el usuario lo confirma
                        $sql_drop_field = "ALTER TABLE $tabla_receptor DROP COLUMN $campo_temporal";
                        if ($conn->query($sql_drop_field) === true) {
                            echo "Campo temporal eliminado con éxito\n";
                            
                            // Mostrar las columnas de la tabla zcempresa después de eliminar el campo temporal
                            $sql_show_columns = "SHOW COLUMNS FROM $tabla_receptor";
                            $result_show_columns = $conn->query($sql_show_columns);
                            if ($result_show_columns->num_rows > 0) {
                                echo "Columnas de la tabla $tabla_receptor después de eliminar el campo $campo_temporal:\n";
                                while ($row = $result_show_columns->fetch_assoc()) {
                                    echo $row["Field"] . "\n";
                                }
                            } else {
                                echo "No se encontraron columnas en la tabla $tabla_receptor\n";
                            }
                        } else {
                            echo "Error al eliminar campo temporal: " . $conn->error . "\n";
                        }
                    }
                } else {
                    echo "Operación finalizada\n";
                }
            } else {
                echo "Error al actualizar el campo $campo_receptor: " . $conn->error . "\n";
            }
        } else {
            echo "Error al actualizar el campo temporal: " . $conn->error . "\n";
        }
    } else {
        echo "Error al inicializar el campo temporal: " . $conn->error . "\n";
    }
}

// Cerrar conexión
$conn->close();
?>


