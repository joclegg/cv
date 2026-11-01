import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import perfectionist from 'eslint-plugin-perfectionist'
import playwright from 'eslint-plugin-playwright'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { LOCAL_PLUGIN } from './eslint/localPlugin.js'

const SRC_ALIAS_PATTERN = {
  group: ['./*', '../*'],
  message: 'Import from src using the @/ alias.',
}

const PLAYWRIGHT_ERRORS = [
  'missing-playwright-await',
  'no-element-handle',
  'no-eval',
  'no-force-option',
  'no-networkidle',
  'no-useless-await',
  'no-useless-not',
  'no-wait-for-selector',
  'no-wait-for-timeout',
  'prefer-locator',
  'prefer-to-have-count',
  'prefer-to-have-length',
  'prefer-web-first-assertions',
]

export default defineConfig([
  globalIgnores(['dist', 'coverage', 'test-results', 'playwright-report']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat['recommended-latest'],
      reactRefresh.configs.vite,
      prettier,
    ],
    plugins: { local: LOCAL_PLUGIN, perfectionist },
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'local/file-naming': 'error',
      'local/no-comments': 'error',
      'local/one-component-per-file': 'error',
      'local/single-object-params': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          modifiers: ['global', 'const'],
          format: ['UPPER_CASE'],
        },
        { selector: 'interface', format: ['PascalCase'] },
      ],
      'no-restricted-imports': ['error', { patterns: [SRC_ALIAS_PATTERN] }],
      'no-restricted-syntax': [
        'error',
        {
          selector:
            ':matches(Program, Program > ExportNamedDeclaration) > VariableDeclaration[kind="let"]',
          message: 'Module-level mutable state is not allowed.',
        },
        {
          selector: 'CallExpression[callee.name="createContext"]',
          message: 'Context stores are not allowed. Keep state local.',
        },
        { selector: 'ClassDeclaration', message: 'Use function components.' },
        {
          selector: 'TSEnumDeclaration',
          message: 'Use a const object with as const instead of an enum.',
        },
        {
          selector: 'TSTypeAliasDeclaration > TSUnionType > TSLiteralType',
          message:
            'Derive literal unions from a const object: (typeof X)[keyof typeof X].',
        },
      ],
      'func-style': ['error', 'declaration'],
      'perfectionist/sort-modules': [
        'error',
        {
          type: 'alphabetical',
          groups: [
            ['export-interface', 'export-type'],
            'export-function',
            ['interface', 'type'],
            'function',
          ],
        },
      ],
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  {
    files: ['e2e/**/*.ts', 'src/**/__e2e__/*.ts'],
    extends: [playwright.configs['flat/recommended']],
    rules: {
      ...Object.fromEntries(
        PLAYWRIGHT_ERRORS.map((rule) => [`playwright/${rule}`, 'error']),
      ),
      'playwright/expect-expect': [
        'error',
        { assertFunctionPatterns: ['^expect[A-Z]'] },
      ],
      'playwright/no-standalone-expect': 'off',
    },
  },
  {
    files: ['src/**/__e2e__/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@playwright/test',
              message: 'Import test and expect from @e2e/playwrightExtensions.',
            },
          ],
          patterns: [SRC_ALIAS_PATTERN],
        },
      ],
    },
  },
  {
    files: ['e2e/**/*.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      'no-restricted-syntax': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    files: ['*.config.ts'],
    rules: { 'no-restricted-imports': 'off' },
  },
])
