// import Certificates from './components/Certificates';
// import Educations from './components/Educations';
// import Experiences from './components/Experiences';
// import General from './components/General';
// import Skills from './components/Skills';
import PersonalSite from './components/PersonalSite';

const App = () => {
  return (
    <div className="bg-gray-100 w-full min-h-[100vh]">
      <PersonalSite />
      {/* <div className="px-4 py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 lg:grid-cols-12">
          <div className="col-span-1 md:col-span-5 lg:col-span-3">
            <General />
          </div>
          <div className="col-span-1 p-4 bg-white rounded-md shadow md:col-span-7 lg:col-span-9">
            <Educations />
            <Experiences />
            <Certificates />
            <Skills />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default App;
