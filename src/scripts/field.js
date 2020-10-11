const fieldArray = []

export const addPlant = (seedObj) => {
    fieldArray.push(seedObj);
    return fieldArray;
}

export const usePlants = () => {
    return fieldArray;
}