import Image from 'next/image';

const partners = [
  {
    name: 'AMD',
    logo: '/assets/images/images_5.png',
    width: 172,
    height: 68,
  },
  {
    name: 'LinkedIn',
    logo: '/assets/images/images_6.png',
    width: 128,
    height: 33,
  },
];

const PartnersLogos = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-around lg:justify-between">
        {partners.map((partner) => (
          <Image
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            width={partner.width}
            height={partner.height}
            className="h-8 w-auto filter grayscale opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100 md:h-10 lg:h-12"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersLogos;