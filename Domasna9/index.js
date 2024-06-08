class Animal {
    constructor(name, kind, origin) {
     this.name = name
     this.kind = kind
     this.origin = origin   
    }

    introduce() {
        console.log(`${this.name} is a ${this.kind}`);
    }

    origins() {
        console.log(`This animal origins are from ${this.origin}`);
    }

}

class Dog extends Animal {
    constructor(name, kind, origin, breed) {
        super(name, kind, origin,)
        this.breed = breed
    }

    thisDog() {
        console.log(`My name is ${this.name} and i am ${this.breed}`);
    }
}

const animal = new Animal("Zeus", "Lion", "South Africa" )
const bruno = new Dog("Bruno", "Dog", "England", "Stafford" ) 

// animal.introduce()
// animal.origins()

// bruno.introduce()
// bruno.thisDog()

class Rectangle {
    #width

    #height

    constructor(color, width, height) {
        this.#width = width
        this.#height = height 
        this.color = color
    }

    getShapeType() {
        return Rectangle
    }

    get getWidth () {
        return this.#width
    }

    get getHeight () {
        return this.#height
    }

    set setWidth(newWidth) {
        return this.#width = newWidth
    }

    set setHeight(newHeight) {
        return this.#height = newHeight
    }

    getArea() {
        return this.#width * this.#height
    }

    describe () {
        console.log(`This rectangle is ${this.color} and is ${this.#height} high and ${this.#width} wide`);
    }

}

const redRectangle = new Rectangle("red", 50, 20)


redRectangle.describe()
console.log(redRectangle.getArea()); 

redRectangle.setHeight = 30
redRectangle.setWidth = 60
console.log(redRectangle.getArea()); 


class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
        console.log(`You deposited ${amount} into account ${this.accountNumber}`);
    } 

    withdraw(amount) {
       if(amount <= this.balance) {
        console.log(`You withdrawn ${amount} from account ${this.accountNumber}`);
       } else {
        console.log(`You have insuficient balance for account ${this.accountNumber}`);
       }

    }

    getBalance() {
        console.log(`Account: ${this.accountNumber}, Balance: ${this.balance}`);
    }
}

const petko = new BankAccount("4395443643", "Petko Petkov", 3500)

petko.deposit(1000)
petko.withdraw(4600)
petko.getBalance()

