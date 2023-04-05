import {describe, it} from 'vitest'
import {parseTS} from "utils/ts-parser";

describe('When parse TS type', () => {
  it('should know type name', ({expect}) => {
    expect(parseTS(`
    const type User = {
      name: string,
    }
    `)).toEqual({
      'User': {
        properties:
          {
            name: {type: 'string'}
          }
      }
    })
  })

  it('should works without newline', ({expect}) => {
    expect(parseTS(` const type User = { name: string } `)).toEqual({
      'User': {
        properties:
          {
            name: {type: 'string'}
          }
      }
    })
  })

  it('should works for interface', ({expect}) => {
    expect(parseTS(` interface User { name: string } `)).toEqual({
      'User': {
        properties:
          {
            name: {type: 'string'}
          }
      }
    })
  })
})