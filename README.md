# Node-TDD
Nodejs TDD기반 개발하기

Codit class 개발시 부족했던 부분

1. 테스트
2. 오류처리
3. validation

### 목표

> 부족한 부분을 채워 다음 프로젝트의 기반이 된다.



테스트 프레임워크 :  https://github.com/mochajs/mocha

검증 라이브러리 : https://github.com/shouldjs/should.js

통합테스트 : https://github.com/visionmedia/supertest



# TDD 실천법과 도구" 책 전체를 PDF 공개

https://repo.yona.io/doortts/blog/issue/1



1. 실패하는 테스트 코드 작성하기.
2. 테스트 통과시킬 함수 , API 작성
3. 리팩토링



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













