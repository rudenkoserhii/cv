import { Img, ListStyled, ListItem, LinkStyled } from './Socials.styled';
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';
import { nanoid } from 'nanoid';


export const Socials = () => {
  const { selected } = useContext(ThrowContext);

  if (!selected) {
    return null;
  }

  return (
    <ListStyled>
      {selected.socials.map(({ name, url, icon }) => 
        <ListItem key={nanoid()}>
          <LinkStyled href={url} aria-label={`Icon ${name}`} target="_blank">
            <Img src={icon} alt={`Icon ${name}`} width="20" height="20" />
          </LinkStyled>
        </ListItem>
      )}
    </ListStyled>
  )
};


