// import { createPlan } from "./plan.js";
// import { plantSeeds } from "./tractor.js";


import { createPlan } from "./plan.js";
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js";




let yearlyPlan = createPlan();


plantSeeds(yearlyPlan);

console.log(usePlants());

