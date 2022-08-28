const transacoes = {
    transacoes: [
        {
            valor: 10,
            descricao: "Pastel",
            categoria: "Despesa"
        },
        {
            valor: 3,
            descricao: "Venda do Doce",
            categoria: "Receita"
        }
    ]
}

module.exports = class TransacoesRepositorio {

    listarTransacoes() {
        return transacoes
    }

    criarTransacao(transacao) {
        const lista = transacoes.transacoes
        lista.push(transacao)
    }
}
