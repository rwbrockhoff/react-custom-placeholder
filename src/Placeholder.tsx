import * as React from 'react';
interface IPlaceholderProps {
  name?: string;
}

const Placeholder: React.FunctionComponent<IPlaceholderProps> = props => {
  return (
    <div>
      <p>Placeholder</p>
    </div>
  );
};

export default Placeholder;
