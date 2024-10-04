export type Mood =
  | "happy"
  | "surprise"
  | "joy"
  | "madness"
  | "gloomy"
  | "good"
  | "anger"
  | "sadness";
export const moods = [
  "happy",
  "surprise",
  "joy",
  "madness",
  "gloomy",
  "good",
  "anger",
  "sadness",
] as const;

export const emoji: Record<(typeof moods)[number], string> = {
  anger: require("./anger.png"),
  gloomy: require("./gloomy.png"),
  good: require("./good.png"),
  sadness: require("./sadness.png"),
  happy: require("./happy.png"),
  joy: require("./joy.png"),
  madness: require("./madness.png"),
  surprise: require("./surprise.png"),
};
