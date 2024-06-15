
let flavors = prompt('Please enter frozen yogurt flavors seperated by commas.', 'Vanilla,Vanilla,Vanilla,Strawberry,Coffee,Coffee');

flavors = flavors.split(',')

console.log('An array of flavors:', flavors)

let froyo = {}
  for (let i = 0; i < flavors.length; i++) {
    let flavor = flavors[i].trim()
    if (!froyo[flavor]){
      froyo[flavor] = 1
    }else {
      froyo[flavor] += 1
    }
  }
console.table(froyo)