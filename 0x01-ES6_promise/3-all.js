import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  Promise.all([promise1, promise2])
    .then((all) => {
      console.log(`${all[0].body} ${all[1].firstName} ${all[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
