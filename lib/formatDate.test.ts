import { describe, expect, it } from "@jest/globals";

describe("formatDate()", () => {
  const date = "2021-10-20T13:06:05Z";

  describe("with pattern", () => {
    it("returns correct value", () => {
      console.log(`Timezone Offset: ${new Date().getTimezoneOffset()}`);

      expect(new Date(date).getHours()).toBe(13);
    });
  });
});
