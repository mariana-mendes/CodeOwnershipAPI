var expect = require("chai").expect;
const controller = require('../user/userController')
const User = require('../user/user')
const server = require('../config/server.js');
var request = require('request');

// tentar colocar projeto depois ou id ?? sei la
const userMock = {
    name: "Nina Maria Silva",
    login: "nina-maria",
    password: "asda123",
    projects: []    
}


describe('server response', function () {
    before(function () {
    //   server.listen(3000);
    });
  
    after(function () {
    //   server.close();
    });


    it('should return 400', function (done) {
        // request.get('http://localhost:8000', function (err, res, body){
        //   expect(res.statusCode).to.equal(400);
        //   expect(res.body).to.equal('wrong header');
        //   done();
        // });
      });
})


describe("get()", function(){
    it("should ...", function(){ 
    //     let req = {body: userMock}
    //    let a =  controller.post(req);

    })

})