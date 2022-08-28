const { Pool } = require('pg')

const pool = new Pool()
pool.connect().then((client) => {
    const { user, host, database, port} = client
    console.log(`Conectado a ${user}@${host}:${port}/${database}`)
}).catch((err) => {
    console.error(err)
    console.log('Erro ao conectar ao Postgres. Encerrando processo')
    process.exit()
})

module.exports = class PgsqlTransacoesRepositorio {

    async listarTransacoes() {
        const response = await pool.query('SELECT * from transacoes')
        console.log(response.rows)

        return {
            transacoes: response.rows
        }
    }

    async criarTransacao(transacao) {
        const query = 'INSERT INTO transacoes(valor, descricao, categoria) VALUES ($1, $2, $3) RETURNING *'
        const values = [transacao.valor, transacao.descricao, transacao.categoria]
        const response = await pool.query(query, values)
        console.log(response.rows)
    }
}
