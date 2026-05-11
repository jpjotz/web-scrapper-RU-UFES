const campuses = require('../config/campuses');

async function getCardapio (campus, data) {
    const url = campuses[campus].url;
    const response = await fetch(`${url}/${data}`);
    const html = await response.text();

    return campuses[campus].parser(html);
}

module.exports = getCardapio;