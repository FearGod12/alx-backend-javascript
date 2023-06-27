import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const myarray = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          myarray.push({ status: result.status, value: result.value });
        } else {
          myarray.push({ status: result.status, value: result.reason });
        }
      });
      return myarray;
    });
}
