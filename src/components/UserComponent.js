import { PhotoUser } from '../styles/User';
import defaultPhoto from '../assets/images/user.png';
const UserComponent = () => {
  return (
    <PhotoUser>
      <img src={defaultPhoto} alt="avatar" />
    </PhotoUser>
  );
};

export { UserComponent };
