module.exports = {
  database: 'mongodb://localhost/chatapptest',
  server: {
    port: 3000,
    host: '192.168.13.128',
  },
  socket: {
  	timeOut: 5000
  },
  jwt: {
    secret: 'asdasdxczsdrqwrasdasdasd',
    expiresIn: '1d',
  },
};