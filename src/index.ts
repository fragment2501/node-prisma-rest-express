import express from 'express'

const app = express()

app.use(express.json())

// IMPORT ROUTES
// ---
import routes_user from './routes/user';
app.use('/user',routes_user);

import routes_post from './routes/post';
app.use('/post',routes_post);
// ---

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
