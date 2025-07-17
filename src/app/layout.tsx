import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Nami Apparels - Nigeria's Premier Online Fashion Store | Buy Clothes Online Nigeria",
    template: "%s | Nami Apparels - Nigeria's Best Online Fashion Store",
  },
  description:
    "Shop the latest fashion trends at Nami Apparels - Nigeria's #1 online clothing store. Quality apparel, fast delivery across Lagos, Abuja, Port Harcourt. Best prices on men's, women's & kids fashion in Nigeria.",
  keywords: [
    "online shopping Nigeria",
    "buy clothes online Nigeria",
    "Nigeria fashion store",
    "apparel Nigeria",
    "online clothing store Lagos",
    "fashion Nigeria",
    "buy fashion online Nigeria",
    "Nigerian clothing brand",
    "online fashion shopping",
    "clothes delivery Nigeria",
    "fashion store Lagos",
    "Nigerian apparel",
    "online boutique Nigeria",
    "fashion trends Nigeria",
    "clothing online Nigeria",
  ],
  authors: [{ name: "Nami Apparel" }],
  creator: "Nami Apparel",
  publisher: "Nami Apparel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.namiapparels.com.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nami Apparels - Nigeria's Premier Online Fashion Store",
    description:
      "Shop the latest fashion trends at Nigeria's #1 online clothing store. Quality apparel, fast delivery across Nigeria. Best prices on fashion.",
    url: "https://www.namiapparels.com.ng",
    siteName: "Nami Apparels",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Nami Apparels - Nigeria Fashion Store",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nami Apparels - Nigeria's Premier Online Fashion Store",
    description:
      "Shop the latest fashion trends at Nigeria's #1 online clothing store. Quality apparel, fast delivery across Nigeria.",
    images: ["/twitter-image.jpg"], // Add your Twitter image
    creator: "@namiapparels", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "yXFu48X7sWNzrBPSfpu34zSEQwAQF-O-5b6jgGGYy0s",
  },
  category: "fashion",
  classification: "Business",
  other: {
    "geo.region": "NG",
    "geo.country": "Nigeria",
    "geo.placename": "Lagos",
    language: "en-NG",
    distribution: "global",
    rating: "general",
    "revisit-after": "1 day",
    "theme-color": "#000000", // Replace with your brand color
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" dir="ltr">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nami Apparels" />
        <meta name="application-name" content="Nami Apparels" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              name: "Nami Apparels",
              description:
                "Nigeria's premier online fashion store offering quality apparel with fast delivery across Nigeria",
              url: "https://www.namiapparels.com.ng",
              logo: "https://www.namiapparels.com.ng/logo.png",
              image: "https://www.namiapparels.com.ng/og-image.jpg",
              telephone: "+234-XXX-XXX-XXXX", // Replace with your phone number
              email: "info@namiapparels.com.ng", // Replace with your email
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Lagos",
                addressRegion: "Lagos State",
                postalCode: "100001",
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.5244,
                longitude: 3.3792,
              },
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "$$",
              servesCuisine: "Fashion",
              areaServed: {
                "@type": "Country",
                name: "Nigeria",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Fashion Collection",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Men's Fashion",
                      category: "Apparel",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Women's Fashion",
                      category: "Apparel",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Kids Fashion",
                      category: "Apparel",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/namiapparels",
                "https://www.instagram.com/namiapparels",
                "https://twitter.com/namiapparels",
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nami Apparels",
              alternateName: "Nami",
              url: "https://www.namiapparels.com.ng",
              logo: "https://www.namiapparels.com.ng/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-XXX-XXX-XXXX",
                contactType: "customer service",
                areaServed: "NG",
                availableLanguage: "en",
              },
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "Founder Name",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Lagos",
                addressRegion: "Lagos State",
                postalCode: "100001",
                addressCountry: "NG",
              },
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Nami Apparels",
              url: "https://www.namiapparels.com.ng",
              description: "Nigeria's premier online fashion store",
              publisher: {
                "@type": "Organization",
                name: "Nami Apparels",
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.namiapparels.com.ng/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
