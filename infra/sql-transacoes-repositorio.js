const { Pool } = require("pg");
const pool = new Pool();

class SqlTransacoesRepositorio {
  async listarTransacoes() {
    const resultado = await pool.query("SELECT * FROM transacoes");
    console.log(resultado.rows);
    return {
      transacoes: resultado.rows,
    };
  }

  async criarTransacao(transacao) {
    const consulta = `INSERT INTO
          transacoes(valor, descricao, categoria)
          VALUES ($1, $2, $3) RETURNING *`;
    const valores = [
        transacao.valor,
        transacao.descricao,
        transacao.categoria
    ];
    await pool.query(consulta, valores)
  }
}

module.exports = SqlTransacoesRepositorio;
