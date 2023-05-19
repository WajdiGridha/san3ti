import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "san3ti",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.1.5:3001",
    cleartext: true,
  },
};

export default config;
