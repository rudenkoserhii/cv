import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';
import { Context } from './Context/Context';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const About = lazy(() => import('../pages/About/About'));
const Portfolio = lazy(() => import('../pages/Portfolio/Portfolio'));
const Education = lazy(() => import('../pages/Education/Education'));
const Skills = lazy(() => import('../pages/Skills/Skills'));
const TechSkills = lazy(() => import('../pages/TechSkills/TechSkills'));
const SoftSkills = lazy(() => import('../pages/SoftSkills/SoftSkills'));
const Experience = lazy(() => import('../pages/Experience/Experience'));
const ExperienceItem = lazy(() => import('../components/ExperienceItem/ExperienceItem'));

export const App = () => {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} >
            <Route path=":company" element={<ExperienceItem />} />
          </Route>
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="skills" element={<Skills />} />
          <Route path="skills/tech" element={<TechSkills />} />
          <Route path="skills/soft" element={<SoftSkills />} />
          </Route>
      </Routes>
    </Context>
  );
};





















// import { useState, useEffect } from 'react';
// import { Searchbar } from './Searchbar/Searchbar'
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
// import { Wrap, ErrorMessage } from './App.styled';
// import fetchAPI from './API/API';
// import ScrollToBottom from './ScrollToBottom/ScrollToBottom'
// import { BrowserRouter } from 'react-router-dom';

// const Status = {
//     IDLE: 'idle',
//     PENDING: 'pending',
//     RESOLVED: 'resolved',
//     REJECTED: 'rejected',}


// export const App = () => {
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState(Status.IDLE);
//   const [searchValue, setSearchValue] = useState('');
//   const [page, setPage] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedId, setSelectedId] = useState(0);
//   const [total, setTotal] = useState(0);

//   useEffect( () => {

//     async function fetchImages () {
//       if (!searchValue) {
//         return;
//       }

//       setStatus(Status.PENDING);

//       await fetchAPI(page, searchValue)
//         .then(responce => {
//           if (responce.total === 0) {
//             return Promise.reject(new Error(`No pictures with word "${searchValue}"`))
//           }
//             setTotal(Math.ceil(responce.total / 12));
//             setImages(i=>{return ((page === 1) ? ([...responce.hits]) : ([...i, ...responce.hits]))});
//             setStatus(Status.RESOLVED);
//         })
//         .catch(error => {
//           setError(error);
//           setStatus(Status.REJECTED);
//         });
    
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',})
//     };
//     fetchImages ()
//   }, [searchValue, page]);



  
//   const onSubmit = (value, page) => {
//     setSearchValue(value);
//     setPage(page);
//   }

//   const toggleModal = (id) => {
//     setShowModal(!showModal);
//     setSelectedId(id);
//   };

//     return (
//       <BrowserRouter >
//         <main className="App">
//           <Searchbar onSubmit={onSubmit}/>
//           <Wrap>

//             {(status === Status.RESOLVED) && (<>
//               <ImageGallery images={images} toggleModal={toggleModal}/>
//                 { (page < total ) &&
//                 <><ScrollToBottom/><Button onSubmit={onSubmit} page={page} searchValue={searchValue}/></>}
//               </>)}
//             {(status === Status.PENDING) && <Loader/>}
//             {(status === Status.REJECTED) && <ErrorMessage>{error.message}</ErrorMessage>}
//             {(showModal) && <Modal selectedId={selectedId} images={images} onClose={toggleModal}/>}
//           </Wrap>
//         </main>
//       </BrowserRouter>
//   )
// }

