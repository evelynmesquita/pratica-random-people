export function errorNotFound(message: string): object {
    const errorMessage: string = `${message && message} Not Found`.trim();
    return {
      type: "not-found",
      message: errorMessage,
      stack: new Error(),
    };
  }