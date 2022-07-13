var r=require('rethinkdb')

r.connect({host: 'localhost',port: 28015,db: 'book'},function(err,conn){
                                             if(err) throw err;
                                             console.log('connected...');

                                             r.table('authors').insert({
					       id: 1,
					       title: "Lorem ipsum",
					       content: "Dolor sit amet"
					     }).run(conn);
                                             r.db('book').table('authors').run(conn, function(err,cursor){
					     cursor.each(console.log);
					     });
                                             r.db('book').table('sales').run(conn,function(err,cursor){
					       cursor.each(console.log);
					     });
                                            
                                         });


