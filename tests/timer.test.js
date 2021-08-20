/**
 * @jest-environment jsdom
 */

import multiplication from "../index";

describe('HelloWorld', () => {
  test("掛け算", () => {
    expect(multiplication(2, 3)).toBe(5);
  });
});