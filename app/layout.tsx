import '@/app/ui/global.css';
import { Toaster } from 'react-hot-toast';
import 'react-confirm-alert/src/react-confirm-alert.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}