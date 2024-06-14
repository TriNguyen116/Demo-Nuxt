let userCount = 0;
export default async () => {
  await new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(userCount++);
    }, 2000);
  });
  return {
    userCount
  }
}

