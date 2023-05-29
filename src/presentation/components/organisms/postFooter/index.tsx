import Link from 'next/link';
import { PostFooterContainer } from './postFooter.styles';

const PostFooter = () => {
  const listLinks = [
    {
      name: 'Términos y Condiciones |',
      link: 'https://www.easy.cl/terminos-y-condiciones',
    },
    {
      name: 'Políticas de Privacidad |',
      link: 'https://www.easy.cl/politica-de-privacidad',
    },
    {
      name: 'Compromisos y Políticas',
      link: 'https://www.cencosud.com/sostenibilidad',
    },
  ];

  return (
    <PostFooterContainer>
      <p>Copyright © 2023 Cencosud - Easy </p>
      <nav>
        <ul>
          {listLinks.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </PostFooterContainer>
  );
};
export default PostFooter;
