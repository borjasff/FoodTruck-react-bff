import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//layout to admin panel

export default function AdminLayout({ children, page }) {
/*the same as Layout for client but without categories and only receiver the orders send by  clients*/
  return (
    <>
      <Head>
        <title>FoodTruck - {page}</title>
        <meta name="description" content="FoodTruck" />
      </Head>

      <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5 ">
            <a href="/admin" className="m-auto md:flex"><Image
                    width={300}
                    height={100}
                    src="/assets/img/logo.svg"
                    alt="image logo"
                    className="m-auto"
                /></a>
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}