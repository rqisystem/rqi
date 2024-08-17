import skills from '../data/skills';

const Skills = () => {
  return (
    <div
      className="flex flex-col p-4 rounded-md"
      style={{ background: 'linear-gradient(135deg, #1b262a, #ed8761)' }}>
      <span className="text-white uppercase font-bold tracking-wider mb-2">Bacarıqlar</span>
      {Object.keys(skills).map((category) => (
        <div key={category} className="mb-4">
          <span className="text-white font-bold">
            {category?.charAt(0).toUpperCase() + category?.slice(1)}
          </span>
          <div className="flex flex-wrap">
            {skills[category]?.map((skill, index) => (
              <span key={index} className="mb-2 ml-2 bg-green-500 text-white p-1 rounded">
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
