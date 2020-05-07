const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  //listar ongs cadastradas
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    //Chave pra gerar criptografia, 4 bytes em haxadecimal
    const id = crypto.randomBytes(4).toString("HEX");

    //conexao do banco e campos a inserir
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
    return response.json({ id });
  },
};
