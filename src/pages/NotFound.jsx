import ButtonLink from '../components/ButtonLink.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO
        title="Page Not Found | NEW LOOKS UNISEX SALON"
        description="The page you are looking for could not be found on NEW LOOKS UNISEX SALON."
      />
      <section className="section-padding grid min-h-screen place-items-center bg-salonBlack pt-32 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-salonGold">404</p>
          <h1 className="font-heading text-5xl font-bold text-white sm:text-7xl">Page Not Found</h1>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/70">
            This page may have moved, but your next polished look is still just a click away.
          </p>
          <div className="mt-9 flex justify-center">
            <ButtonLink to="/">Back To Home</ButtonLink>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
