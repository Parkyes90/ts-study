import { connect } from './mongodb/connect';
import { runServer } from './runServer';

connect()
  .then(async (connection) => {
    return connection.db('ch12-2');
  })
  .then(runServer)
  .catch((e: Error) => console.log(e.message));
