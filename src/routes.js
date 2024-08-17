import { FaTachometerAlt } from 'react-icons/fa';
import { SiGeneralelectric } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { GrCertificate } from 'react-icons/gr';
import { MdWorkHistory } from 'react-icons/md';

const routes = [
  {
    path: '/',
    icon: FaTachometerAlt,
    title: 'Home',
  },
  {
    path: '/general',
    icon: SiGeneralelectric,
    title: 'General',
  },
  {
    path: '/skills',
    icon: GiSkills,
    title: 'Skills',
  },
  {
    path: '/certificates',
    icon: GrCertificate,
    title: 'Certificates',
  },
  {
    path: '/experiences',
    icon: MdWorkHistory,
    title: 'Experiences',
  },
];

export default routes;
