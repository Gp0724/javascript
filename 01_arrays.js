const arr= new Array(1,2,3,4,5,6,7);
// console.log(arr.includes(9));

//slice and splice

const marvel=["thor","ironman","spiderman"]
const dc=["superman", "flash", "batman"]
const cartoon=["optimus","bumble bee","kick buttowski"]
const num=[1,2,3,4,7]
// marvel.push(dc)
// console.log(marvel)

// const heroes=marvel.concat(dc)
// console.log(heroes)
const allheroes = [...marvel,...dc,...cartoon,...num]
// console.log(allheroes)

const a=[1,2,3,4,[5,6,7],[8,[9,10,[11]]]]
const new_a=a.flat(Infinity)
console.log(new_a)
