import {
  FaMapMarkerAlt,
  // FaBirthdayCake,
  FaCar,
} from 'react-icons/fa';
import { FaPersonMilitaryRifle } from 'react-icons/fa6';

import fbLogo from '../assets/fb.png';
import linkedinLogo from '../assets/linkedin.webp';
import githubLogo from '../assets/github.png';
import wpLogo from '../assets/wp-logo.png';
import eLogo from '../assets/email-logo.png';
import telegramLogo from '../assets/telegram-logo.webp';

const wp_number = '+994-55-522-22-31';
const telegram_username = 'rqi55';
const email = 'qudret.rustem@mail.ru';
export default {
  skills: {
    programs: ['Word', 'Excel', 'Excel VBA', 'MS Project'],
    frontEnd: ['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'REACTJS', 'NEXTJS'],
    backEnd: [
      'Nodejs',
      'MySQL',
      'Docker',
      'MongoDB',
      'EXPRESSJS',
      'ORM sequelize',
      'ORM mongoose',
      'Redis',
      'Supabase-js',
    ],
    libraries: ['BOOSTRAP', 'MATERIAL UI', 'TAILWIND CSS', 'STYLED-COMPONENTS', '...'],
  },
  generalInfo: {
    main: { name: 'Rüstəmli Qüdrət İbrahim', position: 'Mühasib' },

    secondary: {
      // birthDate: {
      //   title: '18.12.1990',
      //   icon: FaBirthdayCake,
      // },

      address: {
        title: 'Bakı şəhəri Xətai rayonu',
        icon: FaMapMarkerAlt,
      },
      militaryService: {
        title: 'Hərbi vəzifəsi: h/M',
        icon: FaPersonMilitaryRifle,
      },
      driversLicense: {
        title: 'B1,B,C1,C',
        icon: FaCar,
      },
    },
  },
  experiences: [
    {
      company: 'PrintEnv MMC',
      position: 'Mühasib',
      startDate: '2020-09-02',
      endDate: 'Davam edir',
      duties: [
        'Mağazaya daxil olan məhsullar üzrə qaimələrin 1C proqramına işlənməsi',
        'Məhsulların qiymətlərinin təyin edilməsi',
        'Debitor kreditorların reystrlərinin aparılması və nəzarət olunması',
        'Onlayn hesabatların hazırlanması',
        '...',
      ],
    },
    {
      company: 'EVRASCON ASC',
      position: 'Sənədlərə nəzarət üzrə menecer (Ofis menecer)',
      startDate: '2018-10-29',
      endDate: '2020-08-24',
      duties: [
        'İllik, aylıq, günlük planlama',
        'Forma №2, Forma №3, Forma M29 hazırlanması',
        'Texniki açotların hazırlanması',
        'Gündəlik, aylıq, rüblük, illik hesabatların hazırlanması',
        '...',
      ],
    },
    {
      company: 'EVRASCON ASC',
      position: 'Anbar müdiri',
      startDate: '2017-05-27',
      endDate: '2018-10-29',
      duties: [
        'Ambara daxil olan materiallar üzrə qaimələrin 1C proqramına işlənməsi',
        'Stokda olan materialların idarəsinə nəzarət',
        'Ambarda işləyən heyətin idarə edilməsi',
        '...',
      ],
    },
    {
      company: '"OPTİMAL ELEKTRONİKA" MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ',
      position: 'Kredit mütəxəssisi',
      startDate: '2016-08-01',
      endDate: '2017-10-20',
      duties: [
        'Kreditin verilməsi',
        'Gecikməni minimuma endirmək',
        'Kredit portfelinin idarə olunması',
        '1C proqramında kreditlərin qeydiyyatının alınması',
        '...',
      ],
    },
  ],
  educationData: [
    {
      institution: '221 saylı tam orta məktəb',
      degree: 'Orta təhsil',
      period: 'Sentyabr 1999 – May 2010',
    },
    {
      institution: 'Azərbaycan Dövlət İqtisad Universiteti',
      degree: 'Bakalavriat',
      faculty: 'Ümumi İqtisadiyyat, Turizm və Otelçilik',
      period: 'May 2010 - İyun 2014',
    },
  ],
  certificates: {
    programming: [
      {
        title: 'FRONT-END DEVELOPER',
        issuer: 'EACAMP',
        date: 'fevral 2022',
        id: 'euJnDOqSMY',
        verificationUrl: 'https://school.elshadaghazade.com/mod/customcert/verify_certificate.php',
      },
      {
        title: 'BACK-END DEVELOPER',
        issuer: 'EACAMP',
        date: 'aprel 2022',
        id: 'D9hvFEVc8E',
        verificationUrl: 'https://school.elshadaghazade.com/mod/customcert/verify_certificate.php',
      },
    ],
    finance: [
      {
        title: 'Beynəlxalq mühasibat (maliyyə, vergi) uçotunun əsasları və rəsmi mühasibatlıq',
        issuer: 'İATM - İqtisadi Araşdırmalar və Tədris Mərkəzi',
        date: 'mart 2021',
        id: 'İMU/MQ-2035/02',
        verificationUrl: 'https://iatm.az/',
      },
    ],
  },
  contacts: [
    {
      name: 'Email',
      icon: eLogo,
      link: `mailto:${email}`,
      visible: true,
    },
    {
      name: 'WhatsApp',
      icon: wpLogo,
      link: `https://wa.me/${wp_number.replace(/\D/g, '')}`,
      visible: false,
    },
    {
      name: 'Telegram',
      icon: telegramLogo,
      link: `tg://resolve?domain=${telegram_username}`,
      visible: true,
    },
    //TODO:------------------------------------------
    {
      name: 'Facebook',
      icon: fbLogo,
      link: 'https://www.facebook.com/qudret.rustamli',
      visible: true,
    },
    {
      name: 'LinkedIn',
      icon: linkedinLogo,
      link: 'https://www.linkedin.com/in/qudret-rustemli-636073232/',
      visible: true,
    },
    {
      name: 'Github',
      icon: githubLogo,
      link: 'https://github.com/Qudret-Rustamli/Qudret-Rustamli',
      visible: true,
    },
  ],
  calculateSummary: () => {
    const totalExperience = this.experiences.reduce((acc, exp) => {
      const startDate = new Date(exp.startDate);
      const endDate = exp.endDate === 'Davam edir' ? new Date() : new Date(exp.endDate);
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return acc + diffDays;
    }, 0);

    const years = Math.floor(totalExperience / 365);
    const remainingDaysAfterYears = totalExperience % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const days = remainingDaysAfterYears % 30;

    return `${years} il ${months} ay ${days} gün`;
  },
};
