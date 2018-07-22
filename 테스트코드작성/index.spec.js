const should = require("should");
const request = require("supertest");

const app = require("./index");

/* GET /users는 ... 
case success : 유저 객체를 담은 배열로 응답 & 최대 limit갯수만큼 응답..
case fail : limit이 숫자가 아니면 400
*/
describe("GET /users는..", () => {
  describe("성공시....", () => {
    it("유저객체를 담은 배열로 응답한다..", done => {
      request(app)
        .get("/users")
        .end((err, res) => {
          res.body.should.be.instanceOf(Array);
          done();
        });
    });

    it("limit 갯수만큼 응답한다.", done => {
      request(app)
        .get("/users?limit=2")
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          done();
        });
    });
  });

  describe("실패시...", () => {
    it("limit이 숫자형이 아니면 400을 반환..", done => {
      request(app)
        .get("/users?limit=two")
        .expect(400)
        .end(done);
    });
  });
});

/* GET /users/:id는 ....
case success : id가 1인 유저 객체를 반환
case fail : id가 숫자가 아닐경우 400반환 id를 찾을수 없을경우 404반환
*/

describe("GET /users/1 은..", () => {
  describe("성공시...", () => {
    it("id가 1인 유저 객체를 반환한다.", done => {
      request(app)
        .get("/users/1")
        .end((err, res) => {
          //프로퍼티의 id는 1이다..
          res.body.should.have.property("id", 1);
          done();
        });
    });
  });
  describe("실패시...", () => {
    it("id가 숫자가 아닐경우 400으로 응답한다.", done => {
      request(app)
        .get("/users/one")
        .expect(400)
        .end(done);
    });

    it("id가 없을경우 404로 응답한다.", done => {
      request(app)
        .get("/users/20")
        .expect(404)
        .end(done);
    });
  });
});

/* DELETE /users/:id 
case success : 204응답한다. Nocontent 성공은 했지만 Body는 없다 
delete에 많이 사용하는 상태코드
case fail : id가 숫자가 아닌경우 400으로 응답한다.
*/
describe("DELETE /users/1", () => {
  describe("성공시..", () => {
    it("204를 응답한다...", done => {
      request(app)
        .delete("/users/1")
        .expect(204)
        .end(done);
    });
  });

  describe("실패시...", () => {
    it("id가 숫자가아닌경우 404로 응답한다.", done => {
      request(app)
        .delete("/users/one")
        .expect(400)
        .end(done);
    });
  });
});

/* POST /users 
case success : 생성된 유저객체 반환 , 입력한 name을 반환 , 201상태코드를 반환
case fail : name 파라미터 누락시 400반환 , name중복시 409반환
*/
describe("POST /users는 ...", () => {
  describe("성공시....", () => {
    let body;
    let name = "daniel";
    before(done => {
      request(app)
        .post("/users")
        .send({ name })
        .expect(201)
        .end((err, res) => {
          body = res.body;
          done();
        });
    });
    it("생성된 유저객체를 반환한다. ", () => {
      body.should.have.property("id");
    });

    it("입력한 name을 반환한다.", () => {
      body.should.have.property("name", "daniel");
    });
  });

  describe("실패시...", () => {
    it("name 누락시 400을 반환한다.", done => {
      request(app)
        .post("/users")
        .send({})
        .expect(400)
        .end(done);
    });

    it("name 중복일 경우 409을 반환한다.", done => {
      request(app)
        .post("/users")
        .send({ name: "hwa" })
        .expect(409)
        .end(done);
    });
  });
});

/* PUT /users/:id
case success : 변경된 name을 응답한다.
case fail : 정수가 아닌 id경우 400 반환
            name이 없을경우 400
            없는 유저 404
            이름 중복 409 응답
*/

describe("PUT /users/:id", () => {
  describe("성공시", () => {
    const name = "den";
    it("변경된 name을 응답한다.", done => {
      request(app)
        .put("/users/3")
        .send({ name })
        .end((err, res) => {
          res.body.should.have.property("name", name);
          done();
        });
    });
  });
  describe("실패시...", () => {
    it("정수가 아닌 id일 경우 400응답", done => {
      request(app)
        .put("/users/one")
        .expect(400)
        .end(done);
    });
    it("name이 없는경우 400반환", done => {
      request(app)
        .put("/users/1")
        .send({})
        .expect(400)
        .end(done);
    });
    it("없는 id일경우 400을 응답", done => {
      request(app)
        .put("/users/999")
        .send({ name: "foo" })
        .expect(404)
        .end(done);
    });
    it("name이 중복일경우 409응답", done => {
      request(app)
        .put("/users/2")
        .send({ name: "hong" })
        .expect(409)
        .end(done);
    });
  });
});
