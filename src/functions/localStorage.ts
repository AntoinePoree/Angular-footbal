export function getDataFromLocalStorage(key: string) {
  const dataToReturn = localStorage.getItem(key);

  if (dataToReturn) {
    return JSON.parse(dataToReturn);
  }
}
