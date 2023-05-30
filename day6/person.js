class Person {
    
    constructor(firstName, lastName, age ,gender,nationality) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.nationality = nationality;
    }
    get getFirstName(){
        return this.firstName;
    }
    
    get getLastName(){
        return this.lastName;
    }
    
    get getAge(){
        return this.age;
    }
    
    
    get getGender(){
        return this.gender;
    }
    
    get getNationality(){
        return this.nationality;
    }
    
    /**
     * @param {any} firstName
     */
    set setFirstName(firstName){
         this.firstName = firstName;
    }
    
     /**
     * @param {any} lastName
     */
     set setLastName(lastName){
        this.lastName = lastName;
    }
    
     /**
     * @param {any} age
     */
     set setAge(age){
       this.age = age;
    }
    
    
     /**
     * @param {any} gender
     */
     set setGender(gender){
        this.gender  = gender;
    }
    
     /**
     * @param {any} nationality
     */
     set setNationality(nationality){
        this.nationality = nationality;
    }
    
    
   
   
  }
  
  var a = new Person("arun","aravind",20,"Male","Indian");
  console.log(a);
