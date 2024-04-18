const { resultado } = require('./mdc')

describe('Máximo divisor comum', () => {
    it('MDC entre dois números', () => {
        expect(resultado).toBe(9)
    });
});