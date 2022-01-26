import pattern from '../ts';

describe('Arquivos index.ts.', () => {
    test('Verificar presença das expressões regulares', () => {
        // Arrange, Given

        var expectedRegExpNames = ['cpf', 'cnpj'];

        for (const expectedRegExpName of expectedRegExpNames) {
            // Act, When

            var receivedRegExp = pattern[expectedRegExpName];

            // Assert, Then

            expect(receivedRegExp).toBeDefined();
            expect(receivedRegExp.constructor).toBe(RegExp);
        }

        expect(Object.keys(pattern).length).toBe(expectedRegExpNames.length);
    });

    test('Teste para: cpf', () => {
        // Arrange, Given

        var regexp = pattern['cpf'];

        var expectedResults: Record<string, boolean> = {
            '123.465.789-00': true,
            abc: false
        };

        for (const text in expectedResults) {
            const expectedResult = expectedResults[text];

            // Act, When

            var receivedResult = regexp.test(text);

            // Assert, Then

            expect(receivedResult).toBe(expectedResult);
        }
    });

    test('Teste para: cnpj', () => {
        // Arrange, Given

        var regexp = pattern['cnpj'];

        var expectedResults: Record<string, boolean> = {
            '12.345.678/0000-99': true,
            abc: false
        };

        for (const text in expectedResults) {
            const expectedResult = expectedResults[text];

            // Act, When

            var receivedResult = regexp.test(text);

            // Assert, Then

            expect(receivedResult).toBe(expectedResult);
        }
    });
});
