const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let result = 0
    for(let num in allUsers) {
      if(allUsers[num].online === true) {
        result++
      }
    }
    return result
    // Only change code above this line
  }
  
  console.log(countOnline(users));