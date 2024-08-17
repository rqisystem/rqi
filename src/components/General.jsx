import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaUserShield,
  FaCar,
} from 'react-icons/fa';
import generalInfo from '../data/general';

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
          <h1 className="text-xl font-bold">{generalInfo?.name || ''}</h1>
          <p className="text-gray-700">{generalInfo?.position || ''}</p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${generalInfo?.email}`}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Contact
            </a>
          </div>
        </div>
        <hr className="my-6 border-t border-gray-300" />
        <div className="flex flex-col">
          <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
            Personal Information
          </span>
          <ul className="list-none">
            <li className="flex items-center mb-2 text-sm">
              <FaPhone className="mr-2 text-gray-700 " />
              <span>{generalInfo?.phone || ''}</span>
            </li>
            <li className="flex items-center mb-2 text-sm">
              <FaEnvelope className="mr-2 text-gray-700" />
              <span>{generalInfo?.email || ''}</span>
            </li>
            <li className="flex items-center mb-2 text-sm">
              <FaMapMarkerAlt className="mr-2 text-gray-700" />
              <span>{generalInfo?.address || ''}</span>
            </li>
            <li className="flex items-center mb-2 text-sm">
              <FaBirthdayCake className="mr-2 text-gray-700" />
              <span>{generalInfo?.birthDate || ''}</span>
            </li>
            <li className="flex items-center mb-2 text-sm">
              <FaUserShield className="mr-2 text-gray-700" />
              <span>{generalInfo?.militaryService || ''}</span>
            </li>
            <li className="flex items-center mb-2 text-sm">
              <FaCar className="mr-2 text-gray-700" />
              <span>{generalInfo?.driversLicense || ''}</span>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-t border-gray-300" />
      </div>
    </div>
  );
};

export default General;
