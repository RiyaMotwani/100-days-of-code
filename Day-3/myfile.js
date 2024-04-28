const event = require('events');

class Birthday extends event.EventEmitter {
    age(msg){
        console.log(msg);
        this.emit('announcement',{name: 'Riya', surname:'Motwani', age: 20})
    }
}

module.exports = Birthday;