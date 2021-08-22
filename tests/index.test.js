/**
 * @jest-environment jsdom
 */

import multiplication from "../index";

describe('multiplication', () => {
  test("掛け算", () => {
    expect(multiplication(3, 3)).toBe(9);
  });
});