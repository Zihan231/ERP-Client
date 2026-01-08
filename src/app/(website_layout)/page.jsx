import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content font-sans">
      <main className="hero-content text-center max-w-4xl">
        <div>           
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Smart Management for <br />
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Modern Businesses.
            </span>
          </h1>
          
          {/* Description */}
          <p className="py-6 text-lg text-base-content/70 md:px-20 leading-relaxed">
            Streamline your HR operations, manage employee data, and boost 
            team productivity with our all-in-one cloud-based ERP solution.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="/login">
                <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none btn-lg shadow-lg shadow-blue-500/30 w-full sm:w-auto">
                    Get Started
                </button>
            </Link>
            <button className="btn btn-outline btn-lg hover:bg-base-200 hover:text-base-content w-full sm:w-auto">
                View Features
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}