const {
  addBookHandler,
  allBookHandler,
  bookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler, 
  }, {
    method: 'GET',
    path: '/books',
    handler: allBookHandler, 
  }, {
    method: 'GET',
    path: '/books/{bookId}',
    handler: bookByIdHandler, 
  }, {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler, 
  }, {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;