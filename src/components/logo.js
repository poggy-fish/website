/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        varient: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
    > 
      <Image src={src} alt="nextjs landing page logo"/>
    </Link>
  );
}
