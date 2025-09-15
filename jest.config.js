/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.ts', // Inclui todos os arquivos .ts dentro da pasta src
    '!src/**/*.test.ts', // Exclui todos os arquivos .test.ts
    '!src/**/*.spec.ts'  // Exclui todos os arquivos .spec.ts
  ],
  coverageThreshold: {
    global: {
      branches: 80,  // Exige 80% de cobertura de "branches" (ifs, switches, etc.)
      functions: 80, // Exige 80% de cobertura de funções
      lines: 80,     // Exige 80% de cobertura de linhas
      statements: 80 // Exige 80% de cobertura de "statements"
    }
  }
};
