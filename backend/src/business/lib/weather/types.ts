import { z } from "zod";

export const weatherAPIResponseSchema = z.object({
  temp_c: z.number(),
  humidity: z.number(),
  condition: z.object({
    text: z.string(),
  }),
});

export type WeatherAPIResponse = z.infer<typeof weatherAPIResponseSchema>;
