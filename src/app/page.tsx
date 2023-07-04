import Image from "next/image"
import Logo from 'public/assets/logo4.png'

export default function Home() {
  return (
    <div className="bg-black">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
        <header className="flex items-center justify-between py-8">
          <Image
          src={Logo}
          width={250}
          height={250}
          alt="Picture of the author"
          priority={true}
          />
        </header>
        <main className="flex-1">
          <section>
            <div className="relative z-0 mx-auto max-w-3x1 pb-24 pt-12 text-center"></div>
          </section>
        </main>
      </div>
    </div>
  )
}
