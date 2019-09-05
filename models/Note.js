var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// New Schema
var NoteSchema = new Schema({
    title: String,
    body: String
});

// New model created from the Schema above
var Note = mongoose.model("Note", NoteSchema);

//Export the Note model
module.exports = Note;
