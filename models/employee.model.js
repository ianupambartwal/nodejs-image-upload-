const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    Uploadfile: {
        type: String,
        required : true
    }
});

mongoose.model('Employee', employeeSchema);