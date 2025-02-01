import betweenMarkers from '../betweenMarkers'

describe('should return string between the markers for pos1', () => {
  it('should succesfully return dog as text between markers ', () => {
    const text = 'What a <dog>'
    const start = '<'
    const end = '>'
    const result = betweenMarkers(text, start, end)
    expect(result).toEqual('dog')
  })
  it('should succesfully return full text string only', () => {
    const text = '<What a dog>'
    const start = '<'
    const end = '>'
    const result = betweenMarkers(text, start, end)
    expect(result).toEqual('What a dog')
  })
  it('should return empty string if If the final marker comes before the initial marker ', () => {
    const text = 'What a >dog>'
    const start = '>'
    const end = '>' //marker is opposite, returns empty string
    const result = betweenMarkers(text, start, end)
    expect(result).toBe('')
  })
  //test case for empty text
  it('should handle empty text', () => {
    const text = ''
    const start = '<'
    const end = '>'
    const result = betweenMarkers(text, start, end)
    expect(result).toEqual('')
  })
  it('should handle when empty markers', () => {
    const text = 'this is the dog'
    const start = ''
    const end = ''
    const result = betweenMarkers(text, start, end)
    expect(result).toEqual('this is the dog')
  })
  it('should handle no end marker', () => {
    const text = 'this is the <dog'
    const start = '<'
    const end = ''
    const result = betweenMarkers(text, start, end)
    expect(result).toEqual('this is the dog')
  })
  // it('should handle both markers at the same position', () => {
  //   let text = 'this is the <dog<';
  //   let start = '<';
  //   let end = '<';
  //   const result = betweenMarkers(text, start, end);
  //   expect(result).toEqual('');
  // });
})
