const sayHi = (name: string, age: number, gender?: string): void => {
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`)
};

sayHi("Kim", 31, "male");

export {};