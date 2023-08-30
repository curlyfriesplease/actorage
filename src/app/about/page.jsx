import Image from "next/image";

export default function aboutPage() {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <a target="_blank" href="https://icons8.com/icon/44827/movie-projector">
          Movie
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
      <div>
        Movie data courtesy of <a href="https://www.themoviedb.org/">TMDb</a>
      </div>
    </div>
  );
}
