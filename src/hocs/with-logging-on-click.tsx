import React, { ComponentType } from "react";

type Base = { onClick: () => void };

export const withLoggingOnClick = <TProps extends Base>(
  Component: ComponentType<TProps>
) => {
  return (props: TProps) => {
    const onClick = () => {
      console.log("Log on click something");
      props.onClick();
    };

    return <Component {...props} onClick={onClick} />;
  };
};

export const withLoggingOnClickWithParams = <TProps extends Base>(
  Component: ComponentType<TProps>,
  params: { text: string }
) => {
  return (props: TProps) => {
    const onClick = () => {
      console.log("Log on click: ", params.text);
      props.onClick();
    };

    return <Component {...props} onClick={onClick} />;
  };
};

export const withLoggingOnClickWithProps = <TProps extends Base>(
  Component: ComponentType<TProps>
) => {
  return (props: TProps & { logText: string }) => {
    const onClick = () => {
      console.log("Log on click: ", props.logText);
      props.onClick();
    };

    return <Component {...props} onClick={onClick} />;
  };
};
