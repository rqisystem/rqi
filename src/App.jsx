import Certificates from './components/Certificates';
import Educations from './components/Educations';
import Experiences from './components/Experiences';
import General from './components/General';
import Skills from './components/Skills';
import SocialMedia from './components/SocialMedia';

const App = () => {
  return (
    <div className="bg-gray-100 w-full min-h-[100vh]">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <General />
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <Educations />
              <Experiences />
              <Certificates />
              <Skills />
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
