var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  taskTitle: {
    type: String,
    required: true
  },
//    summary: {
//     type: String,
//     required: true
//   },
  completed: {
    type: Boolean,
    default: false
  },
  saved: {
    type: Boolean,
    default: false
  },
  inProgress: {
    type: Boolean,
    default: false
  },
  createdOn: {
    type: Date,
    default: Date.now
  },

  priority: [{
    type: String, 
    enum: ['1', '2', '3'], 
    required: false}] 
  
 
  // note: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Note"
  // }]
});

var Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
