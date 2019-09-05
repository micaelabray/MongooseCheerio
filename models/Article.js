var mongoose = require ("mongoose");
var Schema = mongoose.Schema;

// New Schema
var ArticleSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    // Object that stores the note id
    note: {
        type: Schema.Types.ObjectId, 
        ref: "Note" 
    }
});

// New model created from the Schema above
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article Model
module.exports = Article;
