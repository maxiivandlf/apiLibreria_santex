# apiLibreria_santex

## Api creada para el trabajo practico de la seccion de nodejs de Santex

# Ejercicio de entrega de NodeJs

### Enunciado

Se requiere una API REST que permita manejar librerías y los libros asociados a cada una de
las librerías. Utilizar Node.Js Express, Sequelize y Passport como la infraestructura para crear
el servicio. Usar SQLlite como motor de base de datos.

Libreria

- Descripción: Una librería puede tener desde 0 a muchos libros.
- Ruta: /library
- Acciones
  - Crear librería (AUTH)
  - Obtener una librería
  - Debetraertambiéntodosloslibros
  - Obtener todas las librerías
  - Debetraertambiéntodosloslibros
  - Modificar una librería (AUTH)
  - Eliminar una librería (\*\_) (AUTH)
  - Agregar un libro nuevo (\_) (AUTH)
- Entidad

| id       | int    | El identificador de la libreria                          |
| -------- | ------ | -------------------------------------------------------- |
| name     | String | Nombre de la Libreria. Ej: El Librote                    |
| Location | String | Dirección física de la librería. Ej: Av. Libertador 1460 |
| Telefono | String | Número de teléfono. Ej: 239849023840923                  |
