export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 border-t border-neutral-200 bg-white text-sm py-4 sm:px-8 md:flex-row md:justify-between md:py-5">
      <ul className="flex flex-wrap content-start items-center justify-center gap-1 self-stretch">
        <li>Nav item A</li>
        <li>Nav item B</li>
        <li>Nav item C</li>
      </ul>

      <div className="flex flex-col items-center gap-1 md:flex-row">
        <p>&copy; Frontend Jobs</p>
      </div>
    </footer>
  );
}
