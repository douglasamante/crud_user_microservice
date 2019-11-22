const MemeSchema = require('../Scheme/index')

async function create(req, res) {
    let { titulo, descricao, ano } = req.body;
    console.log(req.body);
    if (!titulo || !descricao || !ano)
        return res.json({ error: "parametros faltando" });

    let meme = await MemeSchema.create({ titulo, descricao, ano });
    return res.json(meme);
}

async function update(req, res) {
    const { id } = req.params;
    let { titulo, descricao, ano } = req.body;
    let meme = MemeModal.findById(id);
    if (titulo) meme.titulo = titulo;
    if (descricao) meme.descricao = descricao;
    if (ano) meme.ano = ano;
    if (titulo || descricao || ano) meme.updateAt = Date.now();
    meme.save();
    return resp.json(meme);
}

async function deleteMeme(req, res) {
    const { id } = req.body;
    MemeModal.deleteOne({
        _id: id,
    });

    res.send("");
}

async function getRead(req, res) {
    return MemeSchema.find().lean();
}

async function getById(req, res) {
    return MemeModal.findById(req.params.id).lean();

}

module.exports = {
    create,
    update,
    deleteMeme,
    getRead,
    getById
}
