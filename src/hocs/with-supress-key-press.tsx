import React, { ComponentType, useEffect } from "react";

export const withSupressKeyPress = <TProps extends unknown>(
  Component: ComponentType<TProps>
) => {
  return (props: TProps) => {
    const onKeyPress = (event) => {
      event.stopPropagation();
    };

    return (
      <div onKeyPress={onKeyPress}>
        <Component {...props} />
      </div>
    );
  };
};
