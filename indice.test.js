const { min, max } = require('./indice')

describe('Números aleatórios', () => {

    it('Menor número de um array', () => {
        expect(min).toBe(18)
    })
    it('Maior número de um array', () => {
        expect(max).toBe(95)
    })
});