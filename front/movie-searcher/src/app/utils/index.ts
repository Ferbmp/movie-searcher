export function debounce<A = unknown, R = void>(
   func: (...args: A[]) => R,
   wait: number
): (...args: A[]) => Promise<R> {
   let timeout: NodeJS.Timeout;

   return (...args: A[]): Promise<R> => {
      clearTimeout(timeout);
      return new Promise((resolve) => {
         timeout = setTimeout(() => resolve(func(...args)), wait);
      });
   };
}
