export async function fetchBio(person: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = `This is a ${person}'s bio.`;
  return res;
}
