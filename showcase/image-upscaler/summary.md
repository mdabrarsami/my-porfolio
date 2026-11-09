# Image Upscaler (@mdabrarsami/image-upscaler)

Client-side image upscaling SDK for the browser: classical reconstruction plus optional local AI super-resolution, with no backend.

- Type: Md Abrar Sami work (package scope `@mdabrarsami`, MIT licence with copyright Md Abrar Sami)
- Status: v0.1.0, first release complete in the repo (CHANGELOG 0.1.0). Publication to npm not confirmed.
- Repo: github.com/mdabrarsami/image-upscaler (check visibility before linking)
- Dates: 2026-09-01 (all commits on one day)
- Commits: 7

## What it does

A framework-agnostic TypeScript library that enlarges images entirely in the browser. Images never leave the device. A classical engine (denoise, Lanczos resampling, anti-ringing, edge-directed refinement, detail re-injection, adaptive sharpening) is always available. An optional AI engine runs ONNX super-resolution models through onnxruntime-web, downloaded only on request and cached in IndexedDB. It ships as ESM, CJS, a script-tag bundle and a Web Worker entry, with a React hook package and demos for vanilla JS, React and Electron.

## Highlights

- Monorepo with two packages: the core SDK and `@mdabrarsami/image-upscaler-react` (`useImageUpscaler`, `useModels`), about 7,600 lines of TypeScript.
- Three engines (classical, AI, hybrid) with `auto` picking based on what the browser supports.
- WebGPU resampling with a WGSL shader and a CPU fallback; work runs in a Web Worker with tiling and a memory budget for large images.
- Degrades instead of failing: no WebGPU means CPU, no Worker means the main thread with a warning, no IndexedDB means AI is off.
- Measured quality: 25.62 dB PSNR / 0.848 SSIM for the resampler with anti-ringing against 25.39 dB / 0.840 for `drawImage` at its best setting; the hybrid engine has the highest SSIM measured (0.856).
- 233 Vitest unit tests on the numerics (8 files) plus a Playwright suite covering the pipeline, workers and GPU, AI models, the React demo, distribution formats, Electron, and a privacy test that watches every network request.
- Benchmark harness and 10 docs (API, architecture, algorithms, AI, models, performance, browser support, privacy, testing, licences).
- Progress events and cancellation; output as PNG, JPEG or WebP.

## Stack

TypeScript, WebGPU (WGSL), Web Workers, OffscreenCanvas, IndexedDB, onnxruntime-web (optional peer), React 18, Vite, Electron (example), tsup, Vitest, Playwright, ESLint.

## Distribution

npm library (ESM / CJS / script-tag bundle / worker entry) plus a React hook package. Demo pages run from the repo's own static server.

## Public showcase OK?

Yes. It is a general-purpose MIT library with no internal URLs, data or customer references. It is Md Abrar Sami-owned code, so credit it as built at Md Abrar Sami.

## Screenshots

- `screenshots/upload-page-result.png`: the upload page after upscaling the built-in generated test image 3x (128x128 to 384x384, classical engine on WebGPU, 0.25 s), with the before/after divider.
- `screenshots/self-check-results.png`: the self-check page after a real run, 19 of 19 checks passed in 3.4 s.
- `screenshots/react-demo.png`: the React example built with `npm run build:demo`, before an image is picked.
- `screenshots/vanilla-demo.png`: the script-tag demo with capability detection and settings.

## Portfolio card

- Title: Image Upscaler SDK
- Blurb: Browser-only image upscaling library. Lanczos, anti-ringing and edge-directed refinement on WebGPU or CPU, optional local ONNX models, React hook, 233 unit tests. Images never leave the device.
- Tags: TypeScript, WebGPU, Image Processing, ONNX, React

## LinkedIn project entry

Title: Image Upscaler SDK (client-side image upscaling)

Associated with Md Abrar Sami

A framework-agnostic TypeScript library that upscales images entirely in the browser, with no backend and no API key.
- Classical engine: bilateral denoise, Lanczos-3/4 resampling, anti-ringing clamp, structure-tensor edge refinement, detail re-injection and adaptive sharpening, repeated per doubling above 2x
- Optional AI engine running ONNX super-resolution models through onnxruntime-web, downloaded on request and cached in IndexedDB for offline use
- WebGPU resampling with a WGSL shader, CPU fallback, Web Worker execution, tiling and a memory budget for large images
- Measured against canvas drawImage: 25.62 dB PSNR / 0.848 SSIM vs 25.39 dB / 0.840; the hybrid engine reaches 0.856 SSIM
- Ships as ESM, CJS, a script-tag bundle and a worker entry, plus a React hook package; demos for vanilla JS, React and Electron
- 233 unit tests on the numerics, a Playwright browser suite including a test that checks no image data leaves the page, and a benchmark harness
Stack: TypeScript, WebGPU, Web Workers, onnxruntime-web, React, Vite, tsup, Vitest, Playwright

## Naukri project entry

- Title: Image Upscaler SDK
- Type: Md Abrar Sami project (library)

Browser-only image upscaling library in TypeScript. No server; images stay on the device.
- Classical pipeline: denoise, Lanczos resampling, anti-ringing, edge-directed refinement, sharpening
- Optional local AI super-resolution with onnxruntime-web, models cached in IndexedDB
- WebGPU acceleration with CPU fallback, Web Worker execution and tiling for large images
- Higher PSNR and SSIM than canvas drawImage on the benchmark set
- ESM, CJS, script-tag and worker builds, plus a React hook package
- 233 unit tests (Vitest) and a Playwright browser suite
