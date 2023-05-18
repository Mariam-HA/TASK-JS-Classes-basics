/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */

class Person {
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  printName() {
    console.log(this.firstName, this.lastName);
  }

  calculateAge(currentYear) {
    return currentYear - this.birthYear;
  }
}
const name1 = new Person("Mariam", "Alrashdan", "female", 1997);
const name2 = new Person("Ahmad", "Alrashdan", "Male", 2003);
const name3 = new Person("Sara", "Alrashdan", "female", 2004);

name1.printName();
console.log(name1.calculateAge(2023));

name2.printName();
console.log(name2.calculateAge(2023));

name3.printName();
console.log(name3.calculateAge(2023));

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array,
 *  you should not pass it in the constructor method
 *  and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10],
 *      then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
  rating = [];
  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
    //this.rating = [];
  }
  rate(ratingg) {
    if (ratingg >= 0 && ratingg <= 10) {
      this.rating.push(ratingg);
    } else {
      console.log(`invalid rating, rating should be between 0 - 10`);
    }
  }
  averageRating() {
    if (this.rating.length === 0) {
      console.log("there is no rating available yet");
    }
    const sumOfValues = this.rating.reduce(
      (total, rating) => total + rating,
      0
    );
    const average = sumOfValues / this.rating.length;
    return average;
  }
}
const movie1 = new Movie("Shutter Island", "138 minutes", "Mystery");
movie1.rate(9);
//movie1.rate(17);
movie1.rate(9);
movie1.rate(10);
movie1.rate(10);
console.log(movie1.rating);
console.log(movie1.averageRating());

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person {
  movies = [];
  constructor(firstName, lastName, gender, birthYear, movies) {
    super(firstName, lastName, gender, birthYear);
  }
  addMovies(movie) {
    this.movies.push(movie);
  }
}
const actor1 = new Actor("Leonardo", "DiCaprio", "Male", 1974);
actor1.addMovies("inception");
actor1.addMovies("The Revenant");
actor1.addMovies("Titanic");
console.log(actor1.movies);
