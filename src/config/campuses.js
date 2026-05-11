const parseSaoMateus = require('../scrapers/parseSaoMateus');

const campuses = {
    saoMateus: {
        url: "https://restaurante.saomateus.ufes.br/cardapio",
        parser: parseSaoMateus
    },
}

module.exports = campuses;