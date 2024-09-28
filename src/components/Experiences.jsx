import { calculateSummary, experiences } from '../data/experiences';

const Experiences = () => {
  return (
    <div
      className="p-4 my-2 rounded-md"
      style={{ background: 'linear-gradient(135deg, #FF2E4C, #1E2A78)' }}>
      <div className="flex items-center justify-between">
        <h2 className="mt-6 mb-4 text-xl font-bold text-white">İş təcrübəsi</h2>
        <span className="text-white underline">{calculateSummary()}</span>
      </div>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-6">
          <div className="flex flex-wrap justify-between w-full gap-2">
            <span className="font-bold text-white">{experience?.position}</span>
            <p>
              <span className="mr-2 text-white">{experience?.company}</span>
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
