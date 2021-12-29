let mycurry=(fn) => {
  if(typeof fn != 'function'){
    throw Error('No function provided');
  }
  // return function curriedFn(...args){
  //  return fn.apply(null,args);
  //};

  return function curriedFn(...args){
    if(args.length<fn.length){
      return function(){
        return curriedFn.apply(null,args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null,args);
  }
};

const loggerHelper=(mode,initialMessage,errorMessage,lineNo) => {
  if(mode == "DEBUG")
    console.debug(initialMessage,errorMessage+ "at line" + lineNo);
  else if(mode == "ERROR")
    console.error(initialMessage,errorMessage + "at line" + lineNo);
  else if(mode == "WARN")
    console.warn(initialMessage,errorMessage + "at line" + lineNo);
  else 
    throw "Wrong mode"
};

loggerHelper("ERROR","Error at Stats.js","Invalid argument passed",23);

let errorLogger=mycurry(loggerHelper)("ERROR")("Error At Stats.js");
let debugLogger=mycurry(loggerHelper)("DEBUG")("Debug At Stats.js");
let warnLogger=mycurry(loggerHelper)("WARN")("Warn At Stats.js");


errorLogger("Error message",21);
debugLogger("Debug message",233);
warnLogger("Warn message",34);

