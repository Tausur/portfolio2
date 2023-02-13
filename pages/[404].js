import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const Slug = (theme) => {
  const router = useRouter()

  let styles = {
    'darkBg': { 'background': 'rgb(32 32 35)' },
    'whiteBg': { 'background': '#f0e7db' },
    'dark': 'h-screen pt-32 text-white',
    'white': 'h-screen pt-32',
    'darkbtn': 'text-xl px-5 py-2 bg-sky-500 rounded-md hover:bg-sky-600 duration-500 ease-in-out',
    'whitebtn': 'text-xl px-5 py-2 bg-teal-500 rounded-md hover:bg-teal-600 duration-500 ease-in-out'
  }

  return (
    <main>

      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="Tausur Rahaman - Page not found" />
        <link rel="icon" href="/metaIcon.png" />
      </Head>

      <div className={theme.theme == 'dark' ? styles.dark : styles.white} style={theme.theme == 'dark' ? styles.darkBg : styles.whiteBg}>
        <div className="px-10 flex justify-center">
          <div>
            <h1 className="text-3xl font-bold" style={{ 'fontFamily': 'cursive' }}>Not found</h1>
            <p className="text-lg py-2" style={{ 'fontFamily': 'cursive' }}>The page you are looking for is not found</p>
          </div>
        </div>
        <hr className="border-1 border-gray-600 mx-8 my-5" />

        <div className="flex justify-center py-2">
          <Link href={'/'}>
            <button className={theme.theme == 'dark' ? styles.darkbtn : styles.whitebtn}>
              Retrun to home
            </button>
          </Link>
        </div>

      </div>

    </main>
  )
}

export default Slug