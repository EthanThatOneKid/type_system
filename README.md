# type_system

[![deno doc](https://doc.deno.land/badge.svg)](https://deno.land/x/type_system)

Type-safe custom type systems in TypeScript.

## Usage

```ts
import type {
  Schema,
  System,
} from "https://deno.land/x/type_system@$VERSION/mod.ts";

const SCHEMA = {
  deno_deploy: {
    project_name: "string",
  },
  google_sheets: {
    sheet_id: "string",
  },
} as const satisfies Schema;

const system: System<typeof SCHEMA> = {
  components: [
    {
      type: "deno_deploy",
      project_name: "string",
    },
    {
      type: "google_sheets",
      sheet_id: "string",
    },
  ],
};

console.log(system);
```

## Development

Make sure to install Deno:
<https://deno.land/manual/getting_started/installation>.

Format the project:

```sh
deno fmt
```

Lint the project:

```sh
deno lint
```

Run tests:

```sh
deno test
```

Update dependencies:

```sh
deno task udd
```

## License

[LICENSE](./LICENSE)

---

Developed with 💖 by [**@EthanThatOneKid**](https://etok.codes/)
