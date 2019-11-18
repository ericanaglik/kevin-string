require('../src/index')

test('capitalize', () => {
    expect('erica'.capitalize()).toBe('Erica')
    expect('whats up'.capitalize()).toBe('Whats up')
    expect('please work'.capitalize()).toBe('Please work')
})

test('allCaps', () => {
    expect('two words'.allCaps()).toBe('TWO WORDS')
    expect('  two words  '.allCaps()).toBe('  TWO WORDS  ')
    expect('two  words'.allCaps()).toBe('TWO  WORDS')
    expect('two-words'.allCaps()).toBe('TWO-WORDS')
})

test('capitalizeWords', () => {
    expect('should be caps'.capitalizeWords()).toBe('Should Be Caps')
    // expect('should-be-caps'.capitalizeWords()).toBe('Should-Be-Caps')
})

test('removeExtraSpaces', () => {
    expect('  my dog  '.removeExtraSpaces()).toBe('my dog')
    expect('   pls work     '.removeExtraSpaces()).toBe('pls work')
})

test('kabobCase', () => {
    expect('  my dog  '.kabobCase()).toBe('my-dog')
    expect('   pls work     '.kabobCase()).toBe('pls-work')
    expect('PLS WORK'.kabobCase()).toBe('pls-work')
})

test('snakeCase', () => {
    expect('  my dog  '.snakeCase()).toBe('my_dog')
    expect('   pls work     '.snakeCase()).toBe('pls_work')
    expect('PLS WORK'.snakeCase()).toBe('pls_work')
})

