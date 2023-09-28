
import PageTitle from './pageTitle'
import SectionTitle from './sectionTitle';
import VideoBackground from './VideoBackground';


export default function Home() {
  return (
    <>
      <main className='w-screen min-h-screen flex flex-col md:flex-row '>
        <div
          className="flex min-h-screen w-full overflow-hidden relative flex-col justify-end p-8 md:p-12 bg-cover bg-center"
        >
          <VideoBackground videoUrl='/ruby.mp4' />

          <PageTitle>
            <>
              <span className='text-lime-600'>House Warming &</span>
              <br />
              <span className='text-lime-800'>Ruby's First Birthday Party</span>
            </>
          </PageTitle>
        </div>

        <div className='p-8 min-w-[400px] md:p-12 flex flex-col gap-12 justify-items-stretch content-between justify-between items-stretch'>
          <div className='flex flex-col gap-4'> 
            <SectionTitle>When & Where</SectionTitle>

            <p>11am-5pm</p>
            <p>18th November 2023</p>
            <p>116 Wungan Street, Macleod</p>
          </div>

          <div className='border-t' />

          <div className='flex flex-col gap-4'> 
            <SectionTitle>Let us know if you can make it</SectionTitle>
            
          </div>
        </div>
      </main>
      <p className='p-2 text-center'>❤️ Created by Ju-Lin, Mark, Remy and Ruby</p>
    </>
  )
}
