import React, {
  useState,
  useEffect
} from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Loading from "./Loading";

const resultsMessages = {
  buttonA: "You have selected button A!",
  buttonB: "You have selected button B!",
  buttonC: "You have selected button C!",
  buttonD: "You have selected button D!"
};

function Results(props) {
  const [resultsData, setResultsData] =
    useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      let trueKeys = Object.keys(
        props.checked
      ).filter(x => props.checked[x] == true);
      let resultsMessageKeys = trueKeys.map(
        x => resultsMessages[x]
      );
      setResultsData(resultsMessageKeys);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="checkbox">
        {resultsData.map((result, idx) => {
          return (
            <div key={idx}>
              <h1>{result}</h1>
            </div>
          );
        })}
      </div>
      <Link to="/">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
        >
          Home
        </Button>
      </Link>
    </>
  );
}

export default Results;
