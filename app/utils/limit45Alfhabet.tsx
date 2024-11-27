export const limit45Alfhabet = (description: string) => {
  return description?.length > 45
    ? `${description.slice(0, 45)}...`
    : description;
};
