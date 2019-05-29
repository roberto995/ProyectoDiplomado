-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2019 a las 05:15:31
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
-- Estructura de tabla para la tabla `consultas`
--

CREATE TABLE `consultas` (
  `id_con` int(6) NOT NULL,
  `nombre` varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` int(120) NOT NULL,
  `consultorio` int(10) NOT NULL,
  `estudios` varchar(80) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `consultas`
--

INSERT INTO `consultas` (`id_con`, `nombre`, `fecha`, `hora`, `telefono`, `consultorio`, `estudios`) VALUES
(1, 'Javier', '2019-05-23', '20:34', 1231231231, 8, 'Ninguno');

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
  `status` varchar(10) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `examenes_m`
--

INSERT INTO `examenes_m` (`Id_E`, `Id_P`, `Nom_E`, `Nom_P`, `Fecha_e`, `Comentarios_e`, `status`) VALUES
(1, 1, 'colonoscopia', 'Andres', '22/03/2019', 'Estudio Realizado', 'Entregado'),
(2, 2, 'Diabetes', 'Ernesto', '19/05/2019', 'Se muestra con normalidad', 'Entregado'),
(3, 1, 'Acido Urico', 'Andres', '15/04/2019', 'Controlar el comer carnes rojas', 'Pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `Id_His` int(6) NOT NULL,
  `Id_P` int(6) NOT NULL,
  `Fecha` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Comentarios` varchar(80) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`Id_His`, `Id_P`, `Fecha`, `Comentarios`) VALUES
(1, 1, '07/05/2019', 'Se realizo un estudio de sangre los resultados fueron positivos'),
(2, 2, '19/06/2018', 'Sigue en tratamiento con medicamento'),
(3, 1, '30/05/2019', 'Se encuentra con dolor abdominal necesita reposo'),
(7, 2, '2019-05-29', 'no mms'),
(8, 2, '2019-05-29', 'ya casi');

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
  `Hora` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`Id_P`, `Nom_P`, `Ape_P`, `Edad`, `Domicilio`, `Telefono`, `Correo`, `T_Sangre`, `Alergia`, `Habi_con`, `Nom_E`, `Diagnostico`, `Fecha`, `Hora`) VALUES
(1, 'Andres', 'Vazquez', 33, 'Guanajuato', 2147483106, 'andres@itotal.com', 'O', 'Ninguna', 1, 'Colonoscopia', 'Asma', '2019-05-06', '10:00'),
(2, 'Ernesto', 'Mujia', 23, 'Hidalgo', 2147483119, 'ernesto.alonso@itotal.com', 'ONH', 'Perros', 3, 'ETS', 'Anemia', '2019-05-27', '12:00');

--
-- Índices para tablas volcadas
--

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
-- AUTO_INCREMENT de la tabla `consultas`
--
ALTER TABLE `consultas`
  MODIFY `id_con` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `Id_His` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `Id_P` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
