import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default AuthLayout;
