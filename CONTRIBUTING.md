# Contributing to Auth.js

Thank you for your interest in contributing to Auth.js! This guide will help you get started.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Coding Guidelines](#coding-guidelines)

## Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/nextauthjs/.github/blob/main/CODE_OF_CONDUCT.md).

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/next-auth.git
   cd next-auth
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/nextauthjs/next-auth.git
   ```

## Development Setup

### Prerequisites

- Node.js (see `.nvmrc` for version)
- pnpm (v9.2.0+)
- Git

### Installation

```bash
# Install pnpm globally if you haven't
npm install -g pnpm@9.2.0

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Development Commands

```bash
# Start development server (Next.js app)
pnpm dev

# Start SvelteKit dev app
pnpm dev:sveltekit

# Start Express dev app
pnpm dev:express

# Start Qwik dev app
pnpm dev:qwik

# Start docs site
pnpm dev:docs

# Run tests
pnpm test

# Run E2E tests
pnpm test:e2e

# Check formatting
pnpm format

# Fix formatting
pnpm format:write

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Clean all build artifacts
pnpm clean
```

## Project Structure

```
next-auth/
├── apps/
│   ├── dev/          # Development apps for testing
│   ├── examples/     # Example implementations
│   └── playgrounds/  # Experimental features
├── docs/             # Documentation website
├── packages/
│   ├── adapter-*/    # Database adapters
│   ├── core/         # Core Auth.js library
│   ├── frameworks-*/ # Framework integrations
│   ├── next-auth/    # Next.js integration
│   └── utils/        # Shared utilities
└── patches/          # Dependency patches
```

## Making Changes

### Creating a Branch

```bash
# Update main branch
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b feature/your-feature-name
```

### Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `chore/` - Maintenance tasks
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

body (optional)

footer (optional)
```

Types:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting changes
- `refactor:` - Code restructuring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance

Example:

```
feat(core): add support for custom token encryption

Implemented custom JWT encryption algorithms to support
additional security requirements.

Closes #1234
```

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm --filter @auth/core test

# Run tests in watch mode
pnpm --filter @auth/core test:watch

# Run E2E tests
pnpm test:e2e

# Run E2E tests with UI
pnpm test:e2e:watch
```

### Writing Tests

- Place tests in `test/` directory
- Use descriptive test names
- Follow existing test patterns
- Aim for high coverage
- Test edge cases

Example:

```typescript
import { describe, it, expect } from "vitest"

describe("MyFeature", () => {
  it("should handle basic case", () => {
    // Arrange
    const input = "test"

    // Act
    const result = myFeature(input)

    // Assert
    expect(result).toBe("expected")
  })
})
```

## Submitting Changes

### Before Submitting

- [ ] Run `pnpm format:write` to format code
- [ ] Run `pnpm lint:fix` to fix linting issues
- [ ] Run `pnpm test` to ensure tests pass
- [ ] Run `pnpm build` to ensure build works
- [ ] Update documentation if needed
- [ ] Add tests for new features
- [ ] Update CHANGELOG if applicable

### Pull Request Process

1. **Push your changes**:

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** on GitHub

3. **Fill out the PR template** completely

4. **Link related issues** using keywords like "Fixes #123"

5. **Wait for review** from maintainers

6. **Address feedback** if requested

7. **Keep PR updated** with main branch:
   ```bash
   git checkout main
   git pull upstream main
   git checkout feature/your-feature-name
   git rebase main
   git push --force-with-lease
   ```

### PR Guidelines

- Keep PRs focused and small
- One feature/fix per PR
- Include tests
- Update documentation
- Follow coding style
- Add meaningful description
- Reference related issues

## Coding Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper types (avoid `any`)
- Use interfaces for objects
- Export types when needed
- Document complex types

### Code Style

- Follow ESLint rules
- Use Prettier for formatting
- 2 spaces for indentation
- Single quotes for strings
- Trailing commas in objects/arrays
- Semicolons optional (per Prettier config)

### Documentation

- Add JSDoc comments for public APIs
- Include `@param` and `@returns` tags
- Provide examples in comments
- Update docs/ if changing public APIs

### Performance

- Avoid unnecessary re-renders
- Use memoization when appropriate
- Keep bundle size small
- Lazy load when possible

### Security

- Never commit secrets
- Sanitize user input
- Follow OWASP guidelines
- Report security issues privately

## Questions?

- 💬 [GitHub Discussions](https://github.com/nextauthjs/next-auth/discussions)
- 📚 [Documentation](https://authjs.dev)
- 🐛 [Issue Tracker](https://github.com/nextauthjs/next-auth/issues)

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

---

Thank you for contributing to Auth.js! 🎉
