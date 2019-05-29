-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2019 a las 18:32:50
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tfidoctor`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentariosexamenes`
--

CREATE TABLE `comentariosexamenes` (
  `id` int(6) NOT NULL,
  `folio` int(11) NOT NULL,
  `comentario` varchar(100) NOT NULL,
  `fecha` varchar(10) DEFAULT NULL,
  `doctor` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultas`
--

CREATE TABLE `consultas` (
  `id_con` int(6) NOT NULL,
  `nombre` varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` int(120) NOT NULL,
  `consultorio` int(10) NOT NULL,
  `estudios` varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `doctor` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `consultas`
--

INSERT INTO `consultas` (`id_con`, `nombre`, `fecha`, `hora`, `telefono`, `consultorio`, `estudios`, `doctor`) VALUES
(2, 'Javier', '2019-05-30', '09:35', 2147483647, 9, 'Ninguno', 'jhernandez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctores`
--

CREATE TABLE `doctores` (
  `Id_D` int(6) NOT NULL,
  `Usua_D` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Pass` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `doctores`
--

INSERT INTO `doctores` (`Id_D`, `Usua_D`, `Pass`) VALUES
(1, 'jhernandez', '12345'),
(2, 'pguerrero', '12345'),
(3, 'azarraga', '12345');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examenes_m`
--

CREATE TABLE `examenes_m` (
  `Id_E` int(6) NOT NULL,
  `Id_P` int(6) NOT NULL,
  `Nom_E` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Nom_P` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha_e` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Comentarios_e` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `status` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `doctor` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `examenes_m`
--

INSERT INTO `examenes_m` (`Id_E`, `Id_P`, `Nom_E`, `Nom_P`, `Fecha_e`, `Comentarios_e`, `status`, `doctor`) VALUES
(1, 1, 'colonoscopia', 'Andres', '22/03/2019', 'Estudio Realizado', 'Entregado', 'jhernandez'),
(2, 2, 'Diabetes', 'Ernesto', '19/05/2019', 'Se muestra con normalidad', 'Entregado', 'azarraga'),
(3, 1, 'Acido Urico', 'Andres', '15/04/2019', 'Controlar el comer carnes rojas', 'Pendiente', 'jhernandez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `Id_His` int(6) NOT NULL,
  `Id_P` int(6) NOT NULL,
  `Fecha` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Comentarios` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `doctor` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`Id_His`, `Id_P`, `Fecha`, `Comentarios`, `doctor`) VALUES
(1, 1, '07/05/2019', 'Se realizo un estudio de sangre los resultados fueron positivos', 'jhernandez'),
(2, 2, '19/06/2018', 'Sigue en tratamiento con medicamento', 'azarraga'),
(7, 2, '2019-05-29', 'Aun sigue en tratamiento', 'azarraga'),
(8, 3, '2019-05-29', 'Padece de un desorden alimenticio', 'jhernandez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `Id_P` int(6) NOT NULL,
  `Nom_P` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Ape_P` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Edad` int(50) NOT NULL,
  `Domicilio` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Telefono` int(50) NOT NULL,
  `Correo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `T_Sangre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Alergia` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Habi_con` int(6) NOT NULL,
  `Nom_E` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Diagnostico` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `doctor` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`Id_P`, `Nom_P`, `Ape_P`, `Edad`, `Domicilio`, `Telefono`, `Correo`, `T_Sangre`, `Alergia`, `Habi_con`, `Nom_E`, `Diagnostico`, `Fecha`, `Hora`, `doctor`) VALUES
(1, 'Andres', 'Vazquez', 33, 'Guanajuato', 2147483106, 'andres@itotal.com', 'O', 'Ninguna', 1, 'Colonoscopia', 'Asma', '2019-05-06', '10:00', 'jhernandez'),
(2, 'Ernesto', 'Mujia', 23, 'Hidalgo', 2147483119, 'ernesto.alonso@itotal.com', 'ONH', 'Perros', 3, 'ETS', 'Anemia', '2019-05-27', '12:00', 'azarraga'),
(3, 'Pedro', 'Herrera', 23, 'San Pablo', 2147483647, 'pedro@hotmail.com', 'HO+', 'Ninguna', 10, 'Hepatitis', 'Desgaste de energia', '2019-04-19', '14:55', 'jhernandez');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentariosexamenes`
--
ALTER TABLE `comentariosexamenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `consultas`
--
ALTER TABLE `consultas`
  ADD PRIMARY KEY (`id_con`);

--
-- Indices de la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD PRIMARY KEY (`Id_D`);

--
-- Indices de la tabla `examenes_m`
--
ALTER TABLE `examenes_m`
  ADD PRIMARY KEY (`Id_E`);

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`Id_His`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`Id_P`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentariosexamenes`
--
ALTER TABLE `comentariosexamenes`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `consultas`
--
ALTER TABLE `consultas`
  MODIFY `id_con` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `doctores`
--
ALTER TABLE `doctores`
  MODIFY `Id_D` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `examenes_m`
--
ALTER TABLE `examenes_m`
  MODIFY `Id_E` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `Id_His` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `Id_P` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
