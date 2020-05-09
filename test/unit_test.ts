import { assertEquals } from "../deps.ts";

Deno.test({
  name: "example test",
  fn(): void {
    assertEquals("deno", "deno");
  },
});
