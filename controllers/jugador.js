//import JugadorModel from '../models/jugador';
  
// Creamos un método en el controlador, en este caso una accion de pruebas
export function pruebas(req, res){
 
// Devolvemos una respuesta en JSON
    res.status(200).send({
        menssage: 'rutaprueba'
    });
}
 
// Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero

