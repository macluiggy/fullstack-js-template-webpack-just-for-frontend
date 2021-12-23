import { use, assert as _assert, request } from "chai";
import server from "../index";
import chaiHttp from "chai-http";
use(chaiHttp);
const assert = _assert;

// function rrr(params) {}d
// ./src/test/**/*.ts
describe("index.test.ts", () => {
  it("equal to 1", () => {
    assert.equal(1, 1);
  });
  it("hello equal hello", () => {
    assert.equal("hello", "hello");
  });
  it("test GET api hello", (done) => {
    request(server)
      .get("/api/hello")
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });
});

export default true;
