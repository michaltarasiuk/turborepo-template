# turborepo-template

A Turborepo monorepo with a Next.js app and shared Just-in-Time packages.

## What's inside

| Path                         | Package                   | Description                                                      |
| ---------------------------- | ------------------------- | ---------------------------------------------------------------- |
| `apps/site`                  | `@repo/site`              | Next.js app                                                      |
| `packages/ui`                | `@repo/ui`                | React components built on React Aria Components and Tailwind CSS |
| `packages/tailwind-config`   | `@repo/tailwind-config`   | Shared Tailwind CSS v4 theme and PostCSS config                  |
| `packages/typescript-config` | `@repo/typescript-config` | Shared `tsconfig` presets (`base`, `react`, `next`)              |

Tooling: [Turborepo](https://turborepo.dev), [pnpm](https://pnpm.io), TypeScript 7, [oxlint](https://oxc.rs/docs/guide/usage/linter) and [oxfmt](https://oxc.rs/docs/guide/usage/formatter), and [Lefthook](https://lefthook.dev) Git hooks.

## Getting started

Requires Node.js 24 and pnpm 12.

```sh
pnpm install
pnpm dev
```

## Scripts

| Command          | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `pnpm dev`       | Start the dev servers                                            |
| `pnpm build`     | Build all apps                                                   |
| `pnpm start`     | Build, then serve the production build                           |
| `pnpm check`     | Lint, check formatting, type-check, and check package boundaries |
| `pnpm check:fix` | Fix lint issues and format                                       |

Run a task for one package with `pnpm turbo run <task> --filter=@repo/site`.

## Remote caching

Remote cache artifacts are signed. To enable remote caching:

1. Run `pnpm turbo login` and `pnpm turbo link`.
2. Set `TURBO_REMOTE_CACHE_SIGNATURE_KEY` locally. It must be at least 32 bytes (`openssl rand -hex 32`).
3. In GitHub, set the `TURBO_TEAM` variable and the `TURBO_REMOTE_CACHE_SIGNATURE_KEY` secret. CI authenticates with OIDC, so it doesn't need a token.

## Conventions

See [AGENTS.md](AGENTS.md) for repo conventions: how packages are structured, adding dependencies, and more.
