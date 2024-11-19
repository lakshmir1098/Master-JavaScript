const maps = new Map([
    ["a",[1,2,3]],
    [1, ['a','b','c']]
]);
const ar = [1,2];
maps
    .set ("a",[1,2,3])
    .set(1, ['a','b','c'])
    .set(true, 'You are allowed')
    .set(false, 'you are not allowed')
    .set ('lt', 10)
    .set ('gt', 1)
    .set (ar, 'Tesst')

console.log(maps);
console.log(maps && maps.get(1));

const t = 4;
console.log(maps.get( t < maps.get('lt') && t > maps.get('gt')));


const t1 = 12;
console.log(maps.get( t1 < maps.get('lt') && t1 > maps.get('gt')));

console.log([...maps.get('a')]);

console.log(maps.entries());
console.log(maps.keys());
console.log(maps.values())

