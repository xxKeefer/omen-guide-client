module.exports = {
  env: {
    node: true
  },
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint']
}
