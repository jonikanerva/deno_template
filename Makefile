.PHONY: run test
run:
	deno run --allow-net src/server.ts
test:
	deno test
