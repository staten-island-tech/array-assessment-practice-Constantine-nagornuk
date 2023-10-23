const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"

//Sort books from oldest to most recent

const sortedBooks = books.slice().sort((a, b) => a.publishDate - b.publishDate);

console.log(sortedBooks)



//alphabetically





//Find who wrote War and Peace

 const poop =  books.find((book) => book.name === 'War and Peace')
console.log(poop.authorFirst , poop.authorLast)


//how many books were written before 1900?

const booksBefore1900 = books.filter((book) => book.publishDate < 1900);
const count = booksBefore1900.length;

console.log(`The number of books written before 1900 is ${count}`);

//was there at least one book published within the last 100 years?

const currentYear = new Date().getFullYear();
const hasBookPublishedLast100Years = books.some((book) => currentYear - book.publishDate <= 100);

if (hasBookPublishedLast100Years) {
  console.log("Yes");
} else {
  console.log("No,");
}

  
//was every book published within the last 100 years?

const every = books.every((book) => currentYear - book.publishDate <= 100)
if (every){
  console.log('Yes evey book was made within the last 100 years')
} else {
  console.log('no')
}


//print a list of books that "includes" the genre historical

const hisotrical = books.filter((book) => book.genre.includes("historical"))

console.log(hisotrical)


const fictional = books.filter((book) => book.genre.includes("fiction"))
console.log(fictional)

//--------------------------------------
let maxgenre = 0
bookmax = []
const long = books.forEach((book) => {
const genres = book.genre.length

if (genres > maxgenre){
  maxgenre = genres
  bookmax.push(book.name)
}
})

console.log(bookmax)

//-----------------------------Calculate the average publication year for all the books.
years = []
dates = books.forEach((book) => {
  years.push(book.publishDate)
})

const total = years.reduce((a,b) => a+b)

numbers = years.length


const avg = total / numbers
console.log(`the avg publication year for all the books is ${avg}`)

//List all books published in the 20th century (1900-1999).

a = books.filter((book)=> book.publishDate <= 1999 && book.publishDate >= 1900 )
a.forEach((book) => console.log(book.name))

//Find all books with a single-word title.

console.log('------')



books.forEach((book) => {
  const len = book.name.split(' ');
  if (len.length === 1) {
    console.log(book.name);
  } else {
    console.log(`This book "${book.name}" does not have one word in the title`);
  }
});




/* 
const p = ['yo there man yo']

const wordsSplit = p[0].split(' ')
console.log(wordsSplit)
console.log(wordsSplit)
 */
