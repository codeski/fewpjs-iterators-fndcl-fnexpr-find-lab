function superbowlWin(arrayOfObj) {
    const win = arrayOfObj.find( function(obj) {
        if (obj.result === "W") { 
            return obj
        }
    })
    if (win) {
        return win.year
    }
}
