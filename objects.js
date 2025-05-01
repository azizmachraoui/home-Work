var person={firstName:'Yan', lastName:'Fan'}
var numbers={a:1,
    b:2,
    c:3,
    d:4}
var animals={animal:'dog',noise: 'bark',age: 3, type :'Golden Retriever',color: 'Yellow'}


var person={
    firstName:'ishow',
    lastName:'speed',
    age:21,
    hometown:'Ohio'
}

var food={
    favouriteFood:''
}
food.favouriteFood='pizza'


var person={
     name:{
      firstName:'mohamed',
      middlename:'aziz',
      lastname:'sanad',
    }
}


function emptyObject(){  
    var objec={

    }
    return objec
  }



function addProperty(object, key) { 
    object[key]=true
    return object
}


function deleteProperty(object,key) {
    delete object[key]
    return object
    
}


function addObjectPRoperty(object1,key,object2){
    object1[key]=object2
    return object1
}



function addFullNameProeprty(object){
    if (object.firstName && object.lastName){
        object.fullName=object.firstName+' '+object.lastName
    }
    return object
}


function addArrayProperty(object,key,array){
    object[key]=array
}


function printAllProperties(object) {
    for(var i in object){
        console.log(object[i]+' ')
    }
}



function removeNumbersLargerThan(number, object) {
    for (var key in object) {
      if (typeof object[key] === 'number' && object[key] > number) {
        delete object[key];
      }
    }
}


    for(var key in object){
        if(typeof object[key]==='number' && object[key]%2===0){
            delete object[key]
        }
       
    return object } 



function removePropertiesNotEqualTo10(object) {
        var obj2={}
        for(var key in object){
          if(typeof object[key]==='number' && object[key]===10){
              obj2[key]=object[key]
          }
    
        }return obj2
    }



function removeStringsLongerThan(object,number){
    for(var key in object){
         if( object[key].length>number ){
            delete object[key]
}
}return object}



function removeAllNumbers(object) {
    for(var key in object){
        if(typeof object[key]==='number'){
            delete object[key]
        }}
        return object
}


function removeArrays(object) {
    for(var key in object){
        if(typeof object[key]!=='number'&&typeof object[key]!=='string'){
            delete object[key]
        }
    }
    return object
}