import "babel-polyfill";
import assert from "assert";
import json from "../lib";
/*
 * Fixtures
 */

@json("b", "d")
class Clazz {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}

/*
 * Tests
 */
describe('decorator', () => {
    it("serialize", () => assert(JSON.stringify(new Clazz(1)) === '{"a":1}'));

    it("serialize with ignore", () => assert(JSON.stringify(new Clazz(1, 2, 3, 4)) === '{"a":1,"c":3}'));
});