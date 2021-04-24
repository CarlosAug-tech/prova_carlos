import Sequelize, { Model } from 'sequelize';

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        sexo: Sequelize.STRING,
        rg: Sequelize.STRING,
        cpf: Sequelize.STRING,
        data_nascimento: Sequelize.STRING,
        salario: Sequelize.DECIMAL,
        cidade_id: Sequelize.INTEGER,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Cidade, { foreignKey: 'cidade_id', as: 'cidade' });
  }
}

export default Cliente;
