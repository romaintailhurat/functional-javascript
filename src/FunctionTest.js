import React from 'react'

export default function FunctionTest(props) {
  console.log(typeof props.fn);
  return (
    <div>
      <p>Function Test</p>
      <p>{ props.fn(8) }</p>
    </div>
  );
}
