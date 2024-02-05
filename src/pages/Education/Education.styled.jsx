import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  text-align: center;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  margin-bottom: ${p => p.theme.space[3]}px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
    text-align: left;
  }
`;

export const Paragraph = styled.span`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-size: ${p => p.theme.fontSizes.xxs};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxs};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xs};
    text-align: left;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  height: fit-content;

  gap: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.space[4]}px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    gap: ${p => p.theme.space[3]}px;
  }
`;

export const ListCertificateStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* flex: 1; */
  /* overflow-y: scroll; */

  gap: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${p => p.theme.space[4]}px;
  }

  @media screen and (min-width: 1280px) {
    gap: ${p => p.theme.space[3]}px;
  }
`;

export const ListItem = styled.li`
  background-image: url(${p => p.logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  pointer-events: none;

  width: auto;

  @media screen and (min-width: 768px) {
    width: calc(
      (100% - ${p => p.theme.space[5]}px * 2 - ${p => p.theme.space[4]}px) / 2
    );
  }

  @media screen and (min-width: 1280px) {
    width: calc(
      (100% - ${p => p.theme.space[6]}px * 2 - ${p => p.theme.space[3]}px) / 2
    );
  }
`;

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: calc(100dvh - 620px);
  width: auto;

  @media screen and (min-width: 768px) {
    max-height: calc(100dvh - 600px);
  }
  @media screen and (min-width: 1280px) {
    max-height: calc(100dvh - 420px);
  }
`;

export const ListItemCertificate = styled.li`
  display: block;
  height: 100%;
  width: fit-content;
`;

export const LinkStyled = styled.a`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  & .certName,
  & .certImg {
    transition: all 200ms ease;
  }

  &:hover .certName {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};

    transition: all 200ms ease;
  }
  &:hover .certImg {
    transform: scale(1.05);

    transition: all 200ms ease;
  }
`;
