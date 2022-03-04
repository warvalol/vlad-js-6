import users from "./users.js";

// Массив имен (поле name) людей,
// отсортированных в зависимости от количества их друзей(поле friends)

// const getNamesSortedByFriendsCount = (users) => {
//   // твой код
//   const sortByNumOfFriends = (userOne, userTwo) =>
//     userOne["friends"].length - userTwo["friends"].length;
//   return users.sort(sortByNumOfFriends);
// };

// const getNamesSortedByFriendsCount = (users) => {
//   return users
//     .sort((curentUser, nextUser) => curentUser.length - nextUser.length)
//     .map((user) => user.name);
// };

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
