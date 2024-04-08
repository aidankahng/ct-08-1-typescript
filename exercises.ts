

// Exercise 1
// Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values

type CTStudent = {
    readonly id: string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted:string[],
    pet?: string
}

let student1:CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2:CTStudent= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3:CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}

console.log(student1, student2, student3);


// Question 2
// Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function
//Given
type Fruit={
    color:string,
    shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit=null

//Answer
function fruitColor(fruit:Fruit|null):string {
    if (fruit?.color) {
        return fruit.color
    } else {
        return "You ate my fruit already"
    }
}

console.log(fruitColor(apple));
console.log(fruitColor(eaten));


// Question 3
// Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type
//Given 
type Book={
    isbn:string,
    title:string,
    author:string
}

type DigitalBook={
    fileType:string
}

type EBook = Book & DigitalBook

let randomBook : EBook = {
    isbn : "9788869139239",
    title: "The Place We All Go",
    author: "Unknown",
    fileType: ".xyz"
}
console.log(randomBook)

// Question 4
// Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

// - All ShopItems have an numeric id that can not be edited 
// - All ShopItems have a price
// - All ShopItems have a description
// - Some ShopItems have a color
// - All ShopItems have a Category represented with an enum 
//     - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
// - All ShopItems have a list of keywords used to help search for the ShopItem 
//     - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

// After Creating the `ShopItem` type create 3 items using this type
enum Category {'Shirts', 'Shoes', 'Pants', 'Hats'}
type ShopItem = {
    readonly id: number,
    price: number,
    description: string,
    color?: string,
    searchWords: string[],
    category: Category    
}

let normalShoe:ShopItem = {
    id: 23,
    price: 20.54,
    description: "These white shoes look okay with most outfits",
    color: "white",
    searchWords : ["Everyday", "Footwear"],
    category : Category.Shoes
}
let fancyHat:ShopItem = {
    id: 44,
    price: 67.54,
    description: "This headpiece will make you feel and look like a king",
    searchWords : ["Royal", "Headwear", "Crown", "Cosplay"],
    category : Category.Hats
}
let oversizedShirt:ShopItem = {
    id: 99,
    price: 32.76,
    description: "This shirt is sold 5 sizes too large, so it can feel like a blanket",
    color: "various",
    searchWords : ["Everyday", "Comfy", "Homewear"],
    category : Category.Shirts
}

console.log(normalShoe, fancyHat, oversizedShirt)