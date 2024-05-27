export const handleApiState = ({ isLoading, isError, error }) => {
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
};
