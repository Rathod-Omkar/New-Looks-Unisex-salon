import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const baseClasses =
  'focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300';

export default function ButtonLink({ children, to, href, variant = 'primary', className = '', onClick }) {
  const variantClasses =
    variant === 'primary'
      ? 'bg-gold-gradient text-salonBlack shadow-gold hover:-translate-y-0.5 hover:shadow-[0_20px_70px_rgba(212,175,55,0.28)]'
      : 'border border-white/20 bg-white/5 text-white hover:-translate-y-0.5 hover:border-salonGold/80 hover:bg-white/10 hover:text-salonGold';

  const classes = `${baseClasses} ${variantClasses} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={to} onClick={onClick}>
      {content}
    </Link>
  );
}
