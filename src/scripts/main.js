import { addPlant, usePlants } from "./field.js";
// Start of JS Logic


import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import {addPlant, usePlants} from "./field.js";


const addPlantMain = addPlant();
const usePlantMain = usePlants();

const yearlyPlan = createPlan(); 

const asparagusSeed = createAsparagus();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();
const cornSeed = createCorn();

console.log("Welcome to the main module")

console.log(cornSeed);
console.log(wheatSeed);
console.log(potatoSeed);
console.log(asparagusSeed);
console.log(sunflowerSeed);
console.log(soybeanSeed);

console.log(yearlyPlan);