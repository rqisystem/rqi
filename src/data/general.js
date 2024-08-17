import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  // FaBirthdayCake,
  FaUserShield,
  FaCar,
} from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io';

const generalInfo = {
  main: { name: 'Rüstəmli Qüdrət İbrahim', position: 'Mühasib' },
  contacts: {
    phone: {
      title: '+994-55-522-22-31',
      icon: FaPhone,
    },
    whatsApp: {
      title: '+994-55-522-22-31',
      icon: IoLogoWhatsapp,
    },
    telegram: {
      title: '@rqi',
      icon: SiTelegram,
    },
  },

  secondary: {
    // birthDate: {
    //   title: '18.12.1990',
    //   icon: FaBirthdayCake,
    // },
    email: {
      title: 'qudret.rustem@mail.ru',
      icon: FaEnvelope,
    },
    address: {
      title: 'Bakı şəhəri Xətai rayonu',
      icon: FaMapMarkerAlt,
    },
    militaryService: {
      title: 'Tamamlandı',
      icon: FaUserShield,
    },
    driversLicense: {
      title: 'BC',
      icon: FaCar,
    },
  },
};

export default generalInfo;
