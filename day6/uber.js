class Uber {
    
    constructor(distance, vehicle) {
      this.distance = distance;
      this.vehicle = vehicle;
    }
    get getDistance(){
        return this.distance;
    }
   
    
     get getVehicle(){
        return this.vehicle
    }
   
    set setDistance(distance){
         this.distance = distance;
    }
   
    
     set setVehicle(vehicle){
       this.vehicle = vehicle;
    }
  
  getPrice(){
      if(this.vehicle == "AUTO" ){
          return this.distance * 20;
          
      }else if (this.vehicle == "CAR") {
          return this.distance * 40;
      }else if (this.vehicle == "SUV"){
          return this.distance * 60;
          
      }else{
          return "Invalid Vehicle type"
      }
      
  } 
  }
  
  var a = new Uber(4,"AUTO");
  console.log(a);
  console.log(a.getPrice());