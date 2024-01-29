import { assertEquals } from "./developer_deps.ts";
import type { Schema, System } from "./system.ts";

const SCHEMA = {
  deno_deploy: {
    project_name: "string",
  },
  google_sheets: {
    sheet_id: "string",
  },
} as const satisfies Schema;

Deno.test("system", () => {
  const system: System<typeof SCHEMA> = {
    components: [
      {
        type: "deno_deploy",
        project_name: "deno-deploy-project-name",
      },
      {
        type: "google_sheets",
        sheet_id: "google-sheets-sheet-id",
      },
    ],
  };

  assertEquals(system.components.length, 2);
});
