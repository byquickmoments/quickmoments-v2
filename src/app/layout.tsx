useEffect(() => {
  if (pathname !== "/") {
    if (pathname === "/reels") setActiveSection("work");
    else if (pathname === "/partners") setActiveSection("creators");
    else setActiveSection("home");
    return;
  }

  const sections = ["home", "services", "work", "pricing", "for-creators", "about"];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  const handleScroll = () => {
    if (window.scrollY < 200) setActiveSection("home");
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, [pathname]);
