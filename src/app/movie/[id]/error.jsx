'use client';

export default function Error({ error }) {
  console.log(error);
  return <h1>Movie page error!! {error.error}</h1>;
}
