const user = {
    name : "Farhad",
    age : 23,
    about : function(){
        console.log(`user name is ${this.name} and age is ${this.age}`);
    }
}

console.log(user);

user.about();

const book = {
    title : "Philosophiæ Naturalis Principia Mathematica",
    author : "Sir Isaac Newton",
    pages : 500,
    description : function(){
        return `${this.title} by ${this.author} with ${this.pages} pages`;
    }
}

console.log(book.description());

//simple return with array and destructuring

const movie = {
    title : "Interstellar",
    director : "Christopher Nolan",
    year : 2014,
    info : function(){
        return [this.title,this.director,this.year];
    }
}

const [t,d,y] = movie.info();
console.log(`Movie is ${t} directed by ${d} release in ${y}`);

//return as an object 

const song = {
    name:"Beat It",
    artist : "Michael Jackson",
    duration : 300,
    details : function(){
        return {name : this.name,
            artist : this.artist,
            duration : this.duration
        };
    }
}

const {name:name1,artist:artist1,duration:duration1} = song.details();
console.log(name1);
console.log(artist1);