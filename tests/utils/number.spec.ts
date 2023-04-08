import {describe, it} from 'vitest'


describe("Number()", () => {
  it('Try', ({expect}) => {
    expect(parseInt('11.1')).toEqual(11)
    expect(parseInt('11.6')).toEqual(11)
  })
})