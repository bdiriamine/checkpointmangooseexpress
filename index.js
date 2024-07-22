const express = require('express');
const app = express();
const connect = require('./config/db')
const Person  = require('./model/person');
const person = require('./model/person');
connect()
const addPerson =async ()=>{
   const nouvellePerson =  new Person({
    nom : 'amine',
    age : 27,
    favoriteFood:['pizza' ,'salsa']
})
await nouvellePerson.save()
}

//addPerson()
const addManyPerson = async ()=>{
    try{
       const newPersons = person.create({
            nom : 'new8',
            age : 21,
            favoriteFood:['salami' ,'burritos']
        },
        {
            nom : 'sadak',
            age : 29,
            favoriteFood:['spaguittti' ,'sauce blanc']
        })
    }catch(err){
        console.log(err)
    }
}
// addManyPerson()
const findPerson = async ()=>{
    try {
        const findonePerson = await person.findOne({favoriteFood:"salami"})
        console.log(findonePerson);
      
  } catch (error) {
      console.log(error);
  }
}
// findPerson()
const findPersonByid=async()=> {
    try {
          const findPersonbyId = await person.findById("669e70991c03a9a451ca3d98")
          console.log(findPersonbyId);
        
    } catch (error) {
        console.log(error);
    }
}
// findPersonByid()
const find_edit_save=async()=> {
    try {
        const findPersonbyId = await person.findById("669e70991c03a9a451ca3d98")
        console.log(findPersonbyId);
          if (findPersonbyId) {
            findPersonbyId.favoriteFood.push("hamburger")
            await findPersonbyId.save()
          }
    } catch (error) {
        console.log(error);
    }}
    // find_edit_save()
const findOneAndUpdate=async()=> {
        try {
      
            const result= await person.findOneAndUpdate({nom:"sadak"},{age:20},{new:true})
            console.log(result);
        } catch (error) {
            console.log(error);
        }}
    // findOneAndUpdate()
const Remove=async()=> {
        try {
             const result= await person.findByIdAndDelete("669e70991c03a9a451ca3d98")
             console.log(result);
        } catch (error) {
            console.log(error);
        }}
    //Remove()
    const Removemany=async()=> {
        try {
             const result= await person.deleteMany({nom:"ahmed"})
             console.log(result);
        } catch (error) {
            console.log(error);
        }}
    // Removemany()
    const find_sort_limit_select=async()=> {
        try {
            const burritoLovers = await person.find({ favoriteFood: 'burritos' })
              .sort('nom')
              .limit(2)
              .select('-age');
            console.log(burritoLovers) ;
    } catch (error) {
            console.log(error);
        }}
    
  //find_sort_limit_select()

app.listen(process.env.PORT,(err)=>{
    err ? console.log(err):
    console.log("server is running");
})
