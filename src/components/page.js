import Header from "./Header";

export default function page({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
