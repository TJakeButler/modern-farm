const fieldArray = []
/* 
        This function accepts one of the seeds objects as a param and pushes it to array

*/
export const addPlant = (seedObj) => {
    fieldArray.push(seedObj);

}

/* This is usePlants is like the DataProvider */

export const usePlants = () => {
    return fieldArray;
}