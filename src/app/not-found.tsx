import { Button } from "@/components/site/Button";
import { Logo } from "@/components/site/Logo";

export default function NotFound() {
  return (
    <main className="page-main not-found-page">
      <div className="container not-found-page__inner">
        <Logo locale="ru" />
        <p className="eyebrow">Not found</p>
        <h1 className="hero__title">This page does not exist.</h1>
        <p className="hero__description">
          The route may have changed, or the page may not be available in this
          language yet.
        </p>
        <Button href="/" label="Back to home" />
      </div>
    </main>
  );
}
