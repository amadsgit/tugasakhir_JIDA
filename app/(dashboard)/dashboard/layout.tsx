import SideNavbar from '@/app/ui/dashboard/side-navbar';
import TopNavbar from '@/app/ui/dashboard/top-navbar';
import Footer from '@/app/ui/dashboard/footer';
import ReduxProvider from '@/store/ReduxProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen md:flex">
      <aside className="w-full md:w-64 flex-none z-50 bg-white border-r shadow-md">
        <SideNavbar />
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="sticky top-0 z-40 bg-white">
          <TopNavbar />
        </header>
        <main className="flex-1 p-6 md:p-8 overflow-y-auto bg-gray-50">
          <ReduxProvider>{children}</ReduxProvider>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
