"use client";

import getMovies from "@/getUser";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMovies(),
    queryKey: ["users"],
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <div>Sorry There was an Error</div>;

  return <h1>Hello</h1>;
}
