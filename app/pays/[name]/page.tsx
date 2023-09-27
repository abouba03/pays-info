import { Country } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

async function getCountryByName(name: string): Promise<Country> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    return (await response.json())[0]; //on fait de cette maniere parce que il nous retourn une array
}


async function getCountryBordersByName(name: string ){


}


export default async function Country({params: {name}}: {params: {name: string}}){

    const country = await getCountryByName(name)
    const formatter = Intl.NumberFormat("en", {notation:"compact"})

    return(
        <main className="mx-10">
            <section className="flex flex-col container">
                <h1 className="text-5xl font-bold text-center text-gray-800 my-16">{country.translations.fra.common}</h1>
                <Link className="flex gap-1 py-2 items-center" href="/">
                    <Image src="/frame.svg" width={25} height={25} alt="fleche pour retour"/>
                    Retour</Link>
                <article className="flex justify-between min-w-full p-10 bg-white rounded-xl ">
                    <section>
                        {country.capital && (<h2 className="text-xl text-gray-800"><b >🏙️Capitale:</b> {country.capital}</h2>)}
                        <h2 className="text-xl text-gray-800"><b >🗺️Continent:</b> {country.region} {country.subregion && ` - ${country.subregion}`}</h2>
                        <h2 className="text-xl text-gray-800"><b >🧑‍🤝‍🧑Population:</b> {formatter.format(country.population)} </h2>
                        {country.languages &&(
                            <h2 className="text-xl text-gray-800"><b >🗣️Langue parlée:</b>
                            <br/>
                            {Object.values(country.languages).map((language) => (
                                <span key={language} className="inline-block p-1 mx-0.5 bg-indigo-700 text-white text-sm rounded-full">{language}</span>
                            ))}
                            </h2>
                        )  }
                            
                    </section>
                    <div className="relative h-auto w-96">
                        <Image
                            src={country.flags.svg}
                            alt="flag"
                            fill className='object-cover'
                        />
                    </div>
                </article>

                <section>
                    <h3 className='mt-12 text-2xl font-semibold text-gray-800'>
                        Pays qui font frontiere:
                    </h3>
                    <div className="grid grid-cols-5 w-full">
                        {country.borders.map((border) => <div> {border} </div>)}
                    </div>
                </section>
            </section>
        </main>
    )
}
