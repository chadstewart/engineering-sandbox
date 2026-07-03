export const sharedConfig = {
  test: {
    reporters: ["default", "blob"],
    outputFile: {
      blob: "coverage/blob/report.json",
    },
    coverage: {
      provider: "istanbul" as const,
      enabled: true,
    },
  },
};