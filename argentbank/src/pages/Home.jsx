import Hero from '../components/Hero';
import Feature from '../components/Feature';
import FEATURES_DATAS from '../datas/features-datas';

function Home() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {FEATURES_DATAS.map((feature) => (
          <Feature
            key={`${feature.id}`}
            featureImageSrc={feature.image}
            featureImageAlt={feature.alt}
            featureTitle={feature.title}
            featureText={feature.text}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
