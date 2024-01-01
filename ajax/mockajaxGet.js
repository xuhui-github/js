var axios = require("axios");

var MockAdapter = require("axios-mock-adapter");

//all requests using this instance will have a 2 seconds delay
var mock =new MockAdapter(axios/*,{delayResponse: 5000}*/);

mock.onGet("/users", {params: {searchText: "John"}}).
  reply(200,{users: [ {id: 1, name: "John Smith" },{id: 2, name: 'Mary Jones'}],});

mock.onGet("/register").networkError();
mock.onGet("/login").networkErrorOnce();
//mock.onGet("/sign").timeout();
//mock.onGet("/sign").timeoutOnce();
//mock.restore();
//mock.resetHandlers(); reset the registered mock handler 
//mock.reset();
//restore removes the mocking from the axios instance completely reset
//only removes all mock handlers that were added with onGet,onPost,etc
//
//mock.onGet("/users").reply(function(confit){
//  return [200, {
//   users: [{id:1, name: "John Smith"}],
//   },];
//   });
//
//
//   redirect 
//   mock.onPost("/foo").reply(function(config){
//     return axios.get("/bar");
//     });
//
//   using a regex
   mock.onGet(/\/users\/\d+/).reply(function(config){ // /users/1 /users/22
     return [ 200, {}];
     });
axios.get("/users/11").then((response) => {
  console.log(response.data);
});
 
axios.get("/users", {params: {searchText: "John"}}).
  then((response) => {
    console.log(response.data);
  });

const users= [{id: 1, name: "John Jones Login"}];
const loginUrl = "/login";
const url = new RegExp(`${loginUrl}/*`);
mock.onGet(url).reply(200, users);
axios.get("/login/1").then((response) => {
  console.log(response.data);
});

//mock.onPost().reply(500);//Reject all POST requests with HTTP 500

//Chainning is also suported
//mock.onGet("/users").reply(200,users).onGet("/posts").reply(200,posts);

//.replyOnce() can be used to let the mock only reply replyOnce
//mock.onGet("/users").replayOnce(200,users).onGet("/users").replyOnce(500);


