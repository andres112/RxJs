import { asyncScheduler } from "rxjs";

const greet = () => console.log("Hello Andres");
const greetTo = ({ name, age }) => console.log("Hello ", name, `(${age})`);

// execute function after delay
asyncScheduler.schedule(greet, 5000);

//Pass parameters as object in third position. State of observer
asyncScheduler.schedule(greetTo, 5000, { name: "Andres", age: 25 });

// Async with recursion as interval
const subs = asyncScheduler.schedule(
  function (name) {
    console.log(`Hello ${name} at ${Date.now()}`);
    this.schedule(name, 1000);
  },
  2000,
  "Felipe"
);

// asyncScheduler for unsubscribe
asyncScheduler.schedule(() => subs.unsubscribe(), 10000);
