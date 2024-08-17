import socialMedias from '../data/socialMedias';

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-5">
      {socialMedias?.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
          <social.icon size={20} color={social.color} />
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
