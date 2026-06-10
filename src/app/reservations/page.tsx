import type { Metadata } from 'next'
import BookingForm from '@/components/booking/BookingForm'

export const metadata: Metadata = {
  title: 'Masakali London | The Best Indian Restaurant Near Me',
  description: 'Looking for the best Indian restaurant near me? Book your table at Masakali London instantly. Experience authentic Indian fine dining near Euston and Camden. Students receive a 15% discount.',
  keywords: ['Indian Restaurant Near Me', 'Best Indian Restaurants Near Me', 'Indian Fine Dining London', 'Masakali', 'Indian food nearby', 'Euston Indian Restaurant'],
  openGraph: {
    title: 'Reserve a Table | Masakali London',
    description: 'Book your table at Masakali London instantly via OpenTable. Experience authentic Indian fine dining. Students receive a 15% discount upon showing valid ID.',
    url: 'https://masakali.co.uk/reserve',
    siteName: 'Masakali London',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masakali London | The Best Indian Restaurant Near Me',
    description: 'Looking for the best Indian restaurant near me? Experience authentic Indian fine dining at Masakali London.',
  },
  alternates: {
    canonical: 'https://masakali.co.uk/reserve',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Masakali London',
  image: 'https://masakali.co.uk/images/hero_biryani.png',
  description: 'The best Indian restaurant near you, offering authentic and elevated Indian fine dining.',
  '@id': 'https://masakali.co.uk',
  url: 'https://masakali.co.uk/reserve',
  telephone: '02074199999',
  servesCuisine: 'Indian',
  acceptsReservations: 'True',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '48 Stanhope St',
    addressLocality: 'London',
    postalCode: 'NW1 3EX',
    addressCountry: 'UK'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5284,
    longitude: -0.1405
  }
}

export default function ReservePage() {
  return (
    <main className="w-full min-h-screen">
      {/* Injecting advanced Local SEO schema for Google Ads Quality Score optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BookingForm />
    </main>
  )
}
