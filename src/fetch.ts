const res = await fetch("https://github.rkunihiro.dev/data/hello.json");

const data = await res.json();

console.log(data);

Deno.exit(0);
