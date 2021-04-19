import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

const Song = ({ songTitle, close }) => {
  const [listen, setListen] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getLyrics() {
      try {
        let { data } = await axios.get(
          `https://api.lyrics.ovh/v1/justin-bieber/${songTitle}`
        );
        setListen(data);
      } catch (err) {
        setError(err.message);
      }
    }
    getLyrics();
  }, []);

  return (
    <>
      <button
        className="topsong-button"
        onClick={close}
        style={{ cursor: "pointer" }}
      >
        Close
      </button>
      {listen ? (
        <>
          <p>{listen.lyrics}</p>
        </>
      ) : (
        <h4 id="loading">
          Loading...{" "}
          <Loader type="Audio" color="hotpink" height={80} width={100} />{" "}
        </h4>
      )}
    </>
  );
};

export default Song;
