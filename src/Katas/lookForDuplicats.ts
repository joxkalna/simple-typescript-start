export function findDups(array1: string[], array2: string[]): string[] {
    return array1.filter(item => array2.includes(item))
}
const array1: string[] = ['apple', 'cherry', 'bannana']
const array2: string[] = ['apple', 'tomato', 'bannana']

const duplicates: string[] = findDups(array1, array2)
console.log(duplicates)