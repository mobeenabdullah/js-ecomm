const layout = require('../admin/layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
        <li>${product.title} - ${product.price}</li>
    `;
    })
    .join('');

  return layout({
    content: `
        <ul>
            ${renderedProducts}
        </ul>
    `
  });
};
