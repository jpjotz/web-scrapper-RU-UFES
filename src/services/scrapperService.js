const cheerio = require('cheerio');

const urlBase = "https://restaurante.saomateus.ufes.br/cardapio";
const data = new Date();
const dataFormatada = data.toISOString().split('T')[0];

async function pegarHtml() {
    const response = await fetch(`${urlBase}/${dataFormatada}`);
    const html = await response.text();
    const $ = cheerio.load(html);

    let titulos = [];
    $('.views-field-title').find('.field-content').each((i, el) => {
        titulos.push($(el).text().split('-')[0].trim());
    });

    let cardapio = [];
    $('.views-field-body .field-content strong').each((i, el) => {
        cardapio.push($(el).text().trim());
    })

    let comidas = [];
    $('.views-field-body .field-content p').each((i, el) => {
        if (i % 2 !== 0) {
            comidas.push($(el).text().trim())
        }
    })

    let comidasAlmoco = [];
    $('.views-field-body .field-content p').each((i, el) => {
        comidasAlmoco.push($(el).text().trim())
    });
    const indices = [14, 16, 18, 20, 22, 23, 25, 27]
    const comidasAlmocoFinal = indices.map(i => comidasAlmoco[i]);

    let comidasJantar = [];
    $('.views-field-body .field-content p').each((i, el) => {
        comidasJantar.push($(el).text().trim());
    });
    const indicesJantar = [30, 32, 34, 36, 38, 39, 41, 43];
    const comidasJantarFinal = indicesJantar.map(i => comidasJantar[i]);

    return { titulos, cardapio, comidas, comidasAlmoco: comidasAlmocoFinal, comidasJantar: comidasJantarFinal };
}

pegarHtml();

module.exports = pegarHtml;