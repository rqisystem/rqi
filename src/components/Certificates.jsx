import certificates from '../data/certificates';

const Certificates = () => {
  return (
    <div
      className="p-4 mb-2 rounded-md"
      style={{ background: 'linear-gradient(135deg, #63EEC5, #A12699)' }}>
      <h2 className="mt-6 mb-4 text-xl font-bold text-white">Sertifikatlar</h2>
      {Object.keys(certificates).map((category) => (
        <div key={category} className="mb-6">
          <h3 className="mb-2 text-lg font-semibold text-white capitalize">{category}</h3>
          {certificates[category]?.map((certificate, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-wrap justify-between w-full">
                <span className="flex flex-col w-full font-bold text-white md:w-4/5">
                  <span>{certificate?.title}</span>
                  <span>(certificate id:&nbsp;-&nbsp;{certificate?.id})</span>
                </span>

                <p className="w-full md:w-1/5">
                  <span className="mr-2 text-white">{certificate?.issuer}</span>
                  <span className="text-white">{certificate?.date}</span>
                </p>
              </div>
              <p className="w-full mt-2 md:w-1/4">
                <a
                  href={`${certificate?.verificationUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-750 py-1.5 px-2 rounded-md text-white">
                  Sertifikatı yoxla
                </a>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Certificates;
