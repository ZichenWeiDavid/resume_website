import { useReveal } from "../hooks/useReveal";

export default function Reveal({ children, delay = 0, className = "", ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
}
