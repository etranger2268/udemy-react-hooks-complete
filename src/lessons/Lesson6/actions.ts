export const deliverMessage = async (message: string): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return message;
};
