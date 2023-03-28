import Image from "next/image";

const WebLogo = () => (
  <Image
    src="/images/profile.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Web Logo"
    className="web-logo"
  />
);

export default WebLogo;
