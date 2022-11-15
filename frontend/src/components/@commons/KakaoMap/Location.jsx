// type Location = {
//   location: {
//     latitude?: number;
//     longitude?: number;
//   };
//   error: string;
// };

const Location = ({ location, error }) => {
  return (
    <div>
      {location ? (
        <code>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </code>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p className='errorMessage'>Location Error: {error}</p>}
    </div>
  );
};

export default Location;
