export async function fetchBio(person: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const bio = `This is a ${person}'s bio.`;
  return bio;
}
