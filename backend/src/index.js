import createServer from './createServer';
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

// import db from './db'
import {APP_SECRET} from './config';
const server = createServer()

// use express middleware to handle cookies
server.express.use(cookieParser())
server.express.use((req, _, next) => {
  const {token} = req.cookies
  if (token) {
    // populate current userId form token
    const {userId} = jwt.verify(token, APP_SECRET)
    req.userId = userId
  }
  next()
})

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
}, deets => {
  console.log(`=> Server is running on http:/localhost:${deets.port}`)
})

