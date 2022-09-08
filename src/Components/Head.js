import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | UniTox';
  }, [props]);

  return <></>;
};

export default Head;
