import { calculateSummary, experiences } from '../data/experiences';

const Experiences = () => {
  return (
    <div
      className="p-4 rounded-md my-2"
      style={{ background: 'linear-gradient(135deg, #FF2E4C, #1E2A78)' }}>
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-bold mt-6 mb-4">İş təcrübəsi</h2>
        <span className='text-white underline'>{calculateSummary()}</span>
      </div>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between flex-wrap gap-2 w-full">
            <span className="text-white font-bold">{experience?.position}</span>
            <p>
              <span className="text-white mr-2">{experience?.company}</span>
              <span className="text-white">
                {experience?.startDate} - {experience?.endDate}
              </span>
            </p>
          </div>
          <ul className="mt-2 list-disc list-inside">
            {experience?.duties.map((duty, dutyIndex) => (
              <li key={dutyIndex} className="text-white">
                {duty}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
