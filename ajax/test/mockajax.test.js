var axios = require("axios");
var MockAdapter =require("axios-mock-adapter");
var jest = require("jest");
var expect = jest.expect;

var mock = new MockAdapter(axios);

mock.onPost("/product", {id: 1}, expect.objectContaining({
  Authorization: expect.stringMatching(/^Basic /),
})).reply(204);
