class Usuario {
    constructor(name, surname, books = [], pets = []) {
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    };

    getFullName () {
        console.log(`My name is ${this.name} ${this.surname}`);
    };

    addPet (pet) {
        this.pets.push(pet);
        console.log(`My pets are: `);
        for (let index = 0; index < this.pets.length; index++) {
            console.log(this.pets[index]);
        };
    };

    countPets () {
        console.log(`Meaning I have ${this.pets.length} pets.`);
        return this.pets.length;
    };

    addBook (title, author) {
        this.books.push(
            {title: title, author: author}
        );
        console.log(`My books are: `);
        for (let index = 0; index < this.books.length; index++) {
            console.log(`${this.books[index].title} by ${this.books[index].author}.`);
        };
    };

    getBooksNames () {
        const booksNames = [];
        // this.books.forEach(book => {
        //     booksNames.push(book.title);
        // });
        this.books.map(book => booksNames.push(book.title))
        console.log("My book titles are:");
        booksNames.forEach(book => {
            console.log(book)
        });
    };
};

const user1 = new Usuario (
    name = "Esteban",
    surname = "Posse",
    books = [
        {
            "title": "Lord of the rings",
            "author": "J. R. R. Tolkien"
        },
        {
            "title": "The hunger games",
            "author": "Suzanne Collins"
        }
    ],
    pets = ["Pichulero", "Toriel"]
);

user1.getFullName();
user1.addPet("Vainilla");
user1.countPets();
user1.addBook("The amazing book is not on fire", "Dan and Phil");
user1.getBooksNames();