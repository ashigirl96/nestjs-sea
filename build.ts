import * as esbuild from 'esbuild'

async function main() {
  await esbuild.build({
    entryPoints: ['./src/main.ts'],
    platform: 'node',
    bundle: true,
    minify: true,
    outfile: './dist/main.js',
  })
}

void main()