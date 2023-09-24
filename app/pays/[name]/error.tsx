"use client"

import Image from "next/image"
import Link from "next/link"

export default function Error() {
    return (
        <section>
            <h1 className="text-center text-5xl font-bold text-gray-800 my-16">
                Ops, Il y a eu une erreur pour affichage de cette ce pays!
            </h1>
            <Link className="flex items-center py-2" href="/">
                <Image
                src="/frame.svg"
                alt="" width={24} height={24}/>
                Retour
            </Link>
        </section>
    )
}