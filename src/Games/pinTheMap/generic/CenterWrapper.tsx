import type { HTMLAttributes } from "react";

const CenterWrapper = ({
  children,
  ...rest
}: {
  children: JSX.Element | JSX.Element[];
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
};

export default CenterWrapper;
