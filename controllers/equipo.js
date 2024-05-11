import EquipoModel from "../models/equipo.js";

export async function PruebasEquipoGet(req, res){
 
    try {
        const equipo = await EquipoModel.find({});
        res.send(equipo);
    } catch (error) {
        res.status(500).send({ error });
    }
    }

export async function PruebasEquipoPost(request,response)
{
    const equipo = new EquipoModel(request.body);

    try {
        await equipo.save();
        response.send(equipo);
    } catch (error) {
        response.status(500).send(error);
    }
}

export async function PruebasEquipoID(request,response)
{
    try {
        const equipo = await EquipoModel.findOne({ _id: request.params.id });
        response.send(equipo);
    } catch (error) {
        response.status(500).send({ error });
    }
}