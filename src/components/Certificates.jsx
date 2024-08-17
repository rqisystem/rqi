import certificates from '../data/certificates';

const Certificates = () => {
  return (
    <div
      className="p-4 rounded-md mb-2"
      style={{ background: 'linear-gradient(135deg, #63EEC5, #A12699)' }}>
      <h2 className="text-white text-xl font-bold mt-6 mb-4">Certificates</h2>
      {Object.keys(certificates).map((category) => (
        <div key={category} className="mb-6">
          <h3 className="text-white text-lg font-semibold mb-2 capitalize">{category}</h3>
          {certificates[category].map((certificate, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="text-white font-bold">{certificate?.title}</span>
                <p>
                  <span className="text-white mr-2">{certificate?.issuer}</span>
                  <span className="text-white">{certificate?.date}</span>
                </p>
              </div>
              <p className="mt-2">
                <a
                  href={`${certificate?.verificationUrl}?id=${certificate?.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline">
                  Verify Certificate
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
