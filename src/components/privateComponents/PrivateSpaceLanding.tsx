
import React from "react";
import {Link} from "react-router-dom";

export {PrivateSpaceLanding};

const PrivateSpaceLanding = (props: any) => {

  return(<>
    Private space
    <br/><br/>
    <Link to={"/private"}>
      <button>
        Go to /private
      </button>
    </Link>
  </>);
};

