import Head from "next/head"
import Sidebar from "../components/Sidebar"
import  Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import useFoodTruck from "../hooks/useFoodTruck";
import ModalProduct from "../components/ModalProduct";
import 'react-toastify/dist/ReactToastify.css';
import Stepss from "../components/Stepss";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next');

export default function Layout({children, page}) {

  const { modal } = useFoodTruck();

    return (
      /*layout to clients*/
      <>
        <Head>
            <title>Foodtruck - {page}</title>
            <meta name="description" content="foodtruck" />
        </Head>

        <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">            
                <Sidebar />
            </aside>
            
            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
              <div className="p-10 mt-10">
              <Stepss />
                  {children}
              </div>
                
            </main>
        </div>
        {modal && (
          <Modal
            isOpen={modal}
            style={customStyles}
          >
            <ModalProduct/>
          </Modal>
        )}
        <ToastContainer />
      </>
    )
  }