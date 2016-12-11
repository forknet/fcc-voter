const NewPost = require('./controllers/NewPost');
const GetPoll = require('./controllers/GetPoll');
const CastVote = require('./controllers/CastVote');

const Authentication = require('./controllers/authentication');

module.exports = function(app){
  app.get('/', function(req, res){
    res.send({message: 'Super secret code is ABC123'})
  })
  app.post('/newpost', NewPost.newpost)
  app.get('/newpost', NewPost.getpost)

  app.get('/polls/:id', GetPoll.getpost)
  app.put('/polls/:id', CastVote.update)

  app.post('/signup', Authentication.signup)
}
