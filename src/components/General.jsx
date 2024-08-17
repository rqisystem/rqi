import generalInfo from '../data/general';
import wpLogo from '../assets/wp-logo.png';
import eLogo from '../assets/email-logo.png';
import telegramLogo from '../assets/telegram-logo.webp';

const General = () => {
  return (
    <div className="col-span-4 sm:col-span-3">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col items-center">
          <img
            src="/logo.png"
            className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
            alt="Profile"
          />
          <h1 className="text-xl font-bold">{generalInfo?.main?.name}</h1>
          <p className="text-gray-700">{generalInfo?.main?.position}</p>
          <div className="mt-6 flex flex-col flex-wrap gap-2 justify-center">
            <h5 className="text-md font-bold text-center">Əlaqə</h5>
            <div className="flex item justify-center space-x-2">
              <a
                href={`mailto:${generalInfo?.secondary?.email?.title}`}
                className="w-7 h-7"
                style={{
                  backgroundImage: `url(${eLogo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}></a>
              <a
                href={`https://wa.me/${generalInfo?.secondary?.phone?.title.replace(/\D/g, '')}`}
                className="w-7 h-7"
                style={{
                  backgroundImage: `url(${wpLogo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}></a>
              <a
                href="https://t.me/@rqi"
                className="w-7 h-7"
                style={{
                  backgroundImage: `url(${telegramLogo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}></a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-gray-300" />
        <div className="flex flex-col">
          <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
            Ümumi Məlumatlar
          </span>
          <ul className="list-none">
            {Object.values(generalInfo?.secondary).map((info, index) => (
              <li key={index} className="flex items-center mb-2 text-sm">
                <info.icon />
                <span className="ml-2">{info?.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-t border-gray-300" />
      </div>
    </div>
  );
};

export default General;
