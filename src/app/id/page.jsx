import Image from 'next/image'

export default function idPage() {
  return (
    <>
      <div
       id="film-title-poster-and-title"
       className="flex items-center py-5 px-5 gap-5"
       >
        <div 
         id="film-title-poster"
         >
          <Image
            src="/images/PlaceholderFilmPoster.png"
            alt="Film poster"
            width={200}
            height={300}
            className='rounded-lg'
          />
         </div>
         <div 
         id="film-title"
         className="flex flex-col items-center"
         >
        <h2 className="text-blue-400 text-xl">Film title</h2>
        <h3 className="text-pink-200">Release date</h3>
        <h3 className="text-pink-200">Rating</h3>
        <h3 className="text-pink-200">Runtime</h3>
        <h3 className="text-pink-200">Genres</h3>
        </div>
      </div>
    </>
  );
}
