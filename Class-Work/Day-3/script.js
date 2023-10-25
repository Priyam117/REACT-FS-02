const rootElement = document.getElementById('root');

const mainDiv = React.createElement('div', { className: 'main-div' },
  React.createElement('h1', null, 'Hello, React...! This is our first-app'),
  React.createElement('div', { className: 'nested-div' },
    React.createElement('p', null, 'This is a paragraph inside a nested div. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta amet explicabo, ullam magni pariatur esse laborum corrupti facilis dicta laboriosam nam consequatur molestiae quos officia omnis non! Praesentium quaerat illum dignissimos blanditiis similique eius vitae! Deleniti, earum recusandae beatae veritatis cumque inventore? Cumque fugit ipsa, maxime ab tempora ducimus.')
  ),
  React.createElement('div', { className: 'nested-div' },
  React.createElement('a', { href: '#' }, 'This is a link inside the nested div.'),
    React.createElement('p', null, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta amet explicabo, ullam magni pariatur esse laborum corrupti facilis dicta laboriosam nam consequatur molestiae quos officia omnis non! Praesentium quaerat illum dignissimos blanditiis similique eius vitae! Deleniti, earum recusandae beatae veritatis cumque inventore? Cumque fugit ipsa, maxime ab tempora ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta amet explicabo, ullam magni pariatur esse laborum corrupti facilis dicta laboriosam nam consequatur molestiae quos officia omnis non! Praesentium quaerat illum dignissimos blanditiis similique eius vitae! Deleniti, earum recusandae beatae veritatis cumque inventore? Cumque fugit ipsa, maxime ab tempora ducimus.'),
  ),
  React.createElement('div', { className: 'nested-div' },
    React.createElement('p', null, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta amet explicabo, ullam magni pariatur esse laborum corrupti facilis dicta laboriosam nam consequatur molestiae quos officia omnis non! Praesentium quaerat illum dignissimos blanditiis similique eius vitae! Deleniti, earum recusandae beatae veritatis cumque inventore? Cumque fugit ipsa, maxime ab tempora ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta amet explicabo, ullam magni pariatur esse laborum corrupti facilis dicta laboriosam nam consequatur molestiae quos officia omnis non! Praesentium quaerat illum dignissimos blanditiis similique eius vitae! Deleniti, earum recusandae beatae veritatis cumque inventore? Cumque fugit ipsa, maxime ab tempora ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta amet explicabo, ullam magni pariatur esse laborum corrupti facilis dicta laboriosam nam consequatur molestiae quos officia omnis non! Praesentium quaerat illum dignissimos blanditiis similique eius vitae! Deleniti, earum recusandae beatae veritatis cumque inventore? Cumque fugit ipsa, maxime ab tempora ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta amet explicabo, ullam magni pariatur esse laborum corrupti facilis dicta laboriosam nam consequatur molestiae quos officia omnis non! Praesentium quaerat illum dignissimos blanditiis similique eius vitae! Deleniti, earum recusandae beatae veritatis cumque inventore? Cumque fugit ipsa, maxime ab tempora ducimus.')
  )
);

ReactDOM.render(mainDiv, rootElement);
