export const checkIfExternalURL = (url: string): boolean => {
  const baseURL = new URL(`${process.env.NEXT_PUBLIC_APP_URL}`);

  return new URL(url, baseURL)?.hostname !== baseURL?.hostname;
};
