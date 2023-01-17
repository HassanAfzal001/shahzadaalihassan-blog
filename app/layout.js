import drawer from './drawer';
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next
        </title>
      </head>
      <body>
        <drawer/>{children}</body>
    </html>
  );
}
