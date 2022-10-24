import { describe, expect, it } from "@jest/globals";

import thisIsRandom from "./randomFile"

describe("randomFile()", () => {
    it("isn't random", () => {
        expect(thisIsRandom("asdf")).toEqual("not so random after all")
    })
})