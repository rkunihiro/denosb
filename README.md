# Deno Sandbox

-   https://deno.land/manual
-   [VSCode AddOn](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

### Configuration

-   [deno.jsonc](deno.jsonc)

### Lint

```
deno lint -c deno.jsonc
```

### Format

```
deno fmt -c deno.jsonc
```

### Run

```
deno run -c deno.jsonc src/hello.ts
```

```
deno run -c deno.jsonc --allow-net src/fetch.ts
```
