import { nanoid } from "nanoid";

import photo_01_jpg from './img/hero/photo_01.jpg';
import photo_02_jpg from './img/hero/photo_02.jpg';
import photo_03_jpg from './img/hero/photo_03.jpg';
import photo_04_jpg from './img/hero/photo_04.jpg';
import photo_05_jpg from './img/hero/photo_05.jpg';

import photo_01_webp from './img/hero/photo_01.webp';
import photo_02_webp from './img/hero/photo_02.webp';
import photo_03_webp from './img/hero/photo_03.webp';
import photo_04_webp from './img/hero/photo_04.webp';
import photo_05_webp from './img/hero/photo_05.webp';

import kominmet from './img/company_logos/kominmet.png';
import ukrauto from './img/company_logos/ukrauto.png';
import karcher from './img/company_logos/karcher.png';
import pegas from './img/company_logos/pegas.png';
import goit from './img/company_logos/goit.png';

import communication from './img/skills/soft/communication.svg';
import leadership from './img/skills/soft/leadership.svg';
import adaptability from './img/skills/soft/adaptability.svg';
import problemSolving from './img/skills/soft/problemSolving.svg';
import creativity from './img/skills/soft/creativity.svg';
import workEthic from './img/skills/soft/workEthic.svg';
import timeManagement from './img/skills/soft/timeManagement.svg';
import teamwork from './img/skills/soft/teamwork.svg';

import html from './img/skills/tech/html.png';
import css from './img/skills/tech/css.png';
import scss from './img/skills/tech/scss.png';
import bem from './img/skills/tech/bem.png';
import js from './img/skills/tech/js.png';
import react from './img/skills/tech/react.png';
import node from './img/skills/tech/node.png';
import github from './img/skills/tech/github.png';

import preview_icecream from './img/portfolios/preview_icecream.jpg';
import preview_filmoteka from './img/portfolios/preview_filmoteka.jpg';
import preview_github from './img/portfolios/preview_github.jpg';
import preview_resume from './img/portfolios/preview_resume.jpg';

import instagram from './img/socials_icons/instagram.svg';
import twitter from './img/socials_icons/twitter.svg';
import facebook from './img/socials_icons/facebook.svg';
import linkedin from './img/socials_icons/linkedin.svg';


const db = {
  peoples: [
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      job: 'Developer',
      urlJpg: photo_01_jpg,
      urlWebp: photo_01_webp,
      date_created: '2022-08-28T14:00:00.000Z',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/rudenko.sergey.v/',
          icon: instagram,
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/profile.php?id=100005434448335',
          icon: facebook,
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/serhii-rudenko-559a0215b/',
          icon: linkedin,
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/SerhiiRudenkoV/',
          icon: twitter,
        },
      ],
      email: 'rudenko.serhii.v@gmail.com',
      phone: '+380504521144',
      about: 'Understanding the technology that drives a website. Having needed Tech Skills, Soft Skills & some specific Workplace Skills, such as: Creativity, Problem-solving, Communication, Teamwork.',
      education: {
        name: 'National Railway University',
        speciality: 'Management in Railway',
        country: 'Ukraine',
        city: 'Dnipro',
        dateStart: 'September 1997',
        dateEnd: 'May 2003',
      },
      jobs: [{
        companyName: "kominmet",
        dateStart: "May 2003",
        dateEnd: "December 2003",
        position: "Dispatcher",
        responsibilities: [
          "Ensure compliance with all railroad rules, procedures, and regulations for safety and operations.",
          "Direct and coordinate railroad traffic, issue permits and authorities, monitor all rail movements and maintain computerized records of all activities.",
          "Know assigned territory and keep informed of changes in the physical characteristics.",
          "Maintain familiarity with scheduled trains, destinations, times of arrivals and departures.",
          "Communicate with personnel on weather or any environmental conditions affecting train movement.",
          "Coordinate movement of trains according to operating plan and customer needs.",
          "Monitor train and track movements.",
          "Remotely control track switches and traffic signals and apply and remove blocking devices.",
          "Report alleged violations of operating rules and any irregularity relating to the movement of trains.",
          "Plan in advance for smooth and effective movement of priority trains, trains containing hazardous material or restricted shipments, and meets/passes to avoid unnecessary delays.",
          "Coordinate track usage with Engineering Department personnel.",
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: kominmet,
        },
        {
        companyName: "ukrAuto",
        dateStart: "January 2004",
        dateEnd: "September 2004",
        position: "Ingeneer",
        responsibilities: [
          "Making plans using detailed drawings.",
          "Preparing estimates and budgets.",
          "Creating accurate project specifications.",
          "Designing engineering experiments.",
          "Creating technical reports for customers.",
          "Completing regulatory documents concerning safety issues.",
          "Finishing projects on time and within budget.",
          "Communicating with clients and coworkers about analysis results.",
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: ukrauto,
        },
        {
        companyName: "karcher",
        dateStart: "Oktober 2004",
        dateEnd: "November 2006",
        position: "Sales Manager",
        responsibilities: [
          'Achieve growth and hit sales targets by successfully managing the sales team.', 
          'Design and implement a strategic business plan that expands company’s customer base and ensure it’s strong presence.', 
          'Own recruiting, objectives setting, coaching and performance monitoring of sales representatives.', 
          'Build and promote strong, long-lasting customer relationships by partnering with them and understanding their needs.', 
          'Present sales, revenue and expenses reports and realistic forecasts to the management team.',  
          'Identify emerging markets and market shifts while being fully aware of new products and competition status.',
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: karcher,
        },
        {
        companyName: "pegas",
        dateStart: "December 2006",
        dateEnd: "February 2022",
        position: "Manager",
        responsibilities: [
          'Delegating responsibilities and supervising business operations', 
          'Hiring, training, motivating and coaching employees as they provide attentive, efficient service to customers, assessing employee performance and providing helpful feedback and training opportunities.', 
          'Resolving conflicts or complaints from customers and employees.', 
          'Monitoring company activity and ensuring it is properly provisioned and staffed.', 
          'Analyzing information and processes and developing more effective or efficient processes and strategies.', 
          'Establishing and achieving business and profit objectives.', 
          'Ensuring staff members follow company policies and procedures.', 
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: pegas,
        },
        {
        companyName: "goit",
        dateStart: "April 2022",
        dateEnd: "up to now",
        position: "Trainee",
        responsibilities: [
          'Building the front-end portion of websites and web applications.', 
          'Using web languages such as HTML, CSS, and JavaScript.',
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: goit,
        },
      ],
      portfolios: [
        {
          name: 'Ice-Cream',
          url: 'https://hresko.github.io/Ice-Cream/',
          preview: preview_icecream,
        },
        {
          name: 'Filmoteka',
          url: 'https://juliagolban.github.io/Filmoteka_JS/',
          preview: preview_filmoteka,
        },
        {
          name: 'Resume',
          url: 'https://rudenkoserhii.github.io/cv/',
          preview: preview_resume,
        },
        {
          name: 'GitHub',
          url: 'https://github.com/rudenkoserhii',
          preview: preview_github,
        },
      ],
      skills: [
        {soft: [
            {
              name: 'communication',
              icon: communication,
            },
            {
              name: 'leadership',
              icon: leadership,
            },
            {
              name: 'adaptability',
              icon: adaptability,
            },
            {
              name: 'problem solving',
              icon: problemSolving,
            },
            {
              name: 'creativity',
              icon: creativity,
            },
            {
              name: 'work ethic',
              icon: workEthic,
            },
            {
              name: 'time management',
              icon: timeManagement,
            },
            {
              name: 'teamwork',
              icon: teamwork,
            },
          ],
        },
        {tech: [
            {
              name: 'HTML5',
              icon: html,
            },
            {
              name: 'CSS3',
              icon: css,
            },
            {
              name: 'SCSS',
              icon: scss,
            },
            {
              name: 'BEM',
              icon: bem,
            },
            {
              name: 'JavaScript',
              icon: js,
            },
            {
              name: 'React.js',
              icon: react,
            },
            {
              name: 'Node.js',
              icon: node,
            },
            {
              name: 'GitHub',
              icon: github,
            },
          ],
        },
      ],
    },
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      job: 'Developer',
      urlJpg: photo_02_jpg,
      urlWebp: photo_02_webp,
      date_created: '2022-08-28T15:00:00.000Z',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/rudenko.sergey.v/',
          icon: instagram,
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/profile.php?id=100005434448335',
          icon: facebook,
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/serhii-rudenko-559a0215b/',
          icon: linkedin,
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/SerhiiRudenkoV/',
          icon: twitter,
        },
      ],
      email: 'rudenko.serhii.v@gmail.com',
      phone: '+380504521144',
      about: 'Understanding the technology that drives a website. Having needed Tech Skills, Soft Skills & some specific Workplace Skills, such as: Creativity, Problem-solving, Communication, Teamwork.',
      education: {
        name: 'National Railway University',
        speciality: 'Management in Railway',
        country: 'Ukraine',
        city: 'Dnipro',
        dateStart: 'September 1997',
        dateEnd: 'May 2003',
      },
      jobs: [{
        companyName: "kominmet",
        dateStart: "May 2003",
        dateEnd: "December 2003",
        position: "Dispatcher",
        responsibilities: [
          "Ensure compliance with all railroad rules, procedures, and regulations for safety and operations.",
          "Direct and coordinate railroad traffic, issue permits and authorities, monitor all rail movements and maintain computerized records of all activities.",
          "Know assigned territory and keep informed of changes in the physical characteristics.",
          "Maintain familiarity with scheduled trains, destinations, times of arrivals and departures.",
          "Communicate with personnel on weather or any environmental conditions affecting train movement.",
          "Coordinate movement of trains according to operating plan and customer needs.",
          "Monitor train and track movements.",
          "Remotely control track switches and traffic signals and apply and remove blocking devices.",
          "Report alleged violations of operating rules and any irregularity relating to the movement of trains.",
          "Plan in advance for smooth and effective movement of priority trains, trains containing hazardous material or restricted shipments, and meets/passes to avoid unnecessary delays.",
          "Coordinate track usage with Engineering Department personnel.",
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: kominmet,
        },
        {
        companyName: "ukrAuto",
        dateStart: "January 2004",
        dateEnd: "September 2004",
        position: "Ingeneer",
        responsibilities: [
          "Making plans using detailed drawings.",
          "Preparing estimates and budgets.",
          "Creating accurate project specifications.",
          "Designing engineering experiments.",
          "Creating technical reports for customers.",
          "Completing regulatory documents concerning safety issues.",
          "Finishing projects on time and within budget.",
          "Communicating with clients and coworkers about analysis results.",
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: ukrauto,
        },
        {
        companyName: "karcher",
        dateStart: "Oktober 2004",
        dateEnd: "November 2006",
        position: "Sales Manager",
        responsibilities: [
          'Achieve growth and hit sales targets by successfully managing the sales team.', 
          'Design and implement a strategic business plan that expands company’s customer base and ensure it’s strong presence.', 
          'Own recruiting, objectives setting, coaching and performance monitoring of sales representatives.', 
          'Build and promote strong, long-lasting customer relationships by partnering with them and understanding their needs.', 
          'Present sales, revenue and expenses reports and realistic forecasts to the management team.',  
          'Identify emerging markets and market shifts while being fully aware of new products and competition status.',
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: karcher,
        },
        {
        companyName: "pegas",
        dateStart: "December 2006",
        dateEnd: "February 2022",
        position: "Manager",
        responsibilities: [
          'Delegating responsibilities and supervising business operations', 
          'Hiring, training, motivating and coaching employees as they provide attentive, efficient service to customers, assessing employee performance and providing helpful feedback and training opportunities.', 
          'Resolving conflicts or complaints from customers and employees.', 
          'Monitoring company activity and ensuring it is properly provisioned and staffed.', 
          'Analyzing information and processes and developing more effective or efficient processes and strategies.', 
          'Establishing and achieving business and profit objectives.', 
          'Ensuring staff members follow company policies and procedures.', 
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: pegas,
        },
        {
        companyName: "goit",
        dateStart: "April 2022",
        dateEnd: "up to now",
        position: "Trainee",
        responsibilities: [
          'Building the front-end portion of websites and web applications.', 
          'Using web languages such as HTML, CSS, and JavaScript.',
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: goit,
        },
      ],
      portfolios: [
        {
          name: 'Ice-Cream',
          url: 'https://hresko.github.io/Ice-Cream/',
          preview: preview_icecream,
        },
        {
          name: 'Filmoteka',
          url: 'https://juliagolban.github.io/Filmoteka_JS/',
          preview: preview_filmoteka,
        },
        {
          name: 'Resume',
          url: 'https://rudenkoserhii.github.io/cv/',
          preview: preview_resume,
        },
        {
          name: 'GitHub',
          url: 'https://github.com/rudenkoserhii',
          preview: preview_github,
        },
      ],
      skills: [
        {soft: [
            {
              name: 'communication',
              icon: communication,
            },
            {
              name: 'leadership',
              icon: leadership,
            },
            {
              name: 'adaptability',
              icon: adaptability,
            },
            {
              name: 'problem solving',
              icon: problemSolving,
            },
            {
              name: 'creativity',
              icon: creativity,
            },
            {
              name: 'work ethic',
              icon: workEthic,
            },
            {
              name: 'time management',
              icon: timeManagement,
            },
            {
              name: 'teamwork',
              icon: teamwork,
            },
          ],
        },
        {tech: [
            {
              name: 'HTML5',
              icon: html,
            },
            {
              name: 'CSS3',
              icon: css,
            },
            {
              name: 'SCSS',
              icon: scss,
            },
            {
              name: 'BEM',
              icon: bem,
            },
            {
              name: 'JavaScript',
              icon: js,
            },
            {
              name: 'React.js',
              icon: react,
            },
            {
              name: 'Node.js',
              icon: node,
            },
            {
              name: 'GitHub',
              icon: github,
            },
          ],
        },
      ],
    },
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      job: 'Developer',
      urlJpg: photo_03_jpg,
      urlWebp: photo_03_webp,
      date_created: '2022-08-28T16:00:00.000Z',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/rudenko.sergey.v/',
          icon: instagram,
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/profile.php?id=100005434448335',
          icon: facebook,
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/serhii-rudenko-559a0215b/',
          icon: linkedin,
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/SerhiiRudenkoV/',
          icon: twitter,
        },
      ],
      email: 'rudenko.serhii.v@gmail.com',
      phone: '+380504521144',
      about: 'Understanding the technology that drives a website. Having needed Tech Skills, Soft Skills & some specific Workplace Skills, such as: Creativity, Problem-solving, Communication, Teamwork.',
      education: {
        name: 'National Railway University',
        speciality: 'Management in Railway',
        country: 'Ukraine',
        city: 'Dnipro',
        dateStart: 'September 1997',
        dateEnd: 'May 2003',
      },
      jobs: [{
        companyName: "kominmet",
        dateStart: "May 2003",
        dateEnd: "December 2003",
        position: "Dispatcher",
        responsibilities: [
          "Ensure compliance with all railroad rules, procedures, and regulations for safety and operations.",
          "Direct and coordinate railroad traffic, issue permits and authorities, monitor all rail movements and maintain computerized records of all activities.",
          "Know assigned territory and keep informed of changes in the physical characteristics.",
          "Maintain familiarity with scheduled trains, destinations, times of arrivals and departures.",
          "Communicate with personnel on weather or any environmental conditions affecting train movement.",
          "Coordinate movement of trains according to operating plan and customer needs.",
          "Monitor train and track movements.",
          "Remotely control track switches and traffic signals and apply and remove blocking devices.",
          "Report alleged violations of operating rules and any irregularity relating to the movement of trains.",
          "Plan in advance for smooth and effective movement of priority trains, trains containing hazardous material or restricted shipments, and meets/passes to avoid unnecessary delays.",
          "Coordinate track usage with Engineering Department personnel.",
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: kominmet,
        },
        {
        companyName: "ukrAuto",
        dateStart: "January 2004",
        dateEnd: "September 2004",
        position: "Ingeneer",
        responsibilities: [
          "Making plans using detailed drawings.",
          "Preparing estimates and budgets.",
          "Creating accurate project specifications.",
          "Designing engineering experiments.",
          "Creating technical reports for customers.",
          "Completing regulatory documents concerning safety issues.",
          "Finishing projects on time and within budget.",
          "Communicating with clients and coworkers about analysis results.",
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: ukrauto,
        },
        {
        companyName: "karcher",
        dateStart: "Oktober 2004",
        dateEnd: "November 2006",
        position: "Sales Manager",
        responsibilities: [
          'Achieve growth and hit sales targets by successfully managing the sales team.', 
          'Design and implement a strategic business plan that expands company’s customer base and ensure it’s strong presence.', 
          'Own recruiting, objectives setting, coaching and performance monitoring of sales representatives.', 
          'Build and promote strong, long-lasting customer relationships by partnering with them and understanding their needs.', 
          'Present sales, revenue and expenses reports and realistic forecasts to the management team.',  
          'Identify emerging markets and market shifts while being fully aware of new products and competition status.',
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: karcher,
        },
        {
        companyName: "pegas",
        dateStart: "December 2006",
        dateEnd: "February 2022",
        position: "Manager",
        responsibilities: [
          'Delegating responsibilities and supervising business operations', 
          'Hiring, training, motivating and coaching employees as they provide attentive, efficient service to customers, assessing employee performance and providing helpful feedback and training opportunities.', 
          'Resolving conflicts or complaints from customers and employees.', 
          'Monitoring company activity and ensuring it is properly provisioned and staffed.', 
          'Analyzing information and processes and developing more effective or efficient processes and strategies.', 
          'Establishing and achieving business and profit objectives.', 
          'Ensuring staff members follow company policies and procedures.', 
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: pegas,
        },
        {
        companyName: "goit",
        dateStart: "April 2022",
        dateEnd: "up to now",
        position: "Trainee",
        responsibilities: [
          'Building the front-end portion of websites and web applications.', 
          'Using web languages such as HTML, CSS, and JavaScript.',
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: goit,
        },
      ],
      portfolios: [
        {
          name: 'Ice-Cream',
          url: 'https://hresko.github.io/Ice-Cream/',
          preview: preview_icecream,
        },
        {
          name: 'Filmoteka',
          url: 'https://juliagolban.github.io/Filmoteka_JS/',
          preview: preview_filmoteka,
        },
        {
          name: 'Resume',
          url: 'https://rudenkoserhii.github.io/cv/',
          preview: preview_resume,
        },
        {
          name: 'GitHub',
          url: 'https://github.com/rudenkoserhii',
          preview: preview_github,
        },
      ],
      skills: [
        {soft: [
            {
              name: 'communication',
              icon: communication,
            },
            {
              name: 'leadership',
              icon: leadership,
            },
            {
              name: 'adaptability',
              icon: adaptability,
            },
            {
              name: 'problem solving',
              icon: problemSolving,
            },
            {
              name: 'creativity',
              icon: creativity,
            },
            {
              name: 'work ethic',
              icon: workEthic,
            },
            {
              name: 'time management',
              icon: timeManagement,
            },
            {
              name: 'teamwork',
              icon: teamwork,
            },
          ],
        },
        {tech: [
            {
              name: 'HTML5',
              icon: html,
            },
            {
              name: 'CSS3',
              icon: css,
            },
            {
              name: 'SCSS',
              icon: scss,
            },
            {
              name: 'BEM',
              icon: bem,
            },
            {
              name: 'JavaScript',
              icon: js,
            },
            {
              name: 'React.js',
              icon: react,
            },
            {
              name: 'Node.js',
              icon: node,
            },
            {
              name: 'GitHub',
              icon: github,
            },
          ],
        },
      ],
    },
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      job: 'Developer',
      urlJpg: photo_04_jpg,
      urlWebp: photo_04_webp,
      date_created: '2022-08-28T17:00:00.000Z',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/rudenko.sergey.v/',
          icon: instagram,
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/profile.php?id=100005434448335',
          icon: facebook,
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/serhii-rudenko-559a0215b/',
          icon: linkedin,
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/SerhiiRudenkoV/',
          icon: twitter,
        },
      ],
      email: 'rudenko.serhii.v@gmail.com',
      phone: '+380504521144',
      about: 'Understanding the technology that drives a website. Having needed Tech Skills, Soft Skills & some specific Workplace Skills, such as: Creativity, Problem-solving, Communication, Teamwork.',
      education: {
        name: 'National Railway University',
        speciality: 'Management in Railway',
        country: 'Ukraine',
        city: 'Dnipro',
        dateStart: 'September 1997',
        dateEnd: 'May 2003',
      },
      jobs: [{
        companyName: "kominmet",
        dateStart: "May 2003",
        dateEnd: "December 2003",
        position: "Dispatcher",
        responsibilities: [
          "Ensure compliance with all railroad rules, procedures, and regulations for safety and operations.",
          "Direct and coordinate railroad traffic, issue permits and authorities, monitor all rail movements and maintain computerized records of all activities.",
          "Know assigned territory and keep informed of changes in the physical characteristics.",
          "Maintain familiarity with scheduled trains, destinations, times of arrivals and departures.",
          "Communicate with personnel on weather or any environmental conditions affecting train movement.",
          "Coordinate movement of trains according to operating plan and customer needs.",
          "Monitor train and track movements.",
          "Remotely control track switches and traffic signals and apply and remove blocking devices.",
          "Report alleged violations of operating rules and any irregularity relating to the movement of trains.",
          "Plan in advance for smooth and effective movement of priority trains, trains containing hazardous material or restricted shipments, and meets/passes to avoid unnecessary delays.",
          "Coordinate track usage with Engineering Department personnel.",
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: kominmet,
        },
        {
        companyName: "ukrAuto",
        dateStart: "January 2004",
        dateEnd: "September 2004",
        position: "Ingeneer",
        responsibilities: [
          "Making plans using detailed drawings.",
          "Preparing estimates and budgets.",
          "Creating accurate project specifications.",
          "Designing engineering experiments.",
          "Creating technical reports for customers.",
          "Completing regulatory documents concerning safety issues.",
          "Finishing projects on time and within budget.",
          "Communicating with clients and coworkers about analysis results.",
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: ukrauto,
        },
        {
        companyName: "karcher",
        dateStart: "Oktober 2004",
        dateEnd: "November 2006",
        position: "Sales Manager",
        responsibilities: [
          'Achieve growth and hit sales targets by successfully managing the sales team.', 
          'Design and implement a strategic business plan that expands company’s customer base and ensure it’s strong presence.', 
          'Own recruiting, objectives setting, coaching and performance monitoring of sales representatives.', 
          'Build and promote strong, long-lasting customer relationships by partnering with them and understanding their needs.', 
          'Present sales, revenue and expenses reports and realistic forecasts to the management team.',  
          'Identify emerging markets and market shifts while being fully aware of new products and competition status.',
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: karcher,
        },
        {
        companyName: "pegas",
        dateStart: "December 2006",
        dateEnd: "February 2022",
        position: "Manager",
        responsibilities: [
          'Delegating responsibilities and supervising business operations', 
          'Hiring, training, motivating and coaching employees as they provide attentive, efficient service to customers, assessing employee performance and providing helpful feedback and training opportunities.', 
          'Resolving conflicts or complaints from customers and employees.', 
          'Monitoring company activity and ensuring it is properly provisioned and staffed.', 
          'Analyzing information and processes and developing more effective or efficient processes and strategies.', 
          'Establishing and achieving business and profit objectives.', 
          'Ensuring staff members follow company policies and procedures.', 
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: pegas,
        },
        {
        companyName: "goit",
        dateStart: "April 2022",
        dateEnd: "up to now",
        position: "Trainee",
        responsibilities: [
          'Building the front-end portion of websites and web applications.', 
          'Using web languages such as HTML, CSS, and JavaScript.',
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: goit,
        },
      ],
      portfolios: [
        {
          name: 'Ice-Cream',
          url: 'https://hresko.github.io/Ice-Cream/',
          preview: preview_icecream,
        },
        {
          name: 'Filmoteka',
          url: 'https://juliagolban.github.io/Filmoteka_JS/',
          preview: preview_filmoteka,
        },
        {
          name: 'Resume',
          url: 'https://rudenkoserhii.github.io/cv/',
          preview: preview_resume,
        },
        {
          name: 'GitHub',
          url: 'https://github.com/rudenkoserhii',
          preview: preview_github,
        },
      ],
      skills: [
        {soft: [
            {
              name: 'communication',
              icon: communication,
            },
            {
              name: 'leadership',
              icon: leadership,
            },
            {
              name: 'adaptability',
              icon: adaptability,
            },
            {
              name: 'problem solving',
              icon: problemSolving,
            },
            {
              name: 'creativity',
              icon: creativity,
            },
            {
              name: 'work ethic',
              icon: workEthic,
            },
            {
              name: 'time management',
              icon: timeManagement,
            },
            {
              name: 'teamwork',
              icon: teamwork,
            },
          ],
        },
        {tech: [
            {
              name: 'HTML5',
              icon: html,
            },
            {
              name: 'CSS3',
              icon: css,
            },
            {
              name: 'SCSS',
              icon: scss,
            },
            {
              name: 'BEM',
              icon: bem,
            },
            {
              name: 'JavaScript',
              icon: js,
            },
            {
              name: 'React.js',
              icon: react,
            },
            {
              name: 'Node.js',
              icon: node,
            },
            {
              name: 'GitHub',
              icon: github,
            },
          ],
        },
      ],
    },
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      job: 'Developer',
      urlJpg: photo_05_jpg,
      urlWebp: photo_05_webp,
      date_created: '2022-08-28T18:00:00.000Z',
      socials: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/rudenko.sergey.v/',
          icon: instagram,
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/profile.php?id=100005434448335',
          icon: facebook,
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/serhii-rudenko-559a0215b/',
          icon: linkedin,
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/SerhiiRudenkoV/',
          icon: twitter,
        },
      ],
      email: 'rudenko.serhii.v@gmail.com',
      phone: '+380504521144',
      about: 'Understanding the technology that drives a website. Having needed Tech Skills, Soft Skills & some specific Workplace Skills, such as: Creativity, Problem-solving, Communication, Teamwork.',
      education: {
        name: 'National Railway University',
        speciality: 'Management in Railway',
        country: 'Ukraine',
        city: 'Dnipro',
        dateStart: 'September 1997',
        dateEnd: 'May 2003',
      },
      jobs: [{
        companyName: "kominmet",
        dateStart: "May 2003",
        dateEnd: "December 2003",
        position: "Dispatcher",
        responsibilities: [
          "Ensure compliance with all railroad rules, procedures, and regulations for safety and operations.",
          "Direct and coordinate railroad traffic, issue permits and authorities, monitor all rail movements and maintain computerized records of all activities.",
          "Know assigned territory and keep informed of changes in the physical characteristics.",
          "Maintain familiarity with scheduled trains, destinations, times of arrivals and departures.",
          "Communicate with personnel on weather or any environmental conditions affecting train movement.",
          "Coordinate movement of trains according to operating plan and customer needs.",
          "Monitor train and track movements.",
          "Remotely control track switches and traffic signals and apply and remove blocking devices.",
          "Report alleged violations of operating rules and any irregularity relating to the movement of trains.",
          "Plan in advance for smooth and effective movement of priority trains, trains containing hazardous material or restricted shipments, and meets/passes to avoid unnecessary delays.",
          "Coordinate track usage with Engineering Department personnel.",
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: kominmet,
        },
        {
        companyName: "ukrAuto",
        dateStart: "January 2004",
        dateEnd: "September 2004",
        position: "Ingeneer",
        responsibilities: [
          "Making plans using detailed drawings.",
          "Preparing estimates and budgets.",
          "Creating accurate project specifications.",
          "Designing engineering experiments.",
          "Creating technical reports for customers.",
          "Completing regulatory documents concerning safety issues.",
          "Finishing projects on time and within budget.",
          "Communicating with clients and coworkers about analysis results.",
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: ukrauto,
        },
        {
        companyName: "karcher",
        dateStart: "Oktober 2004",
        dateEnd: "November 2006",
        position: "Sales Manager",
        responsibilities: [
          'Achieve growth and hit sales targets by successfully managing the sales team.', 
          'Design and implement a strategic business plan that expands company’s customer base and ensure it’s strong presence.', 
          'Own recruiting, objectives setting, coaching and performance monitoring of sales representatives.', 
          'Build and promote strong, long-lasting customer relationships by partnering with them and understanding their needs.', 
          'Present sales, revenue and expenses reports and realistic forecasts to the management team.',  
          'Identify emerging markets and market shifts while being fully aware of new products and competition status.',
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: karcher,
        },
        {
        companyName: "pegas",
        dateStart: "December 2006",
        dateEnd: "February 2022",
        position: "Manager",
        responsibilities: [
          'Delegating responsibilities and supervising business operations', 
          'Hiring, training, motivating and coaching employees as they provide attentive, efficient service to customers, assessing employee performance and providing helpful feedback and training opportunities.', 
          'Resolving conflicts or complaints from customers and employees.', 
          'Monitoring company activity and ensuring it is properly provisioned and staffed.', 
          'Analyzing information and processes and developing more effective or efficient processes and strategies.', 
          'Establishing and achieving business and profit objectives.', 
          'Ensuring staff members follow company policies and procedures.', 
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: pegas,
        },
        {
        companyName: "goit",
        dateStart: "April 2022",
        dateEnd: "up to now",
        position: "Trainee",
        responsibilities: [
          'Building the front-end portion of websites and web applications.', 
          'Using web languages such as HTML, CSS, and JavaScript.',
        ],
        country: "Ukraine",
        city: "Dnipro",
        logo: goit,
        },
      ],
      portfolios: [
        {
          name: 'Ice-Cream',
          url: 'https://hresko.github.io/Ice-Cream/',
          preview: preview_icecream,
        },
        {
          name: 'Filmoteka',
          url: 'https://juliagolban.github.io/Filmoteka_JS/',
          preview: preview_filmoteka,
        },
        {
          name: 'Resume',
          url: 'https://rudenkoserhii.github.io/cv/',
          preview: preview_resume,
        },
        {
          name: 'GitHub',
          url: 'https://github.com/rudenkoserhii',
          preview: preview_github,
        },
      ],
      skills: [
        {soft: [
            {
              name: 'communication',
              icon: communication,
            },
            {
              name: 'leadership',
              icon: leadership,
            },
            {
              name: 'adaptability',
              icon: adaptability,
            },
            {
              name: 'problem solving',
              icon: problemSolving,
            },
            {
              name: 'creativity',
              icon: creativity,
            },
            {
              name: 'work ethic',
              icon: workEthic,
            },
            {
              name: 'time management',
              icon: timeManagement,
            },
            {
              name: 'teamwork',
              icon: teamwork,
            },
          ],
        },
        {tech: [
            {
              name: 'HTML5',
              icon: html,
            },
            {
              name: 'CSS3',
              icon: css,
            },
            {
              name: 'SCSS',
              icon: scss,
            },
            {
              name: 'BEM',
              icon: bem,
            },
            {
              name: 'JavaScript',
              icon: js,
            },
            {
              name: 'React.js',
              icon: react,
            },
            {
              name: 'Node.js',
              icon: node,
            },
            {
              name: 'GitHub',
              icon: github,
            },
          ],
        },
      ],
    },
  ],
};
export const getPeoples = () => {
  return Promise.resolve(db.peoples);
};
