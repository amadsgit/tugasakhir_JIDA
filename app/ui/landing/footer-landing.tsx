export default function FooterLanding() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-100 text-center py-4 mt-10 text-sm text-gray-800 dark:text-gray-800 border-t border-gray-200 dark:border-gray-200">
      <p>
        &copy; {new Date().getFullYear()} <strong>JIDA <span className="text-emerald-500">Jabar Istimewa Digital Academy</span></strong> — Dibuat oleh <span className="text-blue-500 font-semibold"><a href="https://amadsgit.github.io/mamad-ahmad-portofolio/" target="_blank">Mamad Ahmad</a></span>
      </p>
    </footer>
  );
}
