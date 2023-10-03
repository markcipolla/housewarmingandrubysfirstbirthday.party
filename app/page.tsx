
import PageTitle from './pageTitle'
import SectionTitle from './sectionTitle';
import VideoBackground from './VideoBackground';


export default function Home() {
  return (
    <>
      <main className='w-screen min-h-screen w-full flex flex-col md:flex-row '>
        <div
          className="flex min-h-[100vh] w-full overflow-hidden relative flex-col justify-end p-8 md:p-12 bg-cover bg-center"
        >
          <VideoBackground videoUrl='/ruby.mp4' />

          <PageTitle>
            <>
              <span className='text-yellow-600'>House Warming &</span>
              <br />
              <span className='text-yellow-800'>Ruby&apos;s First Birthday Party</span>
            </>
          </PageTitle>
        </div>

        <div className='p-8 md:min-w-[450px] md:p-12 flex flex-col gap-12 justify-items-stretch content-between justify-between items-stretch'>
        <div className='flex flex-col gap-4'> 
            <SectionTitle>Join us</SectionTitle>

            <p>
              We've had a huge year (and a bit). We've started a family and welcomed little Ruby, and we've bought a home.
            </p>

            <p>
              Please help us celebrate (albeit belatedly) Ruby's first birthday party and a house warming!
            </p>
          </div>

          <div className='flex flex-col gap-4'> 
            <SectionTitle>When & Where</SectionTitle>

            <p>12pm—4pm, Sunday, 18th November 2023</p>
            <p>116 Wungan Street, Macleod</p>
          </div>

          <div className='flex flex-col gap-4'> 
            <SectionTitle>Let us know if you can make it</SectionTitle>
            <a 
              className='text-2xl text-white text-bold block p-4 rounded bg-blue-600 hover:bg-blue-500 text-center'
              href="https://docs.google.com/forms/d/e/1FAIpQLSfg5s9Nszmw4ty_MGUdShwLBhmmboFGzZGCn8-SQSnfMyy6LA/viewform?usp=sf_link"
            >RSVP</a>
          </div>
        </div>
      </main>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.9053928850058!2d145.06664007583268!3d-37.72189847199872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6461f2e63ba67%3A0x3cdac865ad1720ee!2s116%20Wungan%20St%2C%20Macleod%20VIC%203085!5e0!3m2!1sen!2sau!4v1696294402401!5m2!1sen!2sau" 
        className='w-full h-[450px]'
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <p className='p-2 text-center'>❤️ Created by Ju-Lin, Mark, Remy and Ruby</p>
    </>
  )
}
