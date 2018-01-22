// routes/note_routes.js

var objectID = require('mongodb').ObjectID;

module.exports = function (app,db){
	app.get('/notes/:id', (req,res) => {
		const id = req.params.id;
		console.log(id);
		const details = { '_id': new objectID(id)};
		db.collection('notes').findOne(details, (err,item) => {
			if(err){
				res.send({ 'error' : 'An erro occured'});
			} else {
				res.send(item);
			}
		})
	});

	app.post('/notes', (req, res) => {
		const note = {text: req.body.body, title: req.body.title};
		db.collection('notes').insert(note, (err,result) => {
			if(err){
				res.send({ error: 'An error occured during insertion'} );
			} else {
				res.send(result.ops[0]);
			}
		});
	});
};
