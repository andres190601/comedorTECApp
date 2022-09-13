USE [master]
GO
/****** Object:  Database [comedorTEC]    Script Date: 9/10/2022 11:34:50 AM ******/
CREATE DATABASE [comedorTEC]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'comedorTEC', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\comedorTEC.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'comedorTEC_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\comedorTEC_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [comedorTEC] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [comedorTEC].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [comedorTEC] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [comedorTEC] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [comedorTEC] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [comedorTEC] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [comedorTEC] SET ARITHABORT OFF 
GO
ALTER DATABASE [comedorTEC] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [comedorTEC] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [comedorTEC] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [comedorTEC] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [comedorTEC] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [comedorTEC] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [comedorTEC] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [comedorTEC] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [comedorTEC] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [comedorTEC] SET  DISABLE_BROKER 
GO
ALTER DATABASE [comedorTEC] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [comedorTEC] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [comedorTEC] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [comedorTEC] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [comedorTEC] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [comedorTEC] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [comedorTEC] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [comedorTEC] SET RECOVERY FULL 
GO
ALTER DATABASE [comedorTEC] SET  MULTI_USER 
GO
ALTER DATABASE [comedorTEC] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [comedorTEC] SET DB_CHAINING OFF 
GO
ALTER DATABASE [comedorTEC] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [comedorTEC] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [comedorTEC] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [comedorTEC] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'comedorTEC', N'ON'
GO
ALTER DATABASE [comedorTEC] SET QUERY_STORE = OFF
GO
USE [comedorTEC]
GO
/****** Object:  Table [dbo].[alimento]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[alimento](
	[id_alimento] [int] IDENTITY(1,1) NOT NULL,
	[nombre_alimento] [nchar](50) NOT NULL,
	[disponibilidad_alimento] [bit] NOT NULL,
	[id_tipo_alimento] [int] NOT NULL,
	[precio_alimento] [money] NOT NULL,
	[cantidad_alimento] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_alimento] PRIMARY KEY CLUSTERED 
(
	[id_alimento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[alimento_X_tiempo]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[alimento_X_tiempo](
	[id_alimento_X_tiempo] [int] IDENTITY(1,1) NOT NULL,
	[id_alimento] [int] NOT NULL,
	[id_tiempo] [int] NOT NULL,
	[fecha_disponibilidad] [date] NOT NULL,
 CONSTRAINT [PK_alimento_X_tiempo] PRIMARY KEY CLUSTERED 
(
	[id_alimento_X_tiempo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[catalogo_estado_compra]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[catalogo_estado_compra](
	[id_estado_compra] [int] NOT NULL,
	[nombre_estado_compra] [nchar](50) NOT NULL,
 CONSTRAINT [PK_catalogo_estado_compra] PRIMARY KEY CLUSTERED 
(
	[id_estado_compra] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[catalogo_tiempo_comida]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[catalogo_tiempo_comida](
	[id_tiempo_comida] [int] NOT NULL,
	[nombre_tiempo_comida] [nchar](50) NOT NULL,
	[hora_inicio] [time](7) NOT NULL,
	[hora_fin] [time](7) NOT NULL,
 CONSTRAINT [PK_catalogo_tiempo_comida] PRIMARY KEY CLUSTERED 
(
	[id_tiempo_comida] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[catalogo_tipo_alimento]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[catalogo_tipo_alimento](
	[id_tipo_alimento] [int] NOT NULL,
	[nombre_tipo_alimento] [nchar](50) NOT NULL,
 CONSTRAINT [PK_catalogo_tipo_alimento] PRIMARY KEY CLUSTERED 
(
	[id_tipo_alimento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[catalogo_tipo_usuario]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[catalogo_tipo_usuario](
	[nombre_tipo_usuario] [varchar](50) NOT NULL,
	[id_tipo_usuario] [int] NOT NULL,
 CONSTRAINT [PK_catalogo_tipo_usuario] PRIMARY KEY CLUSTERED 
(
	[id_tipo_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[compra]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[compra](
	[id_compra] [int] IDENTITY(1,1) NOT NULL,
	[id_cliente] [int] NOT NULL,
	[fecha_compra] [date] NOT NULL,
	[total_compra] [money] NOT NULL,
	[id_estado_compra] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_compra] PRIMARY KEY CLUSTERED 
(
	[id_compra] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[compra_X_alimento]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[compra_X_alimento](
	[id_compra_X_alimento] [int] IDENTITY(1,1) NOT NULL,
	[id_compra] [int] NOT NULL,
	[id_alimento] [int] NOT NULL,
	[cantidad] [int] NOT NULL,
	[subtotal] [money] NOT NULL,
 CONSTRAINT [PK_compra_X_alimento] PRIMARY KEY CLUSTERED 
(
	[id_compra_X_alimento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[persona]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[persona](
	[id_persona] [int] IDENTITY(1,1) NOT NULL,
	[nombre_persona] [varchar](50) NOT NULL,
	[carnet_persona] [int] NOT NULL,
	[cedula_persona] [int] NOT NULL,
	[apellido1_persona] [varchar](50) NOT NULL,
	[apellido2_persona] [varchar](50) NOT NULL,
	[edad_persona] [int] NOT NULL,
	[fecha_nacimiento_persona] [date] NOT NULL,
	[id_credenciales_persona] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_persona] PRIMARY KEY CLUSTERED 
(
	[id_persona] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[id_usuario] [int] IDENTITY(1,1) NOT NULL,
	[correo_usuario] [nvarchar](50) NOT NULL,
	[contrasenia_usuario] [varbinary](max) NOT NULL,
	[id_tipo_usuario] [int] NOT NULL,
	[activo] [bit] NOT NULL,
 CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[alimento] ON 
GO
INSERT [dbo].[alimento] ([id_alimento], [nombre_alimento], [disponibilidad_alimento], [id_tipo_alimento], [precio_alimento], [cantidad_alimento], [activo]) VALUES (1, N'Prueba                                            ', 1, 1, 35.0000, 0, 1)
GO
INSERT [dbo].[alimento] ([id_alimento], [nombre_alimento], [disponibilidad_alimento], [id_tipo_alimento], [precio_alimento], [cantidad_alimento], [activo]) VALUES (2, N'frijoles                                          ', 1, 1, 300.0000, 0, 1)
GO
SET IDENTITY_INSERT [dbo].[alimento] OFF
GO
INSERT [dbo].[catalogo_estado_compra] ([id_estado_compra], [nombre_estado_compra]) VALUES (1, N'Pendiente                                         ')
GO
INSERT [dbo].[catalogo_estado_compra] ([id_estado_compra], [nombre_estado_compra]) VALUES (2, N'Procesado                                         ')
GO
INSERT [dbo].[catalogo_estado_compra] ([id_estado_compra], [nombre_estado_compra]) VALUES (3, N'Cancelado                                         ')
GO
INSERT [dbo].[catalogo_tiempo_comida] ([id_tiempo_comida], [nombre_tiempo_comida], [hora_inicio], [hora_fin]) VALUES (1, N'Desayuno                                          ', CAST(N'08:00:00' AS Time), CAST(N'10:00:00' AS Time))
GO
INSERT [dbo].[catalogo_tiempo_comida] ([id_tiempo_comida], [nombre_tiempo_comida], [hora_inicio], [hora_fin]) VALUES (2, N'Almuerzo                                          ', CAST(N'11:00:00' AS Time), CAST(N'14:00:00' AS Time))
GO
INSERT [dbo].[catalogo_tiempo_comida] ([id_tiempo_comida], [nombre_tiempo_comida], [hora_inicio], [hora_fin]) VALUES (3, N'Merienda                                          ', CAST(N'15:00:00' AS Time), CAST(N'17:00:00' AS Time))
GO
INSERT [dbo].[catalogo_tiempo_comida] ([id_tiempo_comida], [nombre_tiempo_comida], [hora_inicio], [hora_fin]) VALUES (4, N'Cena                                              ', CAST(N'18:00:00' AS Time), CAST(N'20:00:00' AS Time))
GO
INSERT [dbo].[catalogo_tipo_alimento] ([id_tipo_alimento], [nombre_tipo_alimento]) VALUES (1, N'Plato Principal                                   ')
GO
INSERT [dbo].[catalogo_tipo_alimento] ([id_tipo_alimento], [nombre_tipo_alimento]) VALUES (2, N'Postre                                            ')
GO
INSERT [dbo].[catalogo_tipo_alimento] ([id_tipo_alimento], [nombre_tipo_alimento]) VALUES (3, N'Adicional                                         ')
GO
INSERT [dbo].[catalogo_tipo_alimento] ([id_tipo_alimento], [nombre_tipo_alimento]) VALUES (4, N'Bebida                                            ')
GO
INSERT [dbo].[catalogo_tipo_usuario] ([nombre_tipo_usuario], [id_tipo_usuario]) VALUES (N'Admin', 0)
GO
INSERT [dbo].[catalogo_tipo_usuario] ([nombre_tipo_usuario], [id_tipo_usuario]) VALUES (N'Cliente', 1)
GO
SET IDENTITY_INSERT [dbo].[compra] ON 
GO
INSERT [dbo].[compra] ([id_compra], [id_cliente], [fecha_compra], [total_compra], [id_estado_compra], [activo]) VALUES (1, 3, CAST(N'2022-09-10' AS Date), 0.0000, 2, 1)
GO
INSERT [dbo].[compra] ([id_compra], [id_cliente], [fecha_compra], [total_compra], [id_estado_compra], [activo]) VALUES (2, 3, CAST(N'2022-09-10' AS Date), 635.0000, 2, 1)
GO
SET IDENTITY_INSERT [dbo].[compra] OFF
GO
SET IDENTITY_INSERT [dbo].[compra_X_alimento] ON 
GO
INSERT [dbo].[compra_X_alimento] ([id_compra_X_alimento], [id_compra], [id_alimento], [cantidad], [subtotal]) VALUES (1, 1, 1, 3, 105.0000)
GO
INSERT [dbo].[compra_X_alimento] ([id_compra_X_alimento], [id_compra], [id_alimento], [cantidad], [subtotal]) VALUES (2, 1, 2, 2, 600.0000)
GO
INSERT [dbo].[compra_X_alimento] ([id_compra_X_alimento], [id_compra], [id_alimento], [cantidad], [subtotal]) VALUES (3, 2, 1, 1, 35.0000)
GO
INSERT [dbo].[compra_X_alimento] ([id_compra_X_alimento], [id_compra], [id_alimento], [cantidad], [subtotal]) VALUES (4, 2, 2, 2, 600.0000)
GO
SET IDENTITY_INSERT [dbo].[compra_X_alimento] OFF
GO
SET IDENTITY_INSERT [dbo].[persona] ON 
GO
INSERT [dbo].[persona] ([id_persona], [nombre_persona], [carnet_persona], [cedula_persona], [apellido1_persona], [apellido2_persona], [edad_persona], [fecha_nacimiento_persona], [id_credenciales_persona], [activo]) VALUES (3, N'Valeria', 2019248159, 118290123, N'Prado', N'Rodriguez', 20, CAST(N'2001-03-12' AS Date), 3, 0)
GO
INSERT [dbo].[persona] ([id_persona], [nombre_persona], [carnet_persona], [cedula_persona], [apellido1_persona], [apellido2_persona], [edad_persona], [fecha_nacimiento_persona], [id_credenciales_persona], [activo]) VALUES (4, N'Andres', 2020248159, 118290950, N'Valverde', N'Barrios', 21, CAST(N'2001-01-12' AS Date), 4, 1)
GO
SET IDENTITY_INSERT [dbo].[persona] OFF
GO
SET IDENTITY_INSERT [dbo].[usuario] ON 
GO
INSERT [dbo].[usuario] ([id_usuario], [correo_usuario], [contrasenia_usuario], [id_tipo_usuario], [activo]) VALUES (3, N'valeria44a@gmail.com', 0x02000F10AD5CDE6F122E489FA691DFE7276E6D9BCC0986D7BC266A8E2C66E1DB46AA5369F6870394465734169572A46040108C7D688904EE7E7CB2D8A6D35F31F3311970FF58, 1, 0)
GO
INSERT [dbo].[usuario] ([id_usuario], [correo_usuario], [contrasenia_usuario], [id_tipo_usuario], [activo]) VALUES (4, N'andres190601@gmail.com', 0x0200DD11785710E88837E91C79E657351706BCE3DADA022B1E506E2543E92AFB8289EC94A9864A60DBADB38B1E49E52B6E51E8208F96BAC3C98F004E8CC3043BE38B31A5B5CA, 1, 1)
GO
SET IDENTITY_INSERT [dbo].[usuario] OFF
GO
ALTER TABLE [dbo].[alimento] ADD  CONSTRAINT [DF_alimento_cantidad_alimento]  DEFAULT ((0)) FOR [cantidad_alimento]
GO
ALTER TABLE [dbo].[alimento] ADD  CONSTRAINT [DF_alimento_activo]  DEFAULT ((1)) FOR [activo]
GO
ALTER TABLE [dbo].[compra] ADD  CONSTRAINT [DF_compra_total_compra]  DEFAULT ((0)) FOR [total_compra]
GO
ALTER TABLE [dbo].[compra] ADD  CONSTRAINT [DF_compra_id_estado_compra]  DEFAULT ((1)) FOR [id_estado_compra]
GO
ALTER TABLE [dbo].[compra] ADD  CONSTRAINT [DF_compra_activo]  DEFAULT ((1)) FOR [activo]
GO
ALTER TABLE [dbo].[persona] ADD  CONSTRAINT [DF_persona_activo]  DEFAULT ((1)) FOR [activo]
GO
ALTER TABLE [dbo].[usuario] ADD  CONSTRAINT [DF_usuario_id_tipo_usuario]  DEFAULT ((1)) FOR [id_tipo_usuario]
GO
ALTER TABLE [dbo].[usuario] ADD  CONSTRAINT [DF_usuario_activo]  DEFAULT ((1)) FOR [activo]
GO
ALTER TABLE [dbo].[alimento]  WITH CHECK ADD FOREIGN KEY([id_tipo_alimento])
REFERENCES [dbo].[catalogo_tipo_alimento] ([id_tipo_alimento])
GO
ALTER TABLE [dbo].[alimento_X_tiempo]  WITH CHECK ADD FOREIGN KEY([id_alimento])
REFERENCES [dbo].[alimento] ([id_alimento])
GO
ALTER TABLE [dbo].[alimento_X_tiempo]  WITH CHECK ADD FOREIGN KEY([id_tiempo])
REFERENCES [dbo].[catalogo_tiempo_comida] ([id_tiempo_comida])
GO
ALTER TABLE [dbo].[compra]  WITH CHECK ADD  CONSTRAINT [FK__compra__id_clien__3B75D760] FOREIGN KEY([id_cliente])
REFERENCES [dbo].[persona] ([id_persona])
GO
ALTER TABLE [dbo].[compra] CHECK CONSTRAINT [FK__compra__id_clien__3B75D760]
GO
ALTER TABLE [dbo].[compra]  WITH CHECK ADD  CONSTRAINT [FK__compra__id_estad__3C69FB99] FOREIGN KEY([id_estado_compra])
REFERENCES [dbo].[catalogo_estado_compra] ([id_estado_compra])
GO
ALTER TABLE [dbo].[compra] CHECK CONSTRAINT [FK__compra__id_estad__3C69FB99]
GO
ALTER TABLE [dbo].[compra_X_alimento]  WITH CHECK ADD FOREIGN KEY([id_alimento])
REFERENCES [dbo].[alimento] ([id_alimento])
GO
ALTER TABLE [dbo].[compra_X_alimento]  WITH CHECK ADD  CONSTRAINT [FK__compra_X___id_co__3E52440B] FOREIGN KEY([id_compra])
REFERENCES [dbo].[compra] ([id_compra])
GO
ALTER TABLE [dbo].[compra_X_alimento] CHECK CONSTRAINT [FK__compra_X___id_co__3E52440B]
GO
ALTER TABLE [dbo].[persona]  WITH CHECK ADD FOREIGN KEY([id_credenciales_persona])
REFERENCES [dbo].[usuario] ([id_usuario])
GO
ALTER TABLE [dbo].[usuario]  WITH CHECK ADD FOREIGN KEY([id_tipo_usuario])
REFERENCES [dbo].[catalogo_tipo_usuario] ([id_tipo_usuario])
GO
/****** Object:  StoredProcedure [dbo].[actualizarCliente]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[actualizarCliente]
@idPersona INT,
@nombre nvarchar(50) = NULL, 
@apellido1 nvarchar(50) = NULL, 
@apellido2 nvarchar(50) = NULL,
@carnet INT = NULL, 
@cedula int = NULL, 
@edad int = NULL, 
@fechaNacimiento date = NULL,
@correo nvarchar(50) = NULL,
@contrasenia nvarchar(50) = NULL
AS	
	DECLARE @idCredencialesPersona INT
	IF @idPersona IS NULL
	BEGIN
		PRINT 1
		RETURN 1 --'One or more paramters are null'		
	END
	ELSE
	IF (SELECT COUNT(*) FROM [dbo].[persona] WHERE id_persona = @idPersona AND activo = 1) <= 0
	BEGIN
		PRINT 2
		RETURN 2 --'The product that the user is trying to update has not been found'
	END
	ELSE
	IF @carnet IS NOT NULL AND (SELECT COUNT(*) FROM [dbo].[persona] WHERE @carnet = carnet_persona) > 0
	BEGIN
		PRINT 3
		RETURN 3 --'El carnet que quiere ser insertado ya existe'
	END
	ELSE
	IF @cedula IS NOT NULL AND (SELECT COUNT(*) FROM [dbo].[persona] WHERE @cedula = cedula_persona) > 0
	BEGIN
		PRINT 4
		RETURN 4 --'La cedula que quiere ser insertado ya existe'
	END

	IF @correo IS NOT NULL AND (SELECT COUNT(*) FROM [dbo].[usuario] WHERE @correo = correo_usuario) > 0
	BEGIN
		PRINT 5
		RETURN 5 --'El correo que quiere ser insertado ya existe'
	END

	BEGIN
		IF @nombre IS NOT NULL
		BEGIN
			UPDATE [dbo].[persona]
			SET nombre_persona = @nombre
			WHERE @idPersona = id_persona;
		END

		IF @apellido1 IS NOT NULL
		BEGIN
			UPDATE [dbo].[persona]
			SET apellido1_persona = @apellido1
			WHERE @idPersona = id_persona;
		END

		IF @apellido2 IS NOT NULL
		BEGIN
			UPDATE [dbo].[persona]
			SET apellido2_persona = @apellido2
			WHERE @idPersona = id_persona;
		END

		IF @carnet IS NOT NULL
		BEGIN
			UPDATE [dbo].[persona]
			SET carnet_persona = @carnet
			WHERE @idPersona = id_persona;
		END

		IF @cedula IS NOT NULL
		BEGIN
			UPDATE [dbo].[persona]
			SET cedula_persona = @cedula
			WHERE @idPersona = id_persona;
		END

		IF @edad IS NOT NULL
		BEGIN
			UPDATE [dbo].[persona]
			SET edad_persona = @edad
			WHERE @idPersona = id_persona;
		END

		IF @fechaNacimiento IS NOT NULL
		BEGIN
			UPDATE [dbo].[persona]
			SET fecha_nacimiento_persona = @fechaNacimiento
			WHERE @idPersona = id_persona;
		END

---------------------- A partir de aca son modificaciones al usuario y no a la persona--------------------------------------------------------------

		SET @idCredencialesPersona = (SELECT id_credenciales_persona FROM [dbo].[persona] WHERE id_persona = @idPersona)

		IF @correo IS NOT NULL
		BEGIN
			UPDATE [dbo].[usuario]
			SET correo_usuario = @correo
			WHERE @idCredencialesPersona = id_usuario;
		END

		IF @contrasenia IS NOT NULL
		BEGIN
			UPDATE [dbo].[usuario]
			SET contrasenia_usuario = PWDENCRYPT(@contrasenia)
			WHERE @idCredencialesPersona = id_usuario;
		END


	END
GO
/****** Object:  StoredProcedure [dbo].[agregarAlimento]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--CRUD ALIMENTOS--

--CREATE
CREATE PROCEDURE [dbo].[agregarAlimento]
	@nombreAlimento nvarchar(50), 
	@tipoAlimento INT, 
	@disponibilidad BIT,
	@precio INT
AS
	IF @nombreAlimento IS NULL or @tipoAlimento IS NULL OR @disponibilidad IS NULL OR @precio IS NULL 
	BEGIN
		PRINT 1
		RETURN 1 --'One or more paramters are null'
	END

	ELSE
	IF (SELECT COUNT(*) FROM [dbo].[catalogo_tipo_alimento] WHERE [id_tipo_alimento] = @tipoAlimento) <= 0
	BEGIN
		PRINT 2
		RETURN 2 --'Invalid type'
	END

	ELSE
	BEGIN
	INSERT INTO [dbo].[alimento]
				([nombre_alimento]
				,[disponibilidad_alimento]
				,[id_tipo_alimento]
				,[precio_alimento])
			VALUES
				(@nombreAlimento
				,@disponibilidad
				,@tipoAlimento
				,@precio)
	END
GO
/****** Object:  StoredProcedure [dbo].[borrarAlimento]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[borrarAlimento]
	@idAlimento INT
AS

	BEGIN
	UPDATE [dbo].[alimento]
	   SET [activo] = 0
	 WHERE [id_alimento] = @idAlimento
	END
	RETURN 0
GO
/****** Object:  StoredProcedure [dbo].[borrarCliente]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[borrarCliente]
@idPersona INT
AS
	DECLARE @idCredencialesPersona INT
	IF @idPersona IS NULL
	BEGIN
		PRINT 1
		RETURN 1 --'One or more paramters are null'		
	END
	ELSE
	IF (SELECT COUNT(*) FROM [dbo].[persona] WHERE id_persona = @idPersona AND activo = 1) <= 0
	BEGIN
		RETURN 2 --No se encontro el usuario que desea ser borrado
	END
	SET @idCredencialesPersona = (SELECT id_credenciales_persona FROM [dbo].[persona] WHERE id_persona = @idPersona)

	UPDATE [dbo].[persona]
	SET activo = 0
	WHERE @idPersona = id_persona;

	UPDATE [dbo].[usuario]
	SET activo = 0
	WHERE @idCredencialesPersona = id_usuario;
GO
/****** Object:  StoredProcedure [dbo].[CrearUsuarioNuevo]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CrearUsuarioNuevo] 
@email nvarchar(50), 
@contrasenia nvarchar(50), 
@nombre varchar(50), 
@apellido1 varchar(50),
@apellido2 varchar(50),
@carnet int,
@cedula int,
@edad int,
@fechaNacimiento date
AS
DECLARE
@ultimoUsuarioInsertado INT


	IF (@email IS NULL or @contrasenia IS NULL OR @nombre IS NULL OR @apellido1 IS NULL OR @apellido2 IS NULL OR @carnet IS NULL OR @cedula IS NULL OR @edad IS NULL OR @fechaNacimiento IS NULL)
	BEGIN
		RETURN 1 --'One or more paramters are null'
	END

	IF (SELECT COUNT(*) FROM [dbo].[usuario] WHERE correo_usuario = @email AND activo = 1) > 0
	BEGIN
		RETURN 2 --'Nickname is already in use'
	END

	IF (SELECT COUNT(*) FROM [dbo].[persona] WHERE carnet_persona = @carnet AND activo = 1) > 0
	BEGIN
		RETURN 3 --'ID is already in use'
	END

	IF (SELECT COUNT(*) FROM [dbo].[persona] WHERE cedula_persona = @cedula AND activo = 1) > 0
	BEGIN
		RETURN 4 --'Cedula is already in use'
	END



	INSERT INTO [dbo].[usuario] (correo_usuario,contrasenia_usuario) VALUES (@email,PWDENCRYPT(@contrasenia))

	SET @ultimoUsuarioInsertado = (SELECT MAX(id_usuario) FROM [dbo].[usuario])

	INSERT INTO [dbo].[persona]
			   ([nombre_persona]
			   ,[apellido1_persona]
			   ,[apellido2_persona]
			   ,[carnet_persona]
			   ,[cedula_persona]
			   ,[edad_persona]
			   ,[fecha_nacimiento_persona]
			   ,[id_credenciales_persona])
		 VALUES
			   (@nombre
			   ,@apellido1
			   ,@apellido2
			   ,@carnet
			   ,@cedula
			   ,@edad
			   ,@fechaNacimiento
			   ,@ultimoUsuarioInsertado)

PRINT 0
RETURN 0


EXEC [CrearUsuarioNuevo] 
@email = 'valeria44a@estudiantec.cr', 
@contrasenia = 'prueba', 
@nombre = 'Valeria', 
@apellido1 = 'Prado',
@apellido2 = 'Rodriguez',
@carnet = 2020132773,
@cedula = 118180299,
@edad = 21,
@fechaNacimiento = '2001-08-02'
GO
/****** Object:  StoredProcedure [dbo].[generarCompra]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[generarCompra]
	@jsonAlimentos VARCHAR(MAX),
	@idCliente INT
AS
BEGIN
	SET NOCOUNT ON;
DECLARE
	--ciclo productos
	@cursorAlimentos INT,
	--info alimento
	@idAlimento INT,
	@cantidad INT,
	@precio INT,
	@subTotal MONEY,

	@lastCompra INT

DECLARE @alimentos TABLE
	(idCursor INT IDENTITY(1,1) PRIMARY KEY,
	idAlimento INT,
	cantidad INT
	)

	--DATOS NULOS?
	IF @jsonAlimentos IS NULL OR  @idCliente IS NULL
		BEGIN
			PRINT 1
			RETURN 1 --datos nulos
		END

	--EXISTE EL CLIENTE
	IF (SELECT COUNT(*) FROM [dbo].[persona] WHERE [id_persona]=@idCliente AND Activo = 1)<=0 
		BEGIN
			PRINT 3
			RETURN 3 --no existe el cliente
		END
	--JSON FORMAT
	IF ISJSON (@jsonAlimentos) < 1
		BEGIN
			PRINT 2
			RETURN 2 --json formar is not valid
		END

	--TABLA CON LOS ALIMENTOS DE JSON
	INSERT INTO @alimentos SELECT * FROM OPENJSON (@jsonAlimentos) 
							WITH (idAlimento INT,
								  cantidad INT)

	--GENERAR COMPRA (VACIA)
	INSERT INTO [dbo].[compra]
			   ([id_cliente]
			   ,[fecha_compra])
		 VALUES
			   (@idCliente
			   ,GETDATE())
	SELECT @lastCompra = MAX([id_compra]) FROM [dbo].[compra]

	--CICLO PARA VALIDAR PRODUCTOS SELECCIONADOS
	SELECT @cursorAlimentos = MIN (idCursor) FROM @alimentos
	WHILE @cursorAlimentos IS NOT NULL
		BEGIN
			--PRODUCT INFO
			SELECT @idAlimento = idAlimento,
					@cantidad = cantidad 
					FROM @alimentos WHERE idCursor = @cursorAlimentos
			--PRICE
			SELECT @precio = [precio_alimento] FROM [dbo].[alimento] WHERE [id_alimento] = @idAlimento
			SET @subTotal = @cantidad * @precio

			--GENERAR LINEA DE FACTURA
			INSERT INTO [dbo].[compra_X_alimento]
					   ([id_compra]
					   ,[id_alimento]
					   ,[cantidad]
					   ,[subtotal])
				 VALUES
					   (@lastCompra
					   ,@idAlimento
					   ,@cantidad
					   ,@subTotal)
		--actualizar total de la factura
		UPDATE [dbo].[compra]
		   SET [total_compra] = [total_compra]+@subTotal
		 WHERE [id_compra] = @lastCompra

		SELECT @cursorAlimentos = MIN (idCursor) FROM @alimentos WHERE idCursor>@cursorAlimentos
	END--END WHILE
RETURN 0
END
GO
/****** Object:  StoredProcedure [dbo].[infoCompra]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

--CRUD PEDIDOS

--READ PEDIDOS

--1- INFO DE COMPRA
CREATE PROCEDURE [dbo].[infoCompra]
	@idCompra INT,
	@estado INT
AS

	BEGIN
	SELECT [id_compra]
			,[id_cliente]
			,[nombre_persona] AS nombreCliente
			,[apellido1_persona] AS apellido1Cliente
			,[apellido2_persona] AS apellido1Cliente
			,[cedula_persona] AS cedulaCliente
			,[carnet_persona] AS carnetCliente
			,[correo_usuario] AS correoCliente
			,[fecha_compra]
			,[total_compra]
			,[dbo].[compra].[id_estado_compra]
			,[nombre_estado_compra] AS estado
		FROM [dbo].[compra] 
		INNER JOIN [dbo].[persona] ON  [id_persona] = [id_cliente]
		INNER JOIN [dbo].[usuario] ON  [id_usuario] = [id_credenciales_persona]
		INNER JOIN [dbo].[catalogo_estado_compra] ON [dbo].[compra].[id_estado_compra] = [dbo].[catalogo_estado_compra].[id_estado_compra]
		WHERE ([dbo].[compra].[id_estado_compra]=@estado or @estado = '' or @estado is null) and ([id_compra]=@idCompra or @idCompra='' or @idCompra is null) 
	END
GO
/****** Object:  StoredProcedure [dbo].[modificarAlimento]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[modificarAlimento]
	@idAlimento INT,
	@nombreAlimento nvarchar(50), 
	@tipoAlimento INT, 
	@disponibilidad BIT,
	@precio INT
AS
	IF @idAlimento IS NULL 
	BEGIN
		PRINT 1
		RETURN 1 --'Id NULL'
	END

	--Existe el alimento?
	ELSE
	IF (SELECT COUNT(*) FROM [dbo].[alimento] WHERE [id_alimento] = @idAlimento AND [activo] = 1) <= 0
	BEGIN
		PRINT 2
		RETURN 2 --'No existe el alimento'
	END
	
	--validar tipo
	ELSE
	IF (SELECT COUNT(*) FROM [dbo].[catalogo_tipo_alimento] WHERE [id_tipo_alimento] = @tipoAlimento) > 0
	BEGIN
		--ACTULIZAR TIPO
		UPDATE [dbo].[alimento]
			SET [id_tipo_alimento] = @tipoAlimento
			WHERE [id_alimento] = @idAlimento
	END

	--ACTUALIZAR NOMBRE
	IF @nombreAlimento is not null and @nombreAlimento != ''
	BEGIN
		UPDATE [dbo].[alimento]
		SET [nombre_alimento] = @nombreAlimento
		WHERE [id_alimento] = @idAlimento
	END

	--ACTUALIZAR DISPONIBILIDAD
	IF @disponibilidad is not null and @disponibilidad != ''
	BEGIN
		UPDATE [dbo].[alimento]
		SET [disponibilidad_alimento] = @disponibilidad
		WHERE [id_alimento] = @idAlimento
	END
	--ACTUALIZAR PRECIO
	IF @precio is not null and @precio != ''
	BEGIN
		UPDATE [dbo].[alimento]
		SET [precio_alimento] = @precio
		WHERE [id_alimento] = @idAlimento
	END

	RETURN 0
GO
/****** Object:  StoredProcedure [dbo].[obtenerClientes]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[obtenerClientes]
AS
BEGIN
	SELECT
		*
		INTO #temp
	FROM
		[dbo].[persona] AS resultado
	WHERE activo = 1
	SELECT * FROM #temp AS resultado
END
GO
/****** Object:  StoredProcedure [dbo].[readAlimentos]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[readAlimentos]
	@tipoAlimento INT
AS

	BEGIN
	SELECT [id_alimento]
		  ,[nombre_alimento]
		  ,[disponibilidad_alimento]
		  ,[dbo].[alimento].[id_tipo_alimento] AS idTipo
		  ,[catalogo_tipo_alimento].[id_tipo_alimento] AS Tipo
		  ,[precio_alimento]
		  ,[cantidad_alimento]
		  ,[activo]
	  FROM [dbo].[alimento] 
	  INNER JOIN [dbo].[catalogo_tipo_alimento] ON  [dbo].[alimento].[id_tipo_alimento] = [catalogo_tipo_alimento].[id_tipo_alimento]
	  WHERE ([alimento].[id_tipo_alimento] = @tipoAlimento OR @tipoAlimento = 0 OR @tipoAlimento = '') AND [activo] = 1
	  
	END
GO
/****** Object:  StoredProcedure [dbo].[verifyLogin]    Script Date: 9/10/2022 11:34:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[verifyLogin]
@email nvarchar(50), 
@password nvarchar(50)
AS
DECLARE @idTipoUsuario INT,
@IdPersona INT,
@IdUsuario INT
    IF @email IS NULL or @password IS NULL
    BEGIN
        PRINT 1
        RETURN 1 --'One or more paramters are null'
    END
    ELSE
    IF (SELECT COUNT(*) FROM [dbo].[usuario] WHERE correo_usuario = @email AND activo = 1) <= 0
    BEGIN
        PRINT 2
        RETURN 2 --'No account registered with the sent nickname'
    END
    ELSE
    IF (SELECT pwdcompare(@password, (select [contrasenia_usuario] FROM [dbo].[usuario] where correo_usuario=@email))) <= 0
    BEGIN
        PRINT 3
        RETURN 3 --'The given password and nickname combination does not exist'
    END
    ELSE
    BEGIN
        SET @IdUsuario = (SELECT id_usuario FROM [dbo].[usuario] WHERE correo_usuario = @email)
		SET @idTipoUsuario = (SELECT id_tipo_usuario FROM [dbo].[usuario] WHERE correo_usuario = @email)
		SET @IdPersona = (SELECT id_persona FROM [dbo].persona WHERE @IdUsuario = id_credenciales_persona)
        SELECT @IdUsuario as IdUsuario, @idTipoUsuario AS IdTipoUsuario, @IdPersona AS IdPersona, @email AS email_usuario
        RETURN 0
    END
GO
USE [master]
GO
ALTER DATABASE [comedorTEC] SET  READ_WRITE 
GO
