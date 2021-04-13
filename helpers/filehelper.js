const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,new Date.now().toISOString().replace(/:/g,'-')+file.originalname)
    }
});
const fileFilter = (req,file,cb) =>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif'){
        cb(null,true)
    }else {
        cb(null,false)
    }
}
const upload = multer({storage:storage,fileFilter:fileFilter});

module.exports={upload};