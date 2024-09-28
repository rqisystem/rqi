import contacts from "../data/contacts";
import generalInfo from "../data/general";


const General = () => {
  return (
    <div className="col-span-4 sm:col-span-3">
      <div className="p-6 bg-white rounded-lg shadow">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center w-full p-3 rounded-md shadow-soft-lg">
            <img
              src="/logo.png"
              className="w-32 h-32 mb-4 bg-gray-300 rounded-full shrink-0"
              alt="Profile"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold">{generalInfo?.main?.name}</h1>
              <p className="text-gray-700">{generalInfo?.main?.position}</p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap justify-center w-full my-4 mt-6">
            <div className="flex justify-center p-3 space-x-3 rounded-md item shadow-soft-lg">
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
                      className="transition-transform transform w-7 h-7 hover:-translate-y-2"></a>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col p-3 rounded-md shadow-soft-lg">
          <span className="mb-2 font-bold tracking-wider text-gray-700 uppercase">
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
