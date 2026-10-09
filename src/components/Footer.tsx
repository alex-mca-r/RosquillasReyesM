// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-card pt-16 pb-8 px-[8%] mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-brand-navy mb-12">
        {/* Marca */}
        <div className="sm:col-span-2 md:col-span-1">
          <span className="text-2xl font-black text-brand-brown tracking-tight block mb-3">
            Rosquillas<span className="text-brand-orange">Reyes</span>
          </span>
          <p className="text-brand-brown/70 leading-relaxed text-[13px] font-medium">
            Somos una empresa panificadora comprometida con ofrecer productos de la más alta calidad, liderando siempre las mejores tendencias del momento.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-black text-brand-brown text-base mb-4">Navegación</h4>
          <ul className="space-y-2.5 text-brand-brown/75 font-semibold">
            {['/', '/productos', '/nosotros', '/noticias', '/contacto', '/login'].map((path, i) => (
              <li key={path}>
                <Link
                  to={path}
                  className="hover:text-brand-orange transition-colors duration-200"
                >
                  {['Inicio', 'Productos', 'Nosotros', 'Noticias', 'Contacto', 'Login'][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Productos */}
        <div>
          <h4 className="font-black text-brand-brown text-base mb-4">Productos</h4>
          <ul className="space-y-2.5 text-brand-brown/75 font-semibold">
            {['Rosquillas', 'Hojaldras', 'Rosquetes', 'Cosas de Horno'].map((p) => (
              <li key={p}>
                <Link
                  to="/productos"
                  className="hover:text-brand-orange transition-colors duration-200"
                >
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto y Horarios */}
        <div>
          <h4 className="font-black text-brand-brown text-base mb-4">Contáctenos</h4>
          <ul className="space-y-3.5 text-brand-brown/75 font-semibold">
            <li className="flex items-start gap-2 text-[13px]">
              <MapPin size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
              <span>De la policía 2 cuadras al Sur, El Viejo, Nicaragua</span>
            </li>
            <li className="flex items-center gap-2 text-[13px]">
              <Phone size={16} className="text-brand-orange flex-shrink-0" />
              <span>+505 8250 1265 | +505 2344 0258</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-orange fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.993 11.453.992c-5.436 0-9.861 4.371-9.865 9.801-.001 1.83.483 3.61 1.4 5.17l-1.018 3.719 3.825-.992zm11.366-6.406c-.312-.156-1.848-.894-2.136-1-.288-.106-.499-.156-.708.156-.208.312-.807.994-.99 1.202-.183.208-.365.234-.677.078-1.849-.93-2.909-1.799-3.974-3.645-.24-.415.24-.385.688-1.282.078-.156.039-.293-.02-.449-.06-.156-.499-1.202-.683-1.649-.18-.433-.361-.375-.499-.382l-.425-.008c-.147 0-.385.056-.587.279-.202.223-.77.747-.77 1.82 0 1.072.787 2.107.897 2.253.111.147 1.547 2.333 3.75 3.297.525.228.934.365 1.253.467.527.167 1.008.143 1.388.087.424-.062 1.848-.742 2.107-1.42.259-.678.259-1.258.182-1.38-.077-.123-.288-.199-.6-.356z"/>
              </svg>
              <a
                href="https://wa.me/50581759257"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                WhatsApp: +505 0000 0000
              </a>
            </li>
            <li className="mt-4 pt-3 border-t border-white/40 text-[12px] text-brand-navy/80">
              <strong className="text-brand-brown">LUNES A VIERNES:</strong> <br /> 6:00 A.M. - 9:00 P.M.
            </li>
            <li className="text-[12px] text-brand-navy/80">
              <strong className="text-brand-brown">SÁBADOS Y DOMINGOS:</strong> <br /> 7:00 A.M. - 9:00 P.M.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/40 pt-6 text-center text-xs font-semibold text-brand-brown/60">
        © {new Date().getFullYear()} Rosquilla Reyes — Todos los derechos reservados.
      </div>
    </footer>
  );
}
