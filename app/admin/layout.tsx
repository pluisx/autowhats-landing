export const metadata = {
  title: 'Admin Panel',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
      {children}
    </div>
  );
}
