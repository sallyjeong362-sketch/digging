import { useEffect } from 'react';
import { useToast } from '../store/useToast';

export default function ToastHost() {
  const message = useToast((s) => s.message);
  const clear = useToast((s) => s.clear);

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => clear(), 2400);
    return () => clearTimeout(timer);
  }, [message, clear]);

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed inset-x-0 bottom-20 z-50 flex justify-center px-4 transition-all duration-300 lg:bottom-8 ${
        message ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
    >
      {message && (
        <div className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] shadow-lg">
          {message}
        </div>
      )}
    </div>
  );
}
