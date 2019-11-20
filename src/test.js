// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

exports.add = function() {
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('connected');
    });

    // var kittySchema = new mongoose.Schema({
    //     name: String
    // });
    // kittySchema.methods.speak = function() {
    //     var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    //     console.log(greeting);
    // }

    // var Kitten = mongoose.model('Kitten', kittySchema);

    // var silence = new Kitten({ name: 'Silence' });
    // silence.save(function(err, silence) {
    //     if (err) return console.error(err);
    //     silence.speak();
    // });

    // var fluffy = new Kitten({ name: 'fluffy' });
    // fluffy.speak();
    // fluffy.save(function(err, fluffy) {
    //     if (err) return console.error(err);
    //     fluffy.speak();
    // });

    return 1;
}