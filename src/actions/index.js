export const fetchData = () => {
  return async (dispatch) => {
    try {
      let fetchPromise = await fetch("https://api.covid19api.com/summary");
      let data = await fetchPromise.json();
      let separatedCountries = await data.Countries;
      let countries = await separatedCountries;

      dispatch({ type: "FETCH_COUNTRIES", payload: countries });
    } catch (error) {
      console.log(error);
    }
  };
};
