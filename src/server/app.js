process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require('express');
const app = express();
const pegarHtml = require('../services/scrapperService');

function pegarBloco(lista, inicio, fim) {
    const start = lista.indexOf(inicio);
    const end = lista.indexOf(fim);

    return lista.slice(start + 1, end);
}

app.get('/', async (req, res) => {
    try {
        const dados = await pegarHtml();
        res.json({
            tipos: dados.titulos,
            cafe: {
                desjejum: dados.comidas[0],
                acompanhamento: dados.comidas[1],
                cafe: dados.comidas[2],
                leite: dados.comidas[3],
                fruta: dados.comidas[4],
                suco: dados.comidas[5]
            },
            almoco: {
                prato_principal: dados.comidasAlmoco[0],
                opcao: dados.comidasAlmoco[1],
                guarnicao: dados.comidasAlmoco[2],
                acompanhamentos: dados.comidasAlmoco[3],
                saladas: [dados.comidasAlmoco[4], dados.comidasAlmoco[5] ],
                sobremesa: dados.comidasAlmoco[6],
                suco: dados.comidasAlmoco[7]
            },

            jantar: {
                prato_principal: dados.comidasJantar[0],
                opcao: dados.comidasJantar[1],
                guarnicao: dados.comidasJantar[2],
                acompanhamentos: dados.comidasJantar[3],
                saladas: [ dados.comidasJantar[4], dados.comidasJantar[5] ],
                sobremesa: dados.comidasJantar[6],
                suco: dados.comidasJantar[7]
            }

        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})