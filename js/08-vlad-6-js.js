import users from "./users.js";

// Массив имен всех пользователей у которых есть друг с указанным именем.

// // вар 1
// const getUsersWithFriend = (users, friendName) => {
//   // твой код
//   return users
//     .filter((user) => user["friends"].includes(friendName))
//     .map((user) => user.name);
// };

// // вар 2
const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.some((friends) => friends === friendName))
    .map((user) => user.name);

// // вар 3
// const getUsersWithFriend = (users, friendName) => {
//   const arreyNameFriends = users.reduce(function (userName, user) {
//     if (
//       user.friends.some(function (friend) {
//         return friend === friendName;
//       })
//     ) {
//       userName.push(user.name);
//     }
//     return userName;
//   }, []);
//   return arreyNameFriends;
// };

console.log(getUsersWithFriend(users, "Briana Decker"));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, "Goldie Gentry"));
// [ 'Elma Head', 'Sheree Anthony' ]
