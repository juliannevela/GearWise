import Image from 'next/image';

const Home = () => {
  return (
    <>
      <section className="padding-x-6 md:px-20 py-24 border-2 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Gearing up your character starts here:
              <Image src="/assets/icons/arrow-right.svg" alt="arrow-right" width={16} height={16} />
            </p>
            <h1 className="head-text">
              Unleash The Power Of
              <span className="text-primary"> GearWise</span>
            </h1>
            <p className="mt-6">
              Discover the best gear for your World of Warcraft character, customized for every
              class and specialization.
            </p>
            SearchBar
          </div>
          HeroCarousel
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Death Knight', 'Paladin', 'Shaman'].map((user_class) => (
            <div>{user_class}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
