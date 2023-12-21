function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;

    if (read){
        message = "read";
    } else {
        message = "not read yet";
    }

    this.info = function () {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + message;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());