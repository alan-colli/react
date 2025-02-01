import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-black w-full flex">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
