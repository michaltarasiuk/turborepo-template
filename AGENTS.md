<!-- BEGIN:turborepo-agent-rules -->

# This is NOT the Turborepo you know

Turborepo configuration, task behavior, and CLI commands can vary between installed versions and may differ from your training data. Resolve the `turbo` package from this file's directory or relevant workspace; in monorepos, it may not be visible from the repository root. For example, run `node -p "require.resolve('turbo/package.json')"` from a workspace that depends on `turbo`.

Read `docs/README.md` inside that installed package first, then read the relevant pages from its `docs/` directory before changing Turborepo configuration or commands. Heed deprecation notices. These bundled docs match the installed package version and are available without network access.

This block is written and re-added by `turbo` before repository-scoped commands when an AI agent is detected. In the Turborepo source repository, its template is defined in `crates/turborepo-cli/src/cli/agent_guidance.rs`. Removing the managed block while updates are enabled means a later qualifying invocation will add it again. Set `"agentGuidance": true` in the root `turbo.json` or `turbo.jsonc` to opt in; this does not remove an existing block. Keep the block committed with your work to avoid an uncommitted change on the next agent invocation.
<!-- END:turborepo-agent-rules -->

## Repo conventions

- One purpose per package. Apps (`apps/*`) are never dependencies of other packages; `turbo boundaries` enforces this via the `app`/`internal` tags.
- Packages are Just-in-Time: they export `.ts`/`.tsx` from `src` with no build step. Add entrypoints to `exports` (no barrel files); framework-specific code gets its own entrypoint (e.g. `./next-js/link`) and the framework goes in `peerDependencies`.
- Imports within a package use `#*` subpath imports (`package.json` `imports`), never tsconfig `paths`. Never use `../` across package boundaries; add a `workspace:*` dependency instead.
- Install each dependency in the package that uses it. Versions come only from the pnpm catalog (`catalogMode: strict`). The root holds repo tooling only.
- No root `tsconfig.json`; extend `@repo/typescript-config/{base,react,next}`.
- New packages need a `turbo.json` with `"extends": ["//"]` and a tag. Arrays in package configs replace the root's; prefix with `"$TURBO_EXTENDS$"` to append.
- Type-checking is the `typecheck` task (transit pattern). Lint and format are root-only tasks (oxlint, oxfmt), not per-package scripts.
- Adding a dependency: add its version to `catalog` in `pnpm-workspace.yaml`, then use `"catalog:"`. Versions published in the last 24h are rejected (`minimumReleaseAge`), and install scripts must be allowed in `allowBuilds`.
- A package with Tailwind classes needs a CSS entrypoint containing `@source "./"`, and the app must `@import` it (see `@repo/ui/styles.css`). Otherwise its classes are missing from the app's CSS.
- An app that consumes a package must list it in `transpilePackages` in `next.config.ts`, because packages ship untranspiled TS.
- TypeScript is 7.x (the native compiler). Don't assume TS 5 tooling or the TS 5 compiler API.
- Comments are sentence case with no trailing period (`// Type-checking runs in the separate typecheck task`). Inline trailing comments are lowercase fragments, section headers are short labels, and JSDoc values use double quotes (`@default "primary"`).
- Verify changes with `pnpm check`; `pnpm check:fix` fixes lint and formatting.
