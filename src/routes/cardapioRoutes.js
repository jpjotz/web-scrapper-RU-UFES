const getCardapio = require('../services/scrapperService');
const express = require('express');
const router = express.Router();

router.get('/cafe', async (req, res) => {
    try {
        const data = req.query.data || new Date().toISOString().split('T')[0];
        const campus = req.query.campus || 'saoMateus';
        const dados = await getCardapio(campus, data);
        res.json({
            cafe: {
                desjejum: dados.comidas[0],
                acompanhamento: dados.comidas[1],
                cafe: dados.comidas[2],
                leite: dados.comidas[3],
                fruta: dados.comidas[4],
                suco: dados.comidas[5]
            },
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.get('/almoco', async (req, res) => {
    try {
        const data = req.query.data || new Date().toISOString().split('T')[0];
        const campus = req.query.campus || 'saoMateus';
        const dados = await getCardapio(campus, data);
        res.json({
            almoco: {
                prato_principal: dados.comidasAlmoco[0],
                opcao: dados.comidasAlmoco[1],
                guarnicao: dados.comidasAlmoco[2],
                acompanhamentos: dados.comidasAlmoco[3],
                saladas: [dados.comidasAlmoco[4], dados.comidasAlmoco[5]],
                sobremesa: dados.comidasAlmoco[6],
                suco: dados.comidasAlmoco[7]
            },
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.get('/jantar', async (req, res) => {
    try {
        const data = req.query.data || new Date().toISOString().split('T')[0];
        const campus = req.query.campus || 'saoMateus';
        const dados = await getCardapio(campus, data);
        res.json({
            jantar: {
                prato_principal: dados.comidasJantar[0],
                opcao: dados.comidasJantar[1],
                guarnicao: dados.comidasJantar[2],
                acompanhamentos: dados.comidasJantar[3],
                saladas: [dados.comidasJantar[4], dados.comidasJantar[5]],
                sobremesa: dados.comidasJantar[6],
                suco: dados.comidasJantar[7]
            }
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.get('/cardapio/', async (req, res) => {
    try {
        const data = req.query.data || new Date().toISOString().split('T')[0]
        const campus = req.query.campus || 'saoMateus';
        const dados = await getCardapio(campus, data);
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
                saladas: [dados.comidasAlmoco[4], dados.comidasAlmoco[5]],
                sobremesa: dados.comidasAlmoco[6],
                suco: dados.comidasAlmoco[7]
            },

            jantar: {
                prato_principal: dados.comidasJantar[0],
                opcao: dados.comidasJantar[1],
                guarnicao: dados.comidasJantar[2],
                acompanhamentos: dados.comidasJantar[3],
                saladas: [dados.comidasJantar[4], dados.comidasJantar[5]],
                sobremesa: dados.comidasJantar[6],
                suco: dados.comidasJantar[7]
            }

        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;