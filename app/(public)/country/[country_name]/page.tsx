"use client"

import { notFound } from 'next/navigation'
 
export default function CountryName({
  params,
}: {
  params: { country_name: string };
}) {
  const countries: {
    [country_name: string]: { pop: number; capital: string };
  } = {
    pakistan: {
      pop: 222_222_222,
      capital: "Islamabad",
    },
    india: {
      pop: 1_222_222_222,
      capital: "Delhi",
    },
    iran: {
      pop: 2_222_222,
      capital: "Tehran",
    },
    china: {
      pop: 1_533_333_333,
      capital: "Beijeng",
    },
  };

  if (Object.keys(countries).includes(params.country_name)) {
    return (
      <div>
        <h1 className="text-2xl">
          Country Name:{" "}
          {params.country_name[0].toUpperCase() + params.country_name.substring(1, params.country_name.length)}
        </h1>
        <h2>Pop: {countries[params.country_name].pop} </h2>
        <h2>Capital: {countries[params.country_name].capital} </h2>
      </div>
    );
  } else {
    return notFound();
  }
}
