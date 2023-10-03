interface ParagraphProps {
  children: React.ReactNode
  className?: string
}

export const Paragraph = ({children, className}: ParagraphProps) => {
  return (
    <div 
      className='border-l-8 border-white -left-2 pt-[5px] pb-[5px] relative' 
      style={{borderLeftWidth: '36px'}}
    >
      <p className='pt-2 pb-[9px] md:pb-[8px] bg-white inline text-lg'>
        <strong className={`relative -left-5 z-10 ${className}`}>
          {children}
        </strong>
      </p>
    </div>
  )
}

export default Paragraph