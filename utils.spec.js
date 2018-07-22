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
