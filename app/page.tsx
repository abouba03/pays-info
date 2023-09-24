import Image from 'next/image'
import Link from 'next/link';

export type Country = {
  name:{
    common: string;
  }; 

  translations:{
    fra: {
      common: string;
    }
  }

  flags:{
    svg:string;

  }

  capital?: string;
  region: string;
  subregion?: string;
  population: number;
  languages?: {               //cela signifie que "laguage est optionel, si dans l'API il n'y a pas, alors le code saute cette erreur"
    [key: string]: string; 
  };

}

async function getCountries(): Promise<Country[]> {
  const response = await fetch ("https://restcountries.com/v3.1/all")
  return response.json()
} 


export default async function Home() {

  const countries = await getCountries();

  return (
    <>
      <section className='container ml-10 mr-10 grid grid-cols-5 flex justify-center gap-2 mt-16 '>
        {countries.map((country) => (
          // eslint-disable-next-line react/jsx-key
          <Link href={`/pays/${country.name.common}`}>
            <article key={country.name.common} className='h-64 min-w-full p-2 bg-white border-2 rounded-xl hover:border-indigo-200 transition-all hover:shadow-xl '>
              <div className='relative w-full h-40 p-2 overflow-hidden rounded-xl'>
                <Image src={country.flags.svg} alt='Drapeau du pays' fill className='object-cover'/>
              </div>
              <h1 className='font-bold text-xl text-center mt-1'>{country.translations.fra.common}</h1>
            </article>

          
          </Link>
        ))}
      </section>
    </>
  )
}
