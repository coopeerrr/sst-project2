import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const quickFacts = [
    "Population: Over 60 million",
    "Capital: Pretoria (administrative), Cape Town (legislative), Bloemfontein (judicial)",
    "Official Languages: 11, including English, Zulu, and Afrikaans",
    "Currency: South African Rand (ZAR)",
    "Largest City: Johannesburg",
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{
          backgroundImage:
            "url('https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F4b50e023-2a4b-4f99-8cb4-6d383858a385.jpg?crop=1564%2C880%2C318%2C0&resize=1500')",
          zIndex: -1,
        }}
      ></div>
            </h1>
            <p className="text-2xl mb-8 text-gray-300">
              Explore the Rainbow Nation's rich diversity, from its stunning landscapes and vibrant culture to its
              thriving economy and unique wildlife.
            </p>
            <a
              href="#explore"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full font-bold hover:from-green-500 hover:to-blue-600 transition duration-300 inline-block transform hover:scale-105"
            >
              Start Exploring
            </a>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Quick Facts About South Africa</h2>
            <Carousel className="max-w-xl mx-auto">
              <CarouselContent>
                {quickFacts.map((fact, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-gray-800 border-2 border-yellow-400">
                      <CardContent className="flex items-center justify-center p-6">
                        <p className="text-center text-lg text-white">{fact}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <section id="explore" className="mt-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">Explore South Africa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Geography"
                description="Explore South Africa's diverse landscapes and terrain."
                link="/geography"
                color="from-green-400 to-blue-500"
              />
              <FeatureCard
                title="Economy"
                description="Discover South Africa's diverse and growing economy."
                link="/economy"
                color="from-red-500 to-pink-500"
              />
              <FeatureCard
                title="Culture"
                description="Explore the rich cultural tapestry of the Rainbow Nation."
                link="/culture"
                color="from-purple-500 to-indigo-500"
              />
              <FeatureCard
                title="Tourism"
                description="Explore the Tourism of Beautiful South Africa"
                link="/tourism"
                color="from-yellow-400 to-orange-500"
              />
              <FeatureCard
                title="Climate"
                description="Discover South Africa's diverse climate regions."
                link="/climate"
                color="from-green-500 to-teal-500"
              />
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">Featured: The Big Five</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border-2 border-yellow-500">
              <p className="text-xl mb-4 text-gray-300">
                South Africa is home to the "Big Five" - five of Africa's most iconic wildlife species:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Lion</li>
                <li>Leopard</li>
                <li>Rhinoceros</li>
                <li>Elephant</li>
                <li>Cape Buffalo</li>
              </ul>
              <p className="mt-4 text-gray-300">
                These magnificent animals can be seen in many of South Africa's national parks and game reserves, with
                Kruger National Park being one of the most popular destinations for wildlife enthusiasts.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ title, description, link, color }) => (
  <Link
    href={link}
    className={`block p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-gradient-to-br ${color} transform hover:scale-105`}
  >
    <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-100">{description}</p>
  </Link>
)

