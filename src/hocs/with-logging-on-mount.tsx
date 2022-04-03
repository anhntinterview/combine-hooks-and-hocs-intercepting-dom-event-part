import React, { ComponentType, useEffect } from "react";

export const withLoggingOnMount = <TProps extends unknown>(
  Component: ComponentType<TProps>
) => {
  return (props: TProps) => {
    useEffect(() => {
      console.log("log on mount");
    }, []);

    return <Component {...props} />;
  };
};

export const withLoggingOnMountWithParams = <TProps extends unknown>(
  Component: ComponentType<TProps>,
  params: { text: string }
) => {
  return (props: TProps) => {
    useEffect(() => {
      console.log("log on mount: ", params.text);
    }, []);

    return <Component {...props} />;
  };
};

export const withLoggingOnMountWithProps = <TProps extends unknown>(
  Component: ComponentType<TProps>
) => {
  return (props: TProps & { logText: string }) => {
    useEffect(() => {
      console.log("log on mount: ", props.logText);
    }, [props.logText]);

    return <Component {...props} />;
  };
};
