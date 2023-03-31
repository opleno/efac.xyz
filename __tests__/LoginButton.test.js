import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginButton from '../components/Layout/LoginButton';
import Image from 'next/image';

// // Mock Next.js Image component
// jest.mock('next/image', () => ({
//   __esModule: true,
//   default: (props) => <img {...props} />,
// }));

// describe('LoginButton', () => {
//   const profileImage = '/path/to/profile-image.jpg';

// ('renders the button with an image', () => {
//     render(<LoginButton />);
//     const button = screen.getByRole('button');
//     const img = screen.getByAltText('Profile Image');
//     expect(image).toHave



// Mock the Next.js Image component
jest.mock('next/image', () => {
    return ({ src, alt, width, height, className }) =>(
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  });
  
  describe('LoginButton', () => {
    it('should render the button with profile image', () => {
      const profileImage = 'public/images/profile.svg';
      render(<LoginButton profileImage={profileImage} />);
  
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
  
      const image = screen.getByAltText('Profile Image');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', profileImage);
      expect(image).toHaveAttribute('width', '24');
      expect(image).toHaveAttribute('height', '24');
      expect(image).toHaveClass('rounded-full');
    });
  });