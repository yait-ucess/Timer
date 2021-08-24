/**
 * @jest-environment jsdom
 */

import { describe } from "@jest/globals";
import { test } from "@jest/globals";
import { expect } from "@jest/globals";

import { addZero } from "../index";
import { multiplication } from "../index";

test('multiplicationのユニットテスト', () => {
  expect(multiplication(3, 3)).toBe(9);
});

describe("addZeroのユニットテスト", () => {
  test("成功", () => {
    expect(addZero(9)).toBe("09");
  });
});