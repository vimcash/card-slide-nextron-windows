export const setDelay = (inSec:number) => new Promise((resolve) => setTimeout(resolve, inSec * 1000))