import Cidade from '../models/Cidade';
import Cliente from '../models/Cliente';

class ClienteController {
  // Listar todos os clientes
  async index(req, res) {
    const clientes = await Cliente.findAll({
      include: [
        {
          model: Cidade,
          as: 'cidade',
          attributes: ['id', 'nome', 'uf'],
        },
      ],
    });

    return res.json(clientes);
  }

  // Criar um novo cliente
  async store(req, res) {
    const { rg, cpf } = req.body;

    const cliente = await Cliente.findOne({
      where: {
        rg,
        cpf,
      },
    });

    if (cliente) {
      return res.status(400).json({ error: 'Este cliente já foi cadastrado' });
    }

    const {
      id,
      nome,
      sexo,
      data_nascimento,
      salario,
      cidade_id,
    } = await Cliente.create(req.body);

    return res.json({
      id,
      nome,
      sexo,
      cpf,
      rg,
      data_nascimento,
      salario,
      cidade_id,
    });
  }

  // Alterar cliente
  async update(req, res) {
    const { id } = req.params;

    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      return res.status(400).json({ error: 'Este cliente não existe' });
    }

    const {
      nome,
      sexo,
      cpf,
      rg,
      data_nascimento,
      salario,
      cidade_id,
    } = await cliente.update(req.body);

    return res.json({
      id,
      nome,
      sexo,
      cpf,
      rg,
      data_nascimento,
      salario,
      cidade_id,
    });
  }

  // Excluir cliente
  async delete(req, res) {
    const { id } = req.params;

    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      return res.status(400).json({ error: 'Este cliente não existe' });
    }

    await cliente.destroy();

    return res.json();
  }
}

export default new ClienteController();
