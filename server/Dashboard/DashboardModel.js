var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DashboardSchema = new Schema({
 //groupId: {type: Schema.Types.ObjectId, ref:'Group'},
  options: {type: [{ subCategoryId:{ type : Schema.Types.ObjectId, ref: 'SubCategory' }, voting: {type: Number, default: 0}  }]},
  chosenOption: { type : Schema.Types.ObjectId, ref: 'SubCategory' },
  date: {type: Date, default: Date.now}
});
var Dashboard =mongoose.model('Dashboard', DashboardSchema);
module.exports = Dashboard; 
// var dash = new Dashboard()
// dash.save();