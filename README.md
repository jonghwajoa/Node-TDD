# Node-TDD
Nodejs TDD기반 개발하기

Codit class 개발시 부족했던 부분

1. 테스트
2. 오류처리
3. validation

위 3가지가 부족했음.. 전혀 하지 않은것은 아니지만 정상적인 개발과는 거리가 있었고 부족했던 부분이 분명 존재함



> 부족한 부분을 채워 성장하기위한 프로젝트



https://github.com/mochajs/mocha

https://github.com/shouldjs/should.js

https://github.com/visionmedia/supertest

# TDD

바로 소스코드를 작성하는것이아니라 테스트코드를 작성하는것임~!!!!

단점 : 개발시간이 많이걸림
장점 : 유지보수시점에서는 TDD가 효과를 발휘함
TDD기반으로 개발시 유지보수의 비용을 줄일 수 있음

## mocha 

모카는 테스트 코드를 돌려주는 테스트 러너

테스트 수트 : 테스트 환경에서 모카에서는 describe()으로 구현

테스트 케이스 : 실제 테스트를 말하며 모카에서는 it()으로 구현



파일명에 spec 이라는 이름이 들어가면 테스트코드

```js
const utils = require("./utils");
const assert = require("assert");
// 테스트 수트 만들기 (테스트 환경)
describe("utils.js모듈의 captialize() 함수는", () => {
  // 테스트 케이스작성
  it("문자열의 첫번째 문자를 대문자로 변환한다.", () => {
    const result = utils.captialize("hello");
    assert.equal(result, "HELLO");
  });
});

```



#### utils.spec.js



## should 

test코드에서는 assert말고 사용

```js
const utils = require("./utils");
const should = require("should");
// 테스트 수트 만들기 (테스트 환경)
describe("utils.js모듈의 captialize() 함수는", () => {
  // 테스트 케이스작성
  it("문자열의 첫번째 문자를 대문자로 변환한다.", () => {
    const result = utils.captialize("hello");
    result.should.be.equal("Hello");
  });
});

```





## 슈퍼테스트

Mocha : 함수를 테스트하는 단위테스트

슈퍼테스트 : 통합테스트  API의 기능테스트 // 내부적으로 익스프레스 서버를 구동시켜 실제 요청을 보낸뒤 결과를 검증



###### index.spec.js

```js
const app = require("./index");
const request = require("supertest");

describe("GET /users는", () => {
  it("users func...", done => {
    //done 이라는 콜백함수 대입
    request(app)
      .get("/users")
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
```

















