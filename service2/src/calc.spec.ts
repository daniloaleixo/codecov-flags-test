
import Calculator from './calc'

describe('Calculator', () => {
  it('should multiply two numbers together', () => {
    const calc = new Calculator()
    expect(calc.mult(2, 3)).toBe(6)
  })

  it('should multiply two numbers together', () => {
    const calc = new Calculator()
    expect(calc.mult(2, 4)).toBe(8)
  })


  it('should multiply two numbers together', () => {
    const calc = new Calculator()
    expect(calc.mult(2, 5)).toBe(10)
  })
})