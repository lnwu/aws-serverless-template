declare namespace NodeJS {
  export interface ProcessEnv {
    TEST_ENV: string
    STAGE: "local" | "dev" | "prod"
  }
}
