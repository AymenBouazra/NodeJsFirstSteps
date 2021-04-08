const mongoose= require('mongoose');
const options =  {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
mongoose.connect('mongodb://localhost/database001',options).then(success=> {
    console.log('=====> Succesfully connected to database');
}).catch(error=>{console.log('=====> Error connection to database !')});
// other methode
// async function connecting(){
//     const options =  {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//         }
//    const success = mongoose.connect('mongodb://127.0.0.1:27017/database001',options)
//     console.log(success);
// }
// connecting()