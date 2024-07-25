export const calculateRemainingTime = (due: string) => {
  const dueDate = new Date(due).getTime();
  const now = new Date().getTime();

  return dueDate - now;
};