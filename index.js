

// const arr = ['mere','pere','afine','struguri','ananas','smochine']

// const incepeCuVocala = (item) => /^[aeiouAEIOU]/.test(item);

// const arr1= arr.filter(incepeCuVocala)

//          console.log('1',  arr1)

// const incepeCuConsoana = (item) => /^[^aeiouAEIOU]/.test(item);

// const arr2 = arr.filter(incepeCuConsoana)

//          console.log('2',  arr2)

// const termitaInVocala = (item) => /[aeiouAEIOU]$/.test(item);

// const arr3 = arr.filter(termitaInVocala)

//          console.log('3',  arr3)

// const terminaInConsoala = (item) => /[^aeiouAEIOU]$/.test(item);

// const arr4 = arr.filter(terminaInConsoala)

//          console.log('4' , arr4)


// const lista1 = ['str1','str2','str3'];
// const lista2 =['str6','str4','str8','str7','str5'];

// function addFirstKElem(lista1, lista2, K) {
//     const l1 = !lista1.every(item => typeof item === 'string');
//     const l2 = !lista2.every(item => typeof item === 'string');
//     if( l1 === true || l2 === true) {
//         return 'Verificati listele sa contina doar elemente de tip string';
//     }
    
//     const lista2sortata = [...lista2].sort();

//     const primeleK = lista2sortata.slice(0,K);

//     return lista1.concat(primeleK);

// }
// const rez = addFirstKElem(lista1,lista2,2)

// console.log(rez)


// const lista1 = ['str1','str2','str3'];
// const lista2 =['str6','str4','str8','str7','str5'];

// function addFirstKElem(lista1, lista2, K) {
//     const l1 = !lista1.every(item => typeof item === 'string');
//     const l2 = !lista2.every(item => typeof item === 'string');
//     if( l1 === true || l2 === true) {
//         return 'Verificati listele sa contina doar elemente de tip string';
//     }
    
//     const lista2sortata = [...lista2].sort();

//     const newlist = [...lista1];

//     for (let i = 0; i < K && i < lista2sortata.length; i++){
//         newlist.push(lista2sortata[i]);
//     }

//     return newlist;

// }
// const rez = addFirstKElem(lista1,lista2,3)

// console.log(rez)

// const lista1 = ['str1','str2','str3'];
// const lista2 =['str6','str4','str8','str7','str5'];

// function addFirstKElem(lista1, lista2, K) {
//     const l1 = !lista1.every(item => typeof item === 'string');
//     const l2 = !lista2.every(item => typeof item === 'string');
//     if( l1 === true || l2 === true) {
//         return 'Verificati listele sa contina doar elemente de tip string';
//     }
    
//     const lista2sortata = [...lista2].sort();

//     const newlist = [...lista1, ...lista2sortata.slice(0,K).map(item => item)];
    
//     return newlist;
// }
// const newlist = addFirstKElem(lista1,lista2,3)

// console.log(newlist)

// const angajati = [
//     {name: 'Ilie', age: 20},
//     {name: 'Ana', age: 30},
//     {name: 'Ramona', age: 26},
//     {name: 'Petru', age: 29},
//     {name: 'Afonasie', age: 35},
//     {name: 'Lucretia', age: 48},
//     {name: 'Frosinia', age: 49},
//     {name: 'Valentin', age: 42}
// ]

// const angajatiAge = angajati.filter(user => user.age >= 20 && user.age <= 40)

// console.log('Angajatii cu varsta cuprinsa intre 20 si 40 de ani:', angajatiAge)

// const maiMiciDeCincezeci = angajati.every(user => user.age < 50 )

// console.log('Toti angajatii sub mai mici de 50 ani?', maiMiciDeCincezeci)


// const list = [9,6,20,4,1,6];

// function sorteaza(list,afisare) {
//     if (afisare === 'ASC') {
//         list.sort((a,b) => a - b);
//     } else if (afisare === 'DSC'){
//         list.sort((a,b) => b - a);
//     } else{
//         console.log('Completati argumentul ASC sau DSC');
//         return;
//     } 

//     console.log(`Lista sortata (${afisare}):`, list );
// }

// sorteaza(list,'ASC')
// sorteaza(list,'DSC')


// const User = {
//     name: 'Bobic',
//     age: 20,
//     city: 'L.A.',
//     mail: 'bobic20@email.com'
// };

// const {name, age, ...restDetails} = User;

// console.log('Name:',name)
// console.log('Age:', age)
// console.log(restDetails)

// const lista =[1,2,3,4,5];

// const [first, second, third, ...other] = lista;

// console.log('first',first)
// console.log('second',second)
// console.log('third',third)
// console.log('other',other)


