import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserMenuItemContainer } from './styles';

type Props = {
  image: string;
  text: string;
  link: string;
  handleOnClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
};

const UserMenuItem = ({ image, text, link, handleOnClick }: Props) => {
  return (
    <UserMenuItemContainer>
      <Link
        href={link}
        className="text"
        onClick={(event) => handleOnClick && handleOnClick(event)}
      >
        <Image src={image} width={24} height={24} alt={text} />
        {text}
      </Link>
    </UserMenuItemContainer>
  );
};

export default UserMenuItem;
