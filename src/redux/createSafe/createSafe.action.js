
export const createSafe = (safeDetails) => ({
    type: "SET_CREATE_SAFE",
    payload: safeDetails,
});
export const deleteItem = (index) => ({
           type: "DELETE_ITEM",
            payload: index,
    });

    export const EditItem = (safeDetails) => ({
        type: "EDIT_ITEM",
         payload: safeDetails,
 });

