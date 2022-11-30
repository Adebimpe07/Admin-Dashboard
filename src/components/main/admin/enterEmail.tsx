import React, { useState } from "react";
import Emailmodal from "./emailmodal";

const enterEmail = () => {
  const [opened, setOpened] = useState(false);
  const [oopened, setOopened] = useState(false);
  return (
    <div className="self-end cursor-pointer">
      <p className="text-[#E64D45]" onClick={() => setOpened(true)}>
        Forgot Password?
      </p>
      <Emailmodal
        opened={opened}
        setOpened={setOpened}
        oopened={oopened}
        setOopened={setOopened}
      />
    </div>
  );
};

export default enterEmail;
