export default function generateRandomPokemonID(): number {
  // Genera un Pokemon ID al azar. Entre 1 y 1025.
  return Math.floor(Math.random() * 1025) + 1;
}
