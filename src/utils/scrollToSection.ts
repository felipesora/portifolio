export function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 120; // altura aproximada do header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
}