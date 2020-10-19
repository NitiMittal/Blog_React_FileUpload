import React from 'react'
import loading from "../images/loading.gif";

export default function Loader() {
    return (
        <div className="loader center">
        <img src={loading}></img>
        Loading...
      </div>
    )
}
