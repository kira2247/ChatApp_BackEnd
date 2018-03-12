import mongoose from 'mongoose';
import config from './config'

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.database, {
  	keepAlive: true,
	reconnectTries: 10,
	useMongoClient: true
  });
  mongoose.connection
    .once('open', () => console.log('Mongodb Running'))
    .on('error', (err) => console.log(err));
};
