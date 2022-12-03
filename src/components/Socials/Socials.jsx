import { Img } from './Socials.styled';
import instagram from '../../img/socials_icons/instagram.svg';
import twitter from '../../img/socials_icons/twitter.svg';
import facebook from '../../img/socials_icons/facebook.svg';
import linkedin from '../../img/socials_icons/linkedin.svg';


export const Socials = () => {
  return (
                <ul>
                  <li>
                    <a href="" aria-label="Icon Instagram">
                      <Img src={instagram} alt="Icon Instagram" width="20" height="20" />
                    </a>
                  </li>
                  <li>
                    <a href="" aria-label="Icon Twitter">
                      <Img src={twitter} alt="Icon Twitter" width="20" height="20" />
                    </a>
                  </li>
                  <li>
                    <a href="" aria-label="Icon Facebook">
                      <Img src={facebook} alt="Icon Facebook" width="20" height="20" />
                    </a>
                  </li>
                  <li>
                    <a href="" aria-label="Icon LinkedIn">
                      <Img src={linkedin} alt="Icon LinkedIn" width="20" height="20" />
                    </a>
                  </li>
                </ul>
  );
};


