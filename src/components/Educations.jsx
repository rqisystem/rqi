import educationData from "../data/educations";

const Educations = () => {
  return (
    <div
      className="p-4 rounded-md"
      style={{ background: 'linear-gradient(135deg, #333333, #76CCB1)' }}>
      <h2 className="mt-6 mb-4 font-bold text-white dtext-xl">Təhsil məlumatları</h2>
      {educationData?.map((education, index) => (
        <div key={index} className="mb-6">
          <div className="flex flex-wrap justify-between w-full gap-2">
            <span className="font-bold text-white">{education?.institution}</span>
            <p className="text-white">{education?.period}</p>
          </div>
          <p className="text-white">{education?.degree}</p>
          {education.faculty && <p className="text-white">{education.faculty}</p>}
        </div>
      ))}
    </div>
  );
};

export default Educations;
