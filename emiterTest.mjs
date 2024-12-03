import  EventEmitter  from 'events';

const myEmiter = new EventEmitter();

function startfn(name) {
    console.log('hello' + name);    
}

function endfn(name) {
    console.log('Goodbye' + name);
}

myEmiter.on('first', startfn);
myEmiter.on('second', endfn);

myEmiter.emit('first', 'jone');
myEmiter.emit('second', 'jone');

