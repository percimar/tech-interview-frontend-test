import { renderHook } from "@testing-library/react";
import { LangProvider, useLang } from "./LangContext";
import { act } from "react-dom/test-utils";

// This tests an assumption for the second test
test("default lang is en", () => {
  const { result } = renderHook(useLang, { wrapper: LangProvider });
  const { lang } = result.current;

  expect(lang).toBe("en");
  expect(document.documentElement.lang).toBe("en");
  expect(document.dir).toBe("ltr");
});

test("changing lang switches document direction", () => {
  const { result: useLangState } = renderHook(useLang, {
    wrapper: LangProvider,
  });

  act(() => useLangState.current.setLang("ar"));

  expect(useLangState.current.lang).toBe("ar");
  expect(document.documentElement.lang).toBe("ar");
  expect(document.dir).toBe("rtl");

  act(() => useLangState.current.setLang("en"));

  expect(useLangState.current.lang).toBe("en");
  expect(document.documentElement.lang).toBe("en");
  expect(document.dir).toBe("ltr");
});

test("using useLang outside of LangProvider throws error", () => {
  expect(() => renderHook(useLang)).toThrowError(
    "useLang must be used within a LangProvider"
  );
});
