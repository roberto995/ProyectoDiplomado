<?php 
	session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="utf-8">
<link rel="stylesheet" href="./CSS/login.css">
    <title>Iniciar Sesion</title>
</head>
<body>
    <form action="../PHP/login.php" method="GET">
    <center>
        <div class="ini">
        <div class="d1">
                <h2 class="uaq"> <img src="nuevo.png" style="width:15px;height:15px">iDoctor</h2>
                <p class="inst">Para utilizar el sistema utiliza tus datos de usuario para iniciar sesión, si tienes problemas contacta a soporte</p>
        </div >
        <input type="text" class="nombre" name="nombre" placeholder="Usuario"><br><br>
        <input type="password" class="password" name="password" placeholder="Password"><br><br>
        <input type="submit" class="btnIngresar" value="Iniciar Sesión" name="Ingresar">
        </div>
    </center>
    </form>
 
    <?php
	if (isset($_GET['Ingresar'])) {
        $nombre = $_GET['nombre'];
        $password = $_GET['password'];
        $_SESSION['u'] = $nombre;
 
		$conexion = new mysqli('localhost','root','','tfidoctor');

		$busqueda = "SELECT * FROM doctores 
					WHERE usua_d = '$nombre' and pass = '$password'";
        $resultado = mysqli_query($conexion, $busqueda);

        $filas = mysqli_num_rows($resultado);

        if ($filas>0) {
            header('Location: ../PHP/idoctor.php');
        }else{
            ?>
            <script>
            alert("Error de autentificacion");
            </script>
            <?php
        }
        mysqli_free_result($resultado);
        mysqli_close($conexion);
		?>
		
        <?php
         
	    }
		?>

</body>
</html>