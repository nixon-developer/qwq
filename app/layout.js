import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Providers from './Providers';
import BootstrapClient from "@/components/common/BootstrapClient";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Providers>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', maxHeight: '100vh', overflowY: 'auto' }}>
              <div style={{ flex: '1', overflowY: 'auto', paddingTop: '0px' }}>
                {children}
              </div>
            </div>
            <BootstrapClient />
            <ToastContainer position="bottom-right" autoClose={1000} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
