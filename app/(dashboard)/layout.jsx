import Navbar from "./_components/navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <main>{children}</main>
    </>
  );
}
