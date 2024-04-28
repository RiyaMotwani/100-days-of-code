const Bd = require('./myfile');
const obj = new Bd();

obj.on('announcement', (arg) =>{
    console.log("Announcement has been made",arg);
})

obj.age("Riya has turned 20!!");