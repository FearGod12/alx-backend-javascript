import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  if (photo.status === 'rejected' || user.status === 'rejected') {
    return { photo: null, user: null };
  }
  return { photo, user };
}
