import '@/styles/global.css'
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
  title: "Genesis Prompts",
  description: "An AI powered website to share prompts."
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
            <div />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout