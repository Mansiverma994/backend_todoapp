const taskModel = require('./models/task.model');

  findAll: function findAll(request, reply) {

	var helper = new ReplyHelper(request, reply);
	// var params = request.plugins.createControllerParams(request.params);

	// taskDAO.findByID(params, function (err, data) {
	// 	helper.replyFindOne(err, data);
    // }


    taskModel.find({}, function (error, data) {
        
        helper.replyFindOne(error, data);
    })
}