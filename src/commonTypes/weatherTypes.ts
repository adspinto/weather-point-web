export type WeatherResponse = {
  base: string;
  clouds: Record<string, string | number>;
  cod: number;
  coord: Record<string, string | number>;
  dt: number;
  id: number;
  main: Record<string, number>;
  name: string;
  sys: Record<string, string | number>;
  weather: Record<string, string>[];
  wind: Record<string, string>[];
  current?: boolean;
};
