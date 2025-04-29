export async function getPokemonList() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000", {
      next: { revalidate: 0 },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
