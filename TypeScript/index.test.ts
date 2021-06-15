import * as index from "./index";

describe("Initialisation des variables", () => {
  test("Cette variable doit avoir true ", () => {
    expect.assertions(1)
    expect(index.boooleanVariable).toBe(true)
  })
  test("Cette variable doit avoir `null` ", () => {
    expect.assertions(1)
    expect(index.nullVariable).toBe(null)
  })
  test("Cette variable doit avoir `Hello World!` ", () => {
    expect.assertions(1)
    expect(index.greetingVariable).toBe("Hello World!")
  })
})
