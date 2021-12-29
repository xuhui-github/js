var em=new (require('events').EventEmiter)();
em.emit('event1');
em.emit('error',new Error('My mistake'));
