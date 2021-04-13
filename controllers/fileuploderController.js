
const singleFileUploader = async(req,res,next)=>{
    try{
        const file = req.file;
        res.status(201).send('File Uploaded Succesfully')
    }catch(error){
        res.status(400).send(error.message);
    }
}
module.exports= {singleFileUploader}