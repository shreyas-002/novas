import mockSeaData from "../data/mockSeaData";

export const getSeaStatus = async (location) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSeaData[location]);
    }, 500);
  });
};
