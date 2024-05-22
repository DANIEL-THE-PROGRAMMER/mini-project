import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

interface MyViteConfig {
  plugins: React.ReactNode[];
  server: {
    port: number;
  };
  proxy: {
    [key: string]: string;
  };
}

const config: MyViteConfig = {
  plugins: [react()],
  server: {
    port: 3000,
  },
  proxy: {
    "/api": "https://gps.autotracker.group",
  },
};

export default defineConfig(config);
