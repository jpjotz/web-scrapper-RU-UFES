const parseSaoMateus = require('../scrapers/parseSaoMateus');

const campuses = {
    saoMateus: {
        url: "https://restaurante.saomateus.ufes.br/cardapio",
        parser: parseSaoMateus
    },

    vitoria: {
        url: "https://ru.ufes.br/cardapio",
        parser: parseVitoria
    },

    alegre: {
        url: "https://restaurante.alegre.ufes.br/cardapio",
        parser: parseAlegre
    }
}

module.exports = campuses;