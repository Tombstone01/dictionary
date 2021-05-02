const wikipedia = require('wikipedia');

const query = async (article) => {
  const page = await wikipedia.page(article);
  const { extract } = await page.summary();
  console.log(extract); 
} 

module.exports = {
  query
}