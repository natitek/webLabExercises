let arrayofbooks = ['book1','name10books','boook3','book4','book5']

arrayofbooks.splice(1,1,'new Book2') 

arrayofbooks.push('New LastBook')

console.log(arrayofbooks)

arrayofbooks.forEach((a)=>{
    console.log(`${arrayofbooks.indexOf(a)}: ${a}`)
})


// Q 2

let arrayofnums = (numbers) =>{
    numbers.slice(numbers.length-3,numbers.length)
   
    let newnumarray = numbers.slice(numbers.length-3,numbers.length)

    return newnumarray
}

console.log(arrayofnums([34,12,44,23,56,9,56]))


// Q 3

let movie = [{
    title: 'Rambo',
    year: '1990',
    genres: ['action', 'thriller'],
    director:'Stallone',
    info(){
        return `${this.title} ${this.year} ${this.genres}`
    }
},
{
    title: 'Infinity Castle',
    year: '2005',
    genres: ['action', 'thriller', 'anime'],
    director:'Ufotable',
    info(){
        return `${this.title} (${this.year}) ${this.genres}`
    }
}
]

console.log(movie[1].info())



let playlist = 
    {
        song: ['Thriller','Damn','Iceman'],
        addsong(newsong){
            this.song.push(newsong)
            console.log(this.song)
        }
    }


playlist.addsong('Nokia')

//Q4

let Pet = {
    name: 'Dog',
    type: 'Tall',
    breed: 'Laberdoodle',
    describe(){
        return `${this.name} is a ${this.type} and a breed of ${this.breed}`
    },
    
}

console.log(Pet.describe())


