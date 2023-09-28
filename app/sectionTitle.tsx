import { Cookie } from 'next/font/google';
const font = Cookie({ weight: "400", subsets: ['latin'] });

interface SectionTitleProps {
  children: React.ReactNode
}

export const SectionTitle = ({children}: SectionTitleProps) => {
  return (
    <h2 className={`text-3xl text-orange-500 ${font.className}`}>
      {children}
    </h2>
  )
}

export default SectionTitle