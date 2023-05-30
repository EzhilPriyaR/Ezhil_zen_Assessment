class Circle {
    
    constructor(radius = 1.0, color = 'red') {
      this.radius = radius;
      this.color = color;
    }
    get getRadius(){
        return this.radius;
    }
    
     get getColor(){
        return this.color;
    }
    
    set setRadius(radius){
         this.radius = radius;
    }
    
     set setColor(color){
         this.color = color;
    }
    
    getArea(){
       return Math.PI * this.radius * this.radius;
    }
    
    getCircumference(){
       return  2 * Math.PI * this.radius;
    }
    
    toString(){
        return "[radius = " + this.radius + ", color = " + this.color +  "]";
    }
   
  }
  
  var a = new Circle();
  console.log(a.toString());
  console.log(a);
  console.log(a.getRadius);
  console.log(a.getColor);
  console.log(a.getArea());
  console.log(a.getCircumference());