import educationData from '../data/educations';

const Educations = () => {
  return (
    <div
      className="p-4 rounded-md"
      style={{ background: 'linear-gradient(135deg, #333333, #76CCB1)' }}>
      <h2 className="text-white dtext-xl font-bold mt-6 mb-4">Educations</h2>
      {educationData.map((education, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between flex-wrap gap-2 w-full">
            <span className="text-white font-bold">{education.institution}</span>
            <p className="text-white">{education.period}</p>
          </div>
          <p className="text-white">{education.degree}</p>
          {education.faculty && <p className="text-white">{education.faculty}</p>}
        </div>
      ))}
    </div>
  );
};

export default Educations;
