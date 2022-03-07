import users from "./users.js";

// Получить массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений 
// и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   // твой код
//   return Array.from(new Set(users.flatMap((user) => user.skills).sort()));
// };

// const getSortedUniqueSkills = (users) => {
//   let skillsNotUnique = users.reduce(
//     (acc, { skills }) => [...acc, ...skills],
//     []
//   );

//   skillsNotUnique = skillsNotUnique.sort();

//   return [...new Set(skillsNotUnique)];
// };

const getSortedUniqueSkills = (users) => {
  const skillsUser = users
    .reduce(function (skil, user) {
      skil.push(...user.skills);
      return skil;
    }, [])
    .sort();

  const filterperley = skillsUser.filter(function (skill, index) {
    return skillsUser.indexOf(skill) === index;
  });
  return filterperley;
};


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]