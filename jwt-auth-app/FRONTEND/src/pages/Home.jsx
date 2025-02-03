import Layout from "../components/Layout";

function Home() {
  return (
    <Layout className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-white text-3xl">Welcome</p>
      </div>
    </Layout>
  );
}

export default Home;
