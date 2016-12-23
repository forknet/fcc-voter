const path = require('path');
const NewPost = require('./controllers/NewPost');
const GetPoll = require('./controllers/GetPoll');
const CastVote = require('./controllers/CastVote');
const AllPolls = require('./controllers/AllPolls');
const DeletePoll = require('./controllers/DeletePoll');
const FetchVotes = require('./controllers/FetchVotes');

const Authentication = require('./controllers/authentication');

const passportService = require('./services/passport'); // source of Middleware for passport
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false }); //middleWare
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function(app){
  app.get('/allpolls', AllPolls.allposts)

  app.get('/fetchvotes/:userName', FetchVotes.getvotes)

  app.post('/newpost', NewPost.newpost)

  app.get('/polls/:id', GetPoll.getpost)
  app.put('/polls/:id', CastVote.update)
  app.delete('/polls/:id', requireAuth, DeletePoll.deletepost)

  app.post('/signup', Authentication.signup)
  app.post('/signin', requireSignIn,  Authentication.signin)

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
  });

}
