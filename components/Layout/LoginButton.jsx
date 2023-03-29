import Image from 'next/image';
import profileImage from '../../public/images/profile.svg';

const LoginButton = () => {
  return (
    <button className="flex items-center space-x-2">
      <Image src={profileImage} alt="Profile Image" className="rounded-full" width={24} height={24} />
      {/* <span>Login</span> */}
    </button>
  );
};

export default LoginButton;