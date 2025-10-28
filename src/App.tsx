import { Header,
  Hero,
  Features,
  MoreInformation,
  Testimonials } 
  from './components/';

  import './App.css';

function App() {
  return (
    <main className="w-[375px] m-auto">
      <section className="bg-navy-850 p-6 h-[440px] relative">
        <Header />
        <img 
        src="/images/illustration-intro.png" 
        alt="intro illustration" 
        className='relative z-10'
        />
        <img 
        className='absolute bottom-0 left-0' 
        src="/public/images/bg-curvy-mobile.svg" 
        alt="bg curvy mobile"
        />
      </section>
      <section className='bg-navy-900 p-6'>
        <Hero />
      </section>
        <Features />
        <MoreInformation />
        <Testimonials />
    </main>
  );
}

export default App;