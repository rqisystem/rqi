import skills from '../data/skills';

const Skills = () => {
  return (
    <div
      className="flex flex-col p-4 rounded-md"
      style={{ background: 'linear-gradient(135deg, #1b262a, #ed8761)' }}>
      <span className="mb-2 font-bold tracking-wider text-white uppercase">Bacarıqlar</span>
      {Object.keys(skills).map((category) => (
        <div key={category} className="mb-4">
          <span className="font-bold text-white">
            {category?.charAt(0).toUpperCase() + category?.slice(1)}
          </span>
          <div className="flex flex-wrap">
            {skills[category]?.map((skill, index) => (
              <span key={index} className="p-1 mb-2 ml-2 text-white bg-green-500 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
