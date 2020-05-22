const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}`
test('should add to number', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
})

test('should generate Hello', () => {
    const result = generateGreeting('Si');
    expect(result).toBe('Hello Si');
})

test('should generate no name for anynomous', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
})