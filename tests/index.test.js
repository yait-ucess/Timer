/**
 * @jest-environment jsdom
 */

import { describe } from "yargs";
import { test } from "@jest/globals";
import { expect } from "@jest/globals";

import addZero from "../index";
import multiplication from "../index";

describe("multiplication", () => {
  test("掛け算", () => {
    expect(multiplication(3, 3)).toBe(9);
  });
});

describe("addZero", () => {
  test("タイマーに0を足す", () => {
    expect(addZero("9")).toBe("09");
  });
});