import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  // FaBirthdayCake,
  FaUserShield,
  FaCar,
} from 'react-icons/fa';
const generalInfo = {
  main: { name: 'Rüstəmli Qüdrət İbrahim', position: 'Mühasib' },

  secondary: {
    // birthDate: {
    //   title: '18.12.1990',
    //   icon: FaBirthdayCake,
    // },
    phone: {
      title: '+994-55-522-22-31',
      icon: FaPhone,
    },
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
