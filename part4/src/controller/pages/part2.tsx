import useFetch from "../hooks";

const SecondPart = () => {
  const { data, loading, error } = useFetch();
  console.log(data);

  return (
    <div className="mt-2 mx-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          <p>Loading....</p>
        ) : error ? (
          <p>Something went wrong</p>
        ) : (
          data.map(({ id, thumbnail }: any) => (
            <div key={id}>
              <img
                className="h-40 max-w-full rounded-lg"
                src={thumbnail}
                alt=""
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SecondPart;
