import "dotenv/config"
import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: "localhost",
        dialect: "postgres",
        port: 5434
    }
);

async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o Sequelize estabelecida com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  } finally {
    await sequelize.close(); // Fecha a conexão após o teste
  }
}

testarConexao();