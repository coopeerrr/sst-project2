import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Tourism() {
  const attractions = [
    { name: "Cape Town", description: "Second largest city, known as the Mother City" },
    { name: "Kruger National Park", description: "Famous for desert safari" },
    { name: "Drakensberg Mountains", description: "Highest mountain range with waterfalls and caves" },
    { name: "Apartheid Museum", description: "Showcases 20th-century history of South Africa" },
    { name: "Constitutional Hill", description: "Former prison complex in Johannesburg" },
    { name: "Johannesburg", description: "Largest city and economic hub of South Africa" },
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8 text-center text-blue-400">Tourism in South Africa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-xl mb-6 text-gray-200 bg-blue-900 bg-opacity-50 p-6 rounded-lg shadow-lg">
            South Africa offers a diverse range of attractions, from bustling cities that blend African and European
            cultures to stunning natural landscapes and historically significant sites.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Popular Attractions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {attractions.map((attraction, index) => (
              <Card key={index} className="bg-blue-900 bg-opacity-50 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-blue-400">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-200">{attraction.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Image
            src="https://img.klm.com.cn/images/media/B2B667B6-DC8C-46DA-B9F0A9EBF1877EDE"
            alt="South African Tourist Attractions"
            width={500}
            height={300}
            className="rounded-lg shadow-2xl border-4 border-blue-500"
          />
          <Card className="bg-blue-900 bg-opacity-50 p-6 rounded-lg shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold mb-4 text-blue-400">Highlight: Cape Town</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                Cape Town, the second largest city in South Africa, is also known as the Mother City. It beautifully
                reflects the blend of African and European cultures, offering visitors a unique and diverse experience.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-blue-900 bg-opacity-50 p-6 rounded-lg shadow-xl">
            <CardTitle className="text-xl font-bold mb-4 text-blue-400">Natural Wonders</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <strong>Kruger National Park:</strong> Famous for desert safari experiences
                </li>
                <li>
                  <strong>Drakensberg Mountains:</strong> The highest mountain range in South Africa, featuring
                  waterfalls, rock pools, streams, and caves
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-900 bg-opacity-50 p-6 rounded-lg shadow-xl">
            <CardTitle className="text-xl font-bold mb-4 text-blue-400">Historical Sites</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <strong>Apartheid Museum:</strong> Located in Johannesburg, it showcases the 20th-century history of
                  South Africa
                </li>
                <li>
                  <strong>Constitutional Hill:</strong> A former prison complex in Johannesburg where Mahatma Gandhi,
                  Nelson Mandela, and others were once imprisoned
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

