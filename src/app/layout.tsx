import React from 'react';

const Providers = ({ children }) => {
  // Define the providers you want to wrap your application with
  return (
    <>{children}</>
  );
};

const Layout = ({ children }) => {
  return (
    <Providers>
      <main>{children}</main>
    </Providers>
  );
};

export default Layout;