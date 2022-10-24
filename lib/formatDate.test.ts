import { describe, expect, it } from "@jest/globals";


describe("ISO Date", () => {
  const date = "2021-10-20T13:06:05Z";

  it("returns correct hour value", () => {
    console.log(`Timezone Offset: ${new Date().getTimezoneOffset()}`);

    expect(new Date(date).getHours()).toBe(13);
  });
});

