import { z } from "zod";

const envSchema = z.object({
  VITE_HIGHLIGHT_PROJECT_ID: z.string().optional(),
  MODE: z.enum(["development", "production", "test"]).default("development"),
  DEV: z.boolean(),
  PROD: z.boolean(),
  SSR: z.boolean(),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv() {
  try {
    return envSchema.parse(import.meta.env);
  } catch (error) {
    console.error("Environment validation failed:", error);
    if (import.meta.env.DEV) {
      console.warn("Continuing with invalid environment in development mode");
      return import.meta.env as Env;
    }
    throw new Error("Invalid environment configuration");
  }
}

export const env = validateEnv();
