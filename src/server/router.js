const NewPost = require('./controllers/NewPost');

module.exports = function(app){
  app.get('/', function(req, res){
    res.send({message: 'Super secret code is ABC123'})
  })
  app.post('/newpost', NewPost.newpost)
  app.get('/newpost', NewPost.getpost)
}
