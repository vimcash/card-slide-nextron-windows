export const getLocalStorage = (inParam:string) => typeof window !== 'undefined' ? localStorage.getItem(inParam) || undefined : undefined