import React from 'react';
import { useState } from 'react';

type Props = {
  text: string;
};

const Counter: React.FunctionComponent<Props> = (props: Props) => {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <button onClick={(): void => setClicks(0)}>{props.text}</button>
      <button onClick={(): void => setClicks(clicks + 1)}>{clicks}</button>
    </div>
  );
};

export default Counter;
