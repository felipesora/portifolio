import { useInView } from "../../hooks/useInView";

type Props = {
  children: React.ReactNode;
};

const AnimatedItem = ({ children }: Props) => {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {children}
    </div>
  );
};

export default AnimatedItem;
