const xml2js = require('xml2js');

const parseXML = async (xmlData) => {
    const parser = new xml2js.Parser();
    try {
        const result = await parser.parseStringPromise(xmlData);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = parseXML;
