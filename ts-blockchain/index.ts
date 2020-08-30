const name = "nicolas",
age = 24,
gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`)
};

sayHi(name, age);

export {};