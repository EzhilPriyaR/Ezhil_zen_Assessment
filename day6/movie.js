class Movie {
    constructor(title, studio,rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating || "PG";
    }
  }
  
  function getPG(movieList){
       return movieList.filter(movie => movie.rating == "PG") ;
    }
    
  var movieArray = [new Movie("Dheena","VDT" ,"R"), new Movie("Ghilli","STR" ,"PG13"),new Movie("Basha","AVM" ,"PG")];
  console.log(movieArray);
  console.log(getPG(movieArray));
  console.log('\n');
  
  var movieInstance = new Movie("Casino Royale","Eon Productions","PG13");
  console.log(movieInstance);