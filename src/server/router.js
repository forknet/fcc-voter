const NewPost = require('./controllers/NewPost');
const GetPoll = require('./controllers/GetPoll');
const CastVote = require('./controllers/CastVote');
const FetchVotes = require('./controllers/FetchVotes');

const Authentication = require('./controllers/authentication');

const passportService = require('./services/passport'); // source of Middleware for passport
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false }); //middleWare
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function(app){
  app.get('/', requireAuth, function(req, res){
    res.send({message: 'Super secret code is ABC123'})
  })

  app.get('/fetchvotes', FetchVotes.getvotes)

  app.post('/newpost', NewPost.newpost)
  app.get('/newpost', NewPost.getpost)

  app.get('/polls/:id', GetPoll.getpost)
  app.put('/polls/:id', CastVote.update)

  app.post('/signup', Authentication.signup)
  app.post('/signin', requireSignIn,  Authentication.signin)
}
