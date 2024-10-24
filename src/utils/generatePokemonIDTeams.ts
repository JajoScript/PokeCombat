import generateRandomPokemonID from "./generateRandomPokemonID";

export default function generatePokemonIDTeams(): number[] {
  const teams_IDs: number[] = [];

  while (teams_IDs.length < 6) {
    const randomPokemonID: number = generateRandomPokemonID();

    if (!teams_IDs.includes(randomPokemonID)) {
      teams_IDs.push(randomPokemonID);
    }
  }

  return teams_IDs;
}