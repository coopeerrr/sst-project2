"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, ShoppingCart, Tractor, Factory, Gem } from "lucide-react"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Economy() {

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8 text-center text-amber-400">South African Economy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Card className="bg-amber-900 bg-opacity-50 shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                South Africa boasts a diverse and dynamic economy, the second largest in Africa. It's characterized by a
                unique blend of developed infrastructure and emerging market opportunities. The economy is largely a
                mixed economy, with both private and public enterprises co-existing, though recent years have seen a
                push towards increased privatization in the industrial sector.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="sectors" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-amber-800">
              <TabsTrigger value="sectors">Key Sectors</TabsTrigger>
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
              <TabsTrigger value="mining">Mining</TabsTrigger>
            </TabsList>
            <TabsContent value="sectors" className="bg-amber-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-amber-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-400 flex items-center">
                      <Gem className="mr-2 h-5 w-5" />
                      Mining
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      World's largest producer of gold, platinum, and chromium. Rich in diamonds, iron ore, and other
                      minerals.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-amber-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-400 flex items-center">
                      <Factory className="mr-2 h-5 w-5" />
                      Manufacturing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      Diverse sector including automotive, textiles, and food processing industries.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-amber-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-400 flex items-center">
                      <DollarSign className="mr-2 h-5 w-5" />
                      Financial Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      Well-developed banking and financial sector, contributing significantly to GDP.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-amber-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-400 flex items-center">
                      <Tractor className="mr-2 h-5 w-5" />
                      Agriculture
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      Major exports include wool, fruits, and maize. Significant livestock and dairy farming.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="agriculture" className="bg-amber-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-amber-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-400 flex items-center">
                      <Tractor className="mr-2 h-5 w-5" />
                      Livestock
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      Extensive cattle and sheep rearing. Merino wool is a prominent export.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-amber-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-400 flex items-center">
                      <Tractor className="mr-2 h-5 w-5" />
                      Dairy Farming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      Significant production of cheese and milk in grazing areas.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-amber-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-400 flex items-center">
                      <Tractor className="mr-2 h-5 w-5" />
                      Crop Production
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      Cultivation of maize, wheat, tobacco, and various fruits.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="mining" className="bg-amber-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-amber-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-400 flex items-center">
                      <Gem className="mr-2 h-5 w-5" />
                      Gold and Diamonds
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      World's largest producer of gold (Johannesburg) and significant diamond mining (Kimberley).
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-amber-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-400 flex items-center">
                      <Gem className="mr-2 h-5 w-5" />
                      Platinum and Chromium
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      Leading producer of platinum and chromium, essential for various industries.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-amber-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-400 flex items-center">
                      <Gem className="mr-2 h-5 w-5" />
                      Other Minerals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      Rich in iron ore, manganese, copper, uranium, silver, beryllium, and titanium.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <Card className="bg-amber-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">Economic Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center">
                  <DollarSign className="mr-2 h-4 w-4" />
                  GDP (2023): $411.48 billion
                </li>
                <li className="flex items-center">
                  <DollarSign className="mr-2 h-4 w-4" />
                  GDP per capita: $6,994
                </li>
                <li className="flex items-center">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Major exports: gold, diamonds, platinum, wool, fruits
                </li>
                <li className="flex items-center">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Currency: South African Rand (ZAR)
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">Key Industries</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <strong>Mining:</strong> World's largest producer of gold (Johannesburg), diamonds (Kimberley),
                  platinum, chromium. Also rich in iron ore, manganese, copper, uranium, silver, beryllium, and
                  titanium.
                </li>
                <li>
                  <strong>Agriculture:</strong> Merino wool production, extensive livestock rearing, dairy farming, crop
                  cultivation (maize, wheat, tobacco, fruits)
                </li>
                <li>
                  <strong>Manufacturing:</strong> Automotive, textiles, food processing
                </li>
                <li>
                  <strong>Services:</strong> Financial services, tourism, telecommunications
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-400">Economic Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                South Africa's economy is primarily a mixed economy, with both private and public enterprises playing
                significant roles. The country's vast mineral wealth and well-developed agricultural sector form the
                backbone of its economy. Recent years have seen a push towards increased privatization in the industrial
                sector, aiming to boost efficiency and competitiveness. The mining industry, particularly gold and
                diamonds, continues to be a major contributor to the economy, while agriculture remains crucial for both
                domestic food security and exports.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

