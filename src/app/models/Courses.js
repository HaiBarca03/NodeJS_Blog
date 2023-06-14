
const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const Course = new Schema({
  // _id:{type: String, require:true},
  UCL: {type: String, required: true},
  Laliga: {type: String},
  image: {type: String},
  videoId: {type: String, required:true},
  slug: { type: String, slug: 'UCL'},
},{
  timestamps: true
});

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
  deletedAt : true,
  overrideMethods: 'all'
});

module.exports = mongoose.model('Course', Course);
