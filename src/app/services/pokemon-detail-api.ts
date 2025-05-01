export async function getPokemonDetail(id: string) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
