'use strict'

// ## Задание 2

// Перепиши функцию `toggleUserState()` так, чтобы она не использовала
// callback-функцию `callback`, а принимала всего два параметра `allUsers` и
// `userName` и возвращала промис.


const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise ((resolve, reject) => {
  const updatedUsers = allUsers.map(user =>{  
    if(user.name === userName){
    resolve({...user, active:!user.active});
    }
    reject (user);
  } 
 )
})
}

const logger = updatedUsers => console.table(updatedUsers);
toggleUserState(users, 'Mango').then(logger);