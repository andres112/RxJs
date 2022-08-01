import { fromEvent } from "rxjs";

// To get the type fo the event just console.log the event
const src1$ = fromEvent<PointerEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => {
    console.log("next: ", val);
    if (val.type === "click") {
      // destructuring
      const { x, y } = val;
      console.log("x: ", x, "y: ", y);
    }
    if (val.type === "keyup") {
      console.log(`"${val.key}"`);
    }
  },
};

src1$.subscribe(observer);
src2$.subscribe(observer);
