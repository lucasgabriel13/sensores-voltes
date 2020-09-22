const { update } = require('../database/connection');
const connection = require('../database/connection');


module.exports={

    async index(request, response){
        const registros = await connection('register').select('*');

        return response.json(registros);
    },

    async create(request, response){

        const {umidade, temperatura} = request.body;

        await connection('register').insert({
            umidade,
            temperatura
        });

        return response.json({umidade,temperatura});
    },


    async indexUpdate(request, response){
        const registros = await connection('register').select('*').max('id');

        return response.json(registros);
    },

    async indexAvg(request, response){
        const media = await connection('register').avg('temperatura');

        return response.json(media);
    },

}