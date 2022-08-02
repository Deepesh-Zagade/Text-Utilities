import something,{a,c,d} from './module2.mjs'    // here something is imported default from module2.mjs
console.log(something)               // a c d are not importedd defaultly therefore we have to put them in {}
console.log(a)    
console.log(c)
console.log(d)
