export default function genRandomID(): number {
  // Genera un ID al azar entre 1 y 1025.
  return Math.floor(Math.random() * 1025) + 1;
}
