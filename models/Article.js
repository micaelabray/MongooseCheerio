var mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId, 
        ref: "Note" 
    }
});

// Creates the model from the Schema above
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article Model
module.exports = Article;
