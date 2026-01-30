const mockSeaData = {
  Chennai: {
    status: "CAUTION",
    confidence: 0.72,
    waveHeight: "2.1 m",
    swell: "Long-period swell detected",
    advice: "Small boats advised to return early",
    today: "Morning safer than afternoon",
    tomorrow: "Conditions improving",
    imd: "No cyclone warning",
  },
  Kochi: {
    status: "SAFE",
    confidence: 0.88,
    waveHeight: "1.2 m",
    swell: "Normal",
    advice: "Safe for fishing",
    today: "Safe all day",
    tomorrow: "Safe",
    imd: "Clear",
  },
  Vizag: {
    status: "UNSAFE",
    confidence: 0.91,
    waveHeight: "3.4 m",
    swell: "Strong turbulence",
    advice: "Do not venture into sea",
    today: "Unsafe",
    tomorrow: "Unsafe",
    imd: "Depression forming offshore",
  },
};

export default mockSeaData;
