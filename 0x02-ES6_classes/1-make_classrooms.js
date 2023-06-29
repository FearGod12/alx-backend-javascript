import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const myarray = [];
  for (const num of [19, 20, 34]) {
    myarray.push(new ClassRoom(num));
  }
  return myarray;
}
