const MemeSchema = require('../Scheme/index')

//create memes
async function create(req, res) {

    let { titulo, descricao, ano } = req.body;
    if (!titulo || !descricao || !ano)
        return res.json({ error: "Some params are missing" });

    let meme = await MemeSchema.create({ titulo, descricao, ano });
    return res.json(meme);
}

//update memes
async function update(req, res) {

    const { id } = req.params;
    let { titulo, descricao, ano } = req.body;
    const meme = await MemeSchema.findById(id);

    if(!meme) return res.json(404,"The meme does not exist")

    if (titulo) meme.titulo = titulo;

    if (descricao) meme.descricao = descricao;

    if (ano) meme.ano = ano;

    if (titulo || descricao || ano) meme.updateAt = Date.now();

    await meme.save();

    return res.json(meme);
}

//delete meme
async function deleteMeme(req, res) {
    const { id } = req.body;

    await MemeSchema.deleteOne({
        _id: id,
    });

    res.send("");
}

//search meme
async function getRead(req, res) {

    const meme = await MemeSchema.find().lean();
    //condition in relation the meme there is not
    if(!meme) return res.send(404, 'There is not')
    return (res.json(200,meme));
}

//search meme by id
async function getById(req, res) {

    const meme = await MemeSchema.findById(req.params.id).lean();

    if(!meme) return res.send(404, 'There is not')
    return (res.json(200,meme));
}

module.exports = {
    create,
    update,
    deleteMeme,
    getRead,
    getById
}
