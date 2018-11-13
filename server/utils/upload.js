const multer = require('koa-multer');

var storage = multer.diskStorage({

    //保存路径
    destination : function(req, file, cb){
        cb(null, 'upload/images/');
    },

    //重命名
    filename : function(req, file, cb){
        var fileFormat = (file.originalname).split('.'),
            date = new Date();
        cb(null, file.fieldname + '_' + date.getTime() + '.' + fileFormat[fileFormat.length - 1]);
    }
})

var upload = multer({
    storage : storage
})

module.exports = upload;


