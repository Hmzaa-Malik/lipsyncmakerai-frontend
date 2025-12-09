const Pricing = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold">Free</h3>
            <p className="mt-4">10 credits</p>
            <p>Try the system before upgrading</p>
            <a
              href="/signup"
              className="mt-6 block bg-green-600 text-white font-bold py-3 px-6 rounded-full text-center"
            >
              Get Started
            </a>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold">Standard</h3>
            <p className="mt-4">$29</p>
            <p>100 credits</p>
            <a
              href="/signup"
              className="mt-6 block bg-green-600 text-white font-bold py-3 px-6 rounded-full text-center"
            >
              Subscribe
            </a>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="mt-4">$99</p>
            <p>400 credits</p>
            <a
              href="/signup"
              className="mt-6 block bg-green-600 text-white font-bold py-3 px-6 rounded-full text-center"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
