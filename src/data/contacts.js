import fbLogo from '../assets/fb.png';
import linkedinLogo from '../assets/linkedin.webp';
import githubLogo from '../assets/github.png';
import wpLogo from '../assets/wp-logo.png';
import eLogo from '../assets/email-logo.png';
import telegramLogo from '../assets/telegram-logo.webp';

const wp_number = '+994-55-522-22-31';
const telegram_username = 'rqi55';
const email = 'qudret.rustem@mail.ru';
const contacts = [
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
];

export default contacts;
