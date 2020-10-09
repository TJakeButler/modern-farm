// Start of JS Logic


import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";




const asparagusSeed = createAsparagus();
const yearlyPlan = createPlan(); 
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();

const cornSeed = createCorn();

console.log("Welcome to the main module")

console.log(cornSeed);
console.log(potatoSeed);
console.log(asparagusSeed);
console.log(sunflowerSeed);
console.log(soybeanSeed);
console.log(yearlyPlan);