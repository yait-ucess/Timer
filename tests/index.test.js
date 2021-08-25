/**
 * @jest-environment jsdom
 */

import { describe } from "@jest/globals";
import { it } from "@jest/globals";
import { expect } from "@jest/globals";

import { clock_form } from "../index";
import { clock_edit } from "../index";
import { clock_is_current } from "../index";
import { addZero } from "../index";
import { mouseEvent } from "../index";

describe("addZero", () => {
  it("0〜9", () => {
    expect(addZero(9)).toBe("09");
  });
  it("10以上", () => {
    expect(addZero(10)).toBe(10);
  });
});

describe("mouseEvent", () => {
  it("mouseover", () => {
    clock_edit.innerHTML = 3;
    clock_is_current.innerHTML = 3;
    !clock_form.classList.contains("clock_form_rest");
    expect(mouseEvent()).toBe();
  });
  it("mouseout", () => {
    clock_edit.innerHTML = 3;
    clock_is_current.innerHTML = 3;
    !clock_form.classList.contains("clock_form_rest");
    expect(mouseEvent()).toBe();
  });
});