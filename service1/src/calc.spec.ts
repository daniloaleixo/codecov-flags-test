
import Calculator from './calc'

describe('Calculator', () => {
  it('should add two numbers together', () => {
    const calc = new Calculator()
    expect(calc.add(2, 3)).toBe(5)
  })
})