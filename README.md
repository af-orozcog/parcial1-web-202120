# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

Agregue aquí al documentación del endpoint elaborado.

Backend:
Se hizo uso del modulo de controller y router, router para redirigir la petición y controller para buscar los jugadores.
La manera como se soliciono es utilizando un hashtable con el que guardamos las alturas de los jugadores y cuando estamos en un jugaor dado, buscamos el complemento de la altura para llegar a x. Si esa entrada existe en la hashTable entonces ponemos esas parejas en la respuesta.
Al final se verifica si la respuesta es vacio y si lo es se agrega el mensaje de que no se encontro a nadie.

FrontEnd:
Se verifica que la persona haya escrito un numero, y si lo hace se manda la petición al backend.
Se borra siempre el mensaje en el h2, y los hijos de Tbody, que son las entradas de la tabla.
Finalmente se crea una a una las filas que van a estar en la tabla.
