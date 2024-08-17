import generalInfo from '../data/general';
import contacts from '../data/contacts';

const General = () => {
  return (
    <div className="col-span-4 sm:col-span-3">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center shadow-soft-lg p-3 rounded-md w-full">
            <img
              src="/logo.png"
              className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
              alt="Profile"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold">{generalInfo?.main?.name}</h1>
              <p className="text-gray-700">{generalInfo?.main?.position}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col flex-wrap justify-center w-full my-4">
            <div className="flex item justify-center space-x-3 shadow-soft-lg p-3 rounded-md">
              {contacts?.map((social, index) => {
                if (social?.visible) {
                  return (
                    <a
                      key={index}
                      href={social?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundImage: `url(${social.icon})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      className="w-7 h-7 transition-transform transform hover:-translate-y-2"></a>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col shadow-soft-lg p-3 rounded-md">
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
      </div>
    </div>
  );
};

export default General;
