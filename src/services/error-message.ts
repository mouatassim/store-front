export interface ErrorServer {
  name: string;
  message: string;
}

const getErrorMessage = (
  errors: ErrorServer[],
  packageIndex: number,
  property: string,
) => {
  if (!errors) return "";
  const errorRes = errors?.filter(
    (error) => error?.name === `packages[${packageIndex}].${property}`,
  );

  return errorRes[0]?.message;
};

export default getErrorMessage;
