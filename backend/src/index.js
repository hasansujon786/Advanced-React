// let's go!
import createServer from './createServer';
import db from './db'
const server = createServer()

// TODO use express middleware to handle cookies
// TODO use express middleware to populate current user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
}, deets => {
  console.log(`=> Server is running on http:/localhost:${deets.port}`)
})

