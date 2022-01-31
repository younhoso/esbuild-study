const esbuild = require("esbuild");

esbuild.build({
	entryPoints: ["src/index.ts"],
	outdir: 'dist',
	bundle: true,
	minify: true,
	sourcemap: true,
	target: "node14",
	platform: 'node'
})
.then(() => console.log("⚡ Done"))
.catch(() => process.exit(1))