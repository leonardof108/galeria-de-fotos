import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="relative py-12 text-center">
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <ThemeToggle />
      </div>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
        Galeria de Fotos
      </h1>
      <p className="mt-4 font-body text-lg text-muted-foreground">
        Explore nossa coleção de imagens impressionantes
      </p>
    </header>
  );
};

export default Header;
