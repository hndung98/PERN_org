import React from 'react';

export default function Layout(props: any) {
  return (
    <>
    <hr/>
    <h1>
        Header
    </h1>
    <hr/>
    <br />
    <br />
    {props.children}
    <br />
    <br />
    <hr/>
    <h1>
        Footer
    </h1>
    <hr/>
    </>
  );
}