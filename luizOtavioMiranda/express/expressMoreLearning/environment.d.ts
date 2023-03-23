declare global {
  namespace NodeJS {
    interface ProcessEnv {
        CONNECTION_STRING:string
        SERVER_PORT:string
        URL:string
    }
  }
}
export {};