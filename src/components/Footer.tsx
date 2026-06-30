"use client";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4" style={{ borderTop: "1px solid rgba(86, 156, 214, 0.03)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/15 text-xs font-mono">محمد ترمه چی</p>
          <p className="text-white/10 text-[10px] sm:text-xs font-mono">
            © {new Date().getFullYear()} — تمامی حقوق محفوظ است
          </p>
        </div>
      </div>
    </footer>
  );
}
