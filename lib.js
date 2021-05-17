class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut =false;
      this._ratings =[] ;
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(newIsCheckedOut) {
      this._isCheckedOut = newIsCheckedOut;
    }
    toggleCheckOutStatus() {
      if(this._isCheckedOut === true) {
        this._isCheckesOut = false;
      } else if(this._isCheckedOut === false) {
        this._isCheckedOut = true;
      }
      }
      getAverageRating() {
        let ratingSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
        const lengthOfArray = this.ratings.length;
        return ratingSum / this.ratings.length;
    }
    addRating(newRating) {
      return this._ratings.push(newRating);
    }
  }
  class Book extends Media {
    constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
    }
    get author() {
      return this._author
    }
    get pages() {
      return this._pages
    }
  }
  class Movie extends Media{
    constructor(title, director, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  const historyOfEverything = new Book ('A Short History of Nearly Everything', 'Bill Bryson', 544 ); 
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.ratings);
  console.log(historyOfEverything.getAverageRating());
  const Speed = new Movie('Speed', 'Jan de Bont',  116);
  Speed.toggleCheckOutStatus();
  console.log(Speed.isCheckedOut);
  Speed.addRating(1);
  Speed.addRating(1);
  Speed.addRating(5);
  Speed.getAverageRating();
  console.log(Speed.getAverageRating());
  
