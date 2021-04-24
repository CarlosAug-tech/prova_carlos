import Cidade from '../models/Cidade';

class CidadeController {
  // Listar todas as cidades
  async index(req, res) {
    const cidades = await Cidade.findAll();

    return res.json(cidades);
  }

  // Criar Cidade
  async store(req, res) {
    const { nome, uf } = req.body;

    const cidade = await Cidade.create({
      nome,
      uf,
    });

    return res.json(cidade);
  }

  // Atualizar Cidade
  async update(req, res) {
    const { id } = req.params;

    const cidade = await Cidade.findByPk(id);

    if (!cidade) {
      return res.status(400).json({ error: 'Esta cidade não foi encontrada' });
    }

    const { nome, uf } = await cidade.update(req.body);

    return res.json({
      nome,
      uf,
    });
  }

  // Excluir cidade
  async delete(req, res) {
    const { id } = req.params;

    const cidade = await Cidade.findByPk(id);

    if (!cidade) {
      return res.status(400).json({
        error: 'Esta cidade não pode ser deletada, pois ela não existe',
      });
    }

    await cidade.destroy();

    return res.json();
  }
}

export default new CidadeController();
