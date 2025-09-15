import Link from "next/link";
export default function Ready() {
  return (
    <section className="py-16 text-center bg-white gap-4 m-5">
      <h2 className="text-3xl font-bold text-gray-900">
        Ready to Begin Your Transformative Journey?
      </h2>
      <p className="mt-2 text-m text-gray-600">
        Take the first step towards personal growth, clarity, and authentic living.
      </p>
      <div className="mt-10">
        <Link href="/quiz" className="px-3 py-2 bg-indigo-500 text-white rounded-full text-sm shadow hover:bg-indigo-600">
          Start Your Journey →
        </Link>
      </div>
    </section>
  );
}
