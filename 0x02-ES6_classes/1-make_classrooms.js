// eslint-disable-next-line quotes
import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  const firstClass = new ClassRoom(19);
  const secondClass = new ClassRoom(20);
  const thirdclass = new ClassRoom(34);

  return [firstClass, secondClass, thirdclass];
}
