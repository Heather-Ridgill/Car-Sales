//exporting action type strings to avoid misspelling later
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const BUY_ITEM = "BUY_ITEM";

//built action creators
export const removeFeature = feature => {
  // takes in a single parameter
  console.log(feature);
  return {
    type: REMOVE_FEATURE, //uses variable declaration to avoid misspelling
    payload: feature // passes payload of parameter
  };
};

export const buyItem = item => {
  return {
    type: BUY_ITEM,
    payload: item
  };
};
