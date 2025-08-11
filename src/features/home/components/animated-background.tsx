export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
      <div className="animate-blob absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute top-40 right-10 h-72 w-72 rounded-full bg-pink-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
    </div>
  );
}
