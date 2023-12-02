import "@/app/globals.css";
import { roboto } from "@/app/fonts";

export default function navbar() {
  return (
    <section className={roboto.className}>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Category</li>
          <li className="navbar-item">Info</li>
          <li className="navbar-item">Help</li>
        </ul>
      </nav>
    </section>
  );
}
