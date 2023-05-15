import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalPrintStyled,
  Overlay,
  ButtonClose,
  ButtonPrint,
  ButtonContainer,
} from './Modal.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import photo from '../../img/photo.jpg';
import { nanoid } from 'nanoid';

const modalPrintRoot = document.querySelector('#modalPrint-root');

export const ModalPrint = ({ onClose }) => {
  const { selected } = useContext(ThrowContext);
  const {
    phone,
    email,
    skills,
    job,
    name,
    about,
    portfolios,
    education,
    jobs,
  } = selected;

  useEffect(() => {
    if (window) {
      window.addEventListener('keydown', onClickEscape);
    }
    return () => {
      window.removeEventListener('keydown', onClickEscape);
    };
  });

  const onClickEscape = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const onClickButtonClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const onClickPrint = e => {
    if (e.currentTarget === e.target) {
      document.querySelector('.button__container').style.display = 'none';
      window.print();
      window.onafterprint = document.querySelector(
        '.button__container'
      ).style.display = 'flex';
    }
  };

  return createPortal(
    <Overlay onClick={onClickBackdrop}>
      <ModalPrintStyled>
        <ButtonContainer className="button__container">
          <ButtonPrint className="button__print" onClick={onClickPrint} />
          <ButtonClose className="button__close" onClick={onClickButtonClose} />
        </ButtonContainer>
        <div style={{ width: '30%', height: '100%' }}>
          <img src={photo} alt="face" width="100%"></img>
          <div style={{ color: 'white', padding: '32px' }}>
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ marginBottom: '10px' }}>Contacts</h2>
              <ul style={{ listStyleType: 'circle' }}>
                <li key={nanoid()} style={{ marginBottom: '5px' }}>
                  <a href={`tel:${phone}`}>
                    Phone:
                    <p>{phone}</p>
                  </a>
                </li>
                <li key={nanoid()}>
                  <a href={`mailto:${email}`}>
                    E-mail:
                    <p>{email}</p>
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ marginBottom: '10px' }}>Tech Skills</h2>
              <ul style={{ listStyleType: 'circle' }}>
                {Object.values(Object.values(skills)[1])[0].map(skill => (
                  <li key={nanoid()} style={{ marginBottom: '5px' }}>
                    <p>{Object.values(skill)[0]}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ marginBottom: '10px' }}>Soft Skills</h2>
              <ul style={{ listStyleType: 'circle' }}>
                {Object.values(Object.values(skills)[0])[0].map(skill => (
                  <li key={nanoid()} style={{ marginBottom: '5px' }}>
                    <p>{Object.values(skill)[0]}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '70%',
            backgroundColor: 'white',
            color: '#123456',
            padding: '32px',
          }}
        >
          <div>
            <h3 style={{ marginBottom: '30px' }}>{job}</h3>
            <h1 style={{ marginBottom: '50px', fontSize: '40px' }}>{name}</h1>
            <p style={{ marginBottom: '20px' }}>
              {about.split('<br>').map(p => (
                <span key={nanoid()} style={{ display: 'inline-block' }}>
                  {p}
                </span>
              ))}
            </p>
          </div>
          <div>
            <ul>
              <li>
                <div style={{ marginBottom: '20px' }}>
                  <h2 style={{ marginBottom: '10px' }}>Projects</h2>
                  <ul style={{ listStyleType: 'circle' }}>
                    {Object.values(Object.values(portfolios)).map(portfolio => (
                      <li key={nanoid()} style={{ marginBottom: '5px' }}>
                        <a href={Object.values(portfolio)[1]}>
                          {Object.values(portfolio)[0]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <div style={{ marginBottom: '20px' }}>
                  <h2 style={{ marginBottom: '10px' }}>Work Experience</h2>
                  <ul style={{ listStyleType: 'circle' }}>
                    {Object.values(Object.values(jobs)).map(job => (
                      <li key={nanoid()} style={{ marginBottom: '5px' }}>
                        <p
                          style={{
                            marginBottom: '5px',
                            textTransform: 'capitalize',
                          }}
                        >
                          <b>{Object.values(job)[0]}</b> -{' '}
                          <span>{Object.values(job)[3]}</span>
                        </p>
                        <p style={{ fontSize: '12px' }}>
                          <span>{Object.values(job)[1]} - </span>
                          <span>{Object.values(job)[2]} | </span>
                          <span>{Object.values(job)[5]}, </span>
                          <span>{Object.values(job)[6]}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h2 style={{ marginBottom: '10px' }}>Education</h2>
                  <ul style={{ listStyleType: 'circle' }}>
                    {Object.values(Object.values(education)).map(edu => (
                      <li key={nanoid()} style={{ marginBottom: '5px' }}>
                        <p style={{ marginBottom: '5px' }}>
                          <b>{Object.values(edu)[0]}</b> -{' '}
                          <span>{Object.values(edu)[1]}</span>
                        </p>
                        <p style={{ fontSize: '12px' }}>
                          <span>{Object.values(edu)[4]} - </span>
                          <span>{Object.values(edu)[5]} | </span>
                          <span>{Object.values(edu)[2]}, </span>
                          <span>{Object.values(edu)[3]}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </ModalPrintStyled>
    </Overlay>,
    modalPrintRoot
  );
};
