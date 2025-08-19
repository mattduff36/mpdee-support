import { generateStructuredData } from '@/src/shared/seo-utils';

export default function StructuredData() {
  const structuredData = {
    ...generateStructuredData('service', {
      name: 'MPDEE Support',
      description:
        'Professional IT support services for businesses and consumers. Remote helpdesk, on-site support, hardware installation, software troubleshooting, and more.',
      serviceType: 'IT Support Services',
      url: 'https://support.mpdee.co.uk',
    }),
    // Add specific service offerings
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Support Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Remote IT Support',
            description:
              'Professional remote helpdesk and technical support services.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'On-Site IT Support',
            description:
              'On-location technical support and hardware installation services.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hardware Services',
            description:
              'Computer repair, hardware installation, and equipment maintenance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software Solutions',
            description:
              'Software troubleshooting, installation, and optimization services.',
          },
        },
      ],
    },
    // Add professional credentials
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          serviceType: 'Professional IT Support',
          areaServed: 'United Kingdom',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: 'https://support.mpdee.co.uk',
            serviceSmsNumber: '+44',
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
