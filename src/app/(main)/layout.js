import Header from "@/components/Header";

export default function MainLayout ({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar here */}
        <div className="flex-1 overflow-auto bg-primary p-4 lg:p-8 rounded-tl-xl">
          <main>{children}</main>
          {/* Footer here */}
        </div>
      </div>
    </div>
  )
}