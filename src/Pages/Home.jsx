import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='bg-slate-50 min-h-screen w-4/5 relative grow z-0 grid place-items-center'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='flex flex-col justify-start items-start sm:mt-0 mt-8'>
                    <p className='text-xl sm:text-3xl text-zinc-500 font-bold mb-2'>Welcome to</p>
                    <div className="flex items-center">
                        <p className="bg-red-600 font-bold text-white text-3xl sm:text-6xl py-4 px-2">MARVEL</p>
                        <p className="text-red-600 font-bold text-3xl sm:text-6xl ml-1 border-t-4 border-b-4 border-red-600 py-3 px-2">PEDIA</p>
                    </div>
                </div>
                <p className='text-zinc-500 text-md sm:text-xl text-center w-4/5 sm:w-full sm:px-4'>Marvel Pedia is your ultimate guide to the Marvel Universe! Dive into a world of superheroes, villains, and epic adventures. Whether you're a die-hard fan or just getting started, Marvel Pedia has something for everyone.</p>

                <div className='flex lg:flex-row flex-col justify-center items-center gap-6 my-5 mx-5'>
                    <Link to={"/characters"}>
                        <div className='flex flex-col justify-center items-start py-8 px-6 min-h-48 rounded-lg shadow-xl bg-white hover:scale-105 transition-all hover:border-2 hover:border-red-600'>
                            <h3 className='text-xl sm:text-3xl text-zinc-600 mb-2 font-semibold'>Explore Characters</h3>
                            <p className='text-zinc-500 text-md sm:text-lg '>Discover detailed profiles of your favorite Marvel characters. From Iron Man to Spider-Man, learn about their origins, powers, and key moments in Marvel history.</p>
                        </div>
                    </Link>
                    <Link to={"/comics"}>
                        <div className='flex flex-col justify-center items-start py-8 px-6 min-h-48 rounded-lg shadow-xl bg-white hover:scale-105 transition-all hover:border-2 hover:border-red-600'>
                            <h3 className='text-xl sm:text-3xl text-zinc-600 mb-2 font-semibold'>Dive into Comics</h3>
                            <p className='text-zinc-500 text-md sm:text-lg '>Immerse yourself in the rich storytelling of Marvel Comics. Explore summaries, reviews, and recommendations for iconic comic book series and story arcs.</p>
                        </div>
                    </Link>
                    <Link to={"/series"}>
                        <div className='flex flex-col justify-center items-start py-8 px-6 min-h-48 rounded-lg shadow-xl bg-white hover:scale-105 transition-all hover:border-2 hover:border-red-600'>
                            <h3 className='text-xl sm:text-3xl text-zinc-600 mb-2 font-semibold'>Discover Exciting Series</h3>
                            <p className='text-zinc-500 text-md sm:text-lg '>Dive into the epic world of Marvel series, featuring thrilling storylines and beloved characters, and explore the Marvel Cinematic Universe like never before.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home