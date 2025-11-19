# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

In your own words, define what **inheritance** is in object-oriented programming. Then, explain what benefits it provides to developers who use it. Consider what problem it solves — what would be harder or messier without inheritance?

## Response 1

***Inheritance*** is when a ***subclass*** can share and access the properties of the ***parent class***. We access the properties using the `super` keyword. The benefit that inheritance provides is, it allows us to not have to write as much code. It makes our code more **functional** because we don't have to keep rewriting the code everytime we make a new class. It reduces **duplicates** and makes the code more efficient and organized.

---

## Prompt 2

Consider these classes:

```js
class Animal {
  eat() { return "eating"; }
}

class Dog extends Animal {
  bark() { return "woof"; }
}

class Puppy extends Dog {
  play() { return "playing"; }
}

const rex = new Puppy();
```

Explain what happens when `rex.eat()` is invoked. In your answer, describe the role of **inheritance** and the **prototype chain**.

## Response 3

When `rex.eat()` is invoked, JavaScript accesses the `eat()` method from the `Animal` class and returns the string `"eating"`.

The role of ***inheritance*** is that it allows `Puppy` to use methods defined in its parent classes, like `Animal`. JavaScript follows the prototype chain to locate the `eat()` method in the parent class by searching for it.

--- 

## Prompt 3

Look at these classes:

```js
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `${this.name} earns $${this.salary}`;
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary)
        this.department = department;
    }

    getDetails() {
        return (`The employee's name is ${this.name}, the employee's salary is ${this.salary}, and their department info is ${this.department}.`)
    }
}

const mgr = new Manager("Alice", 80000, "Engineering");
console.log(mgr.getDetails());
```

Complete the `Manager` class by filling in the `constructor` and `getDetails` methods. Explain why you need to use `super` in each method and what would happen if you didn't use it.

## Response 3

You use `super()` to call the parent class `Employee`'s constructor so that `name` and `salary` are set correctly.  Subclasses are not allowed to access `this` until after the parent class constructor has been called. Without `super()`, this is uninitialized, so the object can’t be created properly. Using `super` in methods lets the subclass reuse the parent’s logic instead of rewriting it.