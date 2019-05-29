<?php 
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>iDoctor</title>
    <link rel="stylesheet" href="../CSS/estilos.css">
    <script src="../JS/MisPacientes.js"></script>
    <script src="../JS/MisConsultas.js"></script>
    <script src="../JS/MisExamenes.js"></script>
</head>
<body> 
    <nav>
            <div class="d1">
                <h2>iDoctor <h4>(v 0.1)</h4></h2>
            </div>
            <div class="d2">
                <div class="imagenes2">
                    <img src="../Pictures/flecha.png"/>
                    <img src="../Pictures/doctor.png" width="30" height="30"/>            
                </div>
            </div>
            <div class="d3">
            <h2>este es el perfil de <?php echo $_SESSION['u'] ?></h2>
            </div>
            </nav> 
            <div class="d4">
            <input class="buscador" type="search" placeholder="Buscar"></input>
            </div>
    <!-- 833-310-404 --> 
    <div class="d5">
        <ul>
            <li onclick="pacientes()"><a>Mis pacientes</a></li>
            <li onclick="consultas()"><a>Mis consultas</a></li>
            <li onclick="examenes()"><a>Examen Médicos</a></li>
          </ul>
    </div>

    <div class="titulo" id="titulo"></div>
    <div class="imagenes">Vista
    <img src="../Pictures/list.png"/>
    <img src="../Pictures/menu.png"/>
    </div> 

    <div class="contenedor" id="contenedor"></div>
    <div class="grid-container2" id="grid-container2"></div>
    <div class="grid-container3" id="grid-container3"></div>

</body>
</html>
