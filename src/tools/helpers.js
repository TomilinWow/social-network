

export const updateObjectInArray = (items, itemId, objPropName, NewObj) => {
   return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...NewObj}
        }
        return u;
    })
}