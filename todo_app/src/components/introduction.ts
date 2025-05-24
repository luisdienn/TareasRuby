// Primitivos - Tipos de datos básicos en TypeScript que representan valores simples

let string = "Hola"
let number = 10
let boolean = true
let nulo = null
let indefinido = undefined

// Objetos - Estructuras de datos que almacenan pares clave-valor

let object = {
    name: "Juan", 
    age: 20,
    address: "Calle 123"
}

object.name = "Maria"
object.age = 21

object["name"] = "Pedro";


// Arrays - Colecciones ordenadas de elementos del mismo tipo

let arrayNumbers = [1, 2, 3]
let arrayStrings = ["Hola", "Mundo"]
let arrayObject = [{name: "Juan", age: 20}, {name: "Maria", age: 21}]

arrayNumbers.push(4)
arrayStrings.push("Hola")
arrayObject.push({name: "Pedro", age: 22})

arrayNumbers.pop()

arrayNumbers[0] = 100

// Types - Definiciones de tipos personalizados que permiten crear interfaces y estructuras de datos reutilizables

const user = {
    name: "Juan",
    age: 20,
    isAdmin: true
}

type User = {
    name: string
    age: number
    role: string
    friends?: User[]
}

const user2: User = {
    name: "Juan",
    age: 20,
    role: "admin"
}

const user3: User = {
    name: "Juan",
    age: 20,
    role: "user",
    friends: [user2]
}

// ------------------------------------------------------------

// Ejercicio 1 - Crear un tipo para un producto


type Product = {
    name: string,
    price: number,
    images: string[],
    status: string
}

const product: Product = {
    name: "Laptop",
    price: 1000,
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    status: "active"
}
// ------------------------------------------------------------

// Enums - Tipos de datos que permiten definir un conjunto de constantes con nombres
// Los enums pueden ser numéricos o de cadena de texto

// enum UserRole {    // Son solo numeros
//     ADMIN,
//     USER,
//     GUEST 
// }

enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

type UserNew = {
    name: string
    age: number
    role: UserRole
    friends?: UserNew[]
}

const userNew: UserNew = {
    name: "Juan",
    age: 20,
    role: UserRole.ADMIN,
}

// ------------------------------------------------------------
// Ejercicio 2 - Crear un enum para status de un producto

const product2 = {
    name: "Laptop",
    price: 1000,
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    status: "active" // active, inactive, deleted
}

// ------------------------------------------------------------

// Funciones - Bloques de código reutilizables que pueden recibir parámetros y retornar valores

function sayHello(name: string) {
    console.log(`Hello ${name}`)
    return `Hello ${name}`
}

sayHello("Juan")

function fireUser(firstName: string, lastName: string, isNice: boolean) {
    if (isNice) {
        console.log(`${firstName} ${lastName} is a nice user`)
    } else {
        console.log(`${firstName} ${lastName} is a bad user`)
    }
    fireUser2()
}

// Alternativa con arrow function - Sintaxis moderna de ES6 para definir funciones de manera más concisa

const fireUser2 = (firstName: string, lastName: string, isNice: boolean) => {
    if (isNice) {
        console.log(`${firstName} ${lastName} is a nice user`)
    } else {
        console.log(`${firstName} ${lastName} is a bad user`)
    }
}

// Podemos englobar los parametros en un objeto para que sea mas flexible - Patrón de diseño que mejora la mantenibilidad y escalabilidad del código

const fireUser3 = ({firstName, lastName, isNice}: {firstName: string, lastName: string, isNice: boolean}) => {
    if (isNice) {
        console.log(`${firstName} ${lastName} is a nice user`)
    } else {
        console.log(`${firstName} ${lastName} is a bad user`)
    }
}

const fireUser4 = ({name, role}: UserNew) => {
    if (role === UserRole.ADMIN) {
        console.log(`${name} is not fired`)
    } else {
        console.log(`${name} is fired`)
    }
}

// Tipando el resultado de una funcion - Especificación explícita del tipo de retorno de una función
// Esto fuerza a que la funcion retorne el tipo de valor especificado

function sum(a: number, b: number): number {
    return a + b
}

// O se puede inferir el tipo de retorno - TypeScript puede determinar automáticamente el tipo de retorno basado en la implementación

function sum2(a: number, b: number) {
    return a + b
}

// Funciones con parametros opcionales - Parámetros que pueden ser omitidos al llamar a la función

function sayHello2(name: string, lastName?: string) {
    if (lastName) {
        console.log(`Hello ${name} ${lastName}`)
    } else {
        console.log(`Hello ${name}`)
    }
}

sayHello2("Juan")
sayHello2("Juan", "Perez")

// Funciones con parametros por defecto - Parámetros que tienen un valor predefinido si no se proporciona uno

function sayHello3(name: string, lastName: string = "Doe") {
    console.log(`Hello ${name} ${lastName}`)
}

// Funciones con parametros rest - Permiten pasar un número variable de argumentos como un array
// Los parametros rest son un array de parametros
// Se puede usar solo un parametro rest y debe ser el ultimo parametro de la funcion

function sum3(param1: string, ...numbers: number[]) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}

sum3("Hola", 1, 2, 3, 4, 5)



// Ejercicio 3 - tipar los parametros de una funcion

function updateProduct(name, price, images) {
    // some logic ...
    return {
        name,
        price,
        images
    }
}

updateProduct("Laptop", 1500, ["image1.jpg", "image2.jpg", "image3.jpg"])

// ------------------------------------------------------------

// Clases - Plantillas para crear objetos con propiedades y métodos

class User {
    name: string
    age: number
}

const user1 = new User()
user1.name = "Juan"
user1.age = 20

console.log(user1)


// ------------------------------------------------------------