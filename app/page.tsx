
import PageTitle from './pageTitle'
import Paragraph from './paragraph'
import SectionTitle from './sectionTitle';
import VideoBackground from './VideoBackground';


export default function Home() {
  return (
    <>
      <main className='w-screen min-h-device flex flex-col lg:flex-row '>
        <div
          className="flex min-h-device w-full overflow-hidden relative flex-col justify-end p-8 lg:p-12 bg-cover bg-center"
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

        <div 
          className='p-8 lg:min-w-[450px] lg:p-12 flex bg-contain bg-center flex-col gap-12 justify-items-stretch content-between justify-between items-stretch' 
          style={{backgroundImage: 'url(/tiles.jpg)'}}
        >
          <div className='flex flex-col'> 
            <SectionTitle>Join us</SectionTitle>

            <Paragraph>
              We&apos;ve had a huge year (and a bit). We&apos;ve started a family, welcomed little Ruby, and we&apos;ve moved into our home.
            </Paragraph>

            <Paragraph>
              Please help us celebrate (albeit belatedly) Ruby&apos;s first birthday party, and while we&apos;re at it, a house warming!
            </Paragraph>
          </div>

          <div className='flex flex-col'> 
            <SectionTitle>When & Where</SectionTitle>

            <Paragraph>12pm—4pm, Sunday, 18th November 2023</Paragraph>
            <Paragraph>116 Wungan Street, Macleod</Paragraph>
          </div>

          <a 
            className='-mx-2 mt-2 text-2xl text-white bold shadow block p-4 rounded border-8 border-blue-200 bg-blue-600 hover:bg-blue-500 text-center'
            href="https://docs.google.com/forms/d/e/1FAIpQLSfg5s9Nszmw4ty_MGUdShwLBhmmboFGzZGCn8-SQSnfMyy6LA/viewform?usp=sf_link"
          >RSVP</a>
        </div>
      </main>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.9053928850058!2d145.06664007583268!3d-37.72189847199872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6461f2e63ba67%3A0x3cdac865ad1720ee!2s116%20Wungan%20St%2C%20Macleod%20VIC%203085!5e0!3m2!1sen!2sau!4v1696294402401!5m2!1sen!2sau" 
        className='w-full h-[450px]'
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <p className='p-2 text-center'>❤️ Created by Ju-Lin, Mark, Remy and Ruby</p>
    </>
  )
}
