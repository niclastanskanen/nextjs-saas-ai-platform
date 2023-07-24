"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Anthony",
    avatar: "A",
    title: "Software Engineer",
    description: "AI tool is a game-changer! Chatbot, photos, music - all covered. Content generation made efficient, revolutionizing workflow."
  },
  {
    name: "Sophie",
    avatar: "S",
    title: "Graphic Designer",
    description: "The AI tool is an artist's companion! Captivating visuals effortlessly created, freeing creativity to focus on concepts and vision.",
  },
  {
    name: "Michael",
    avatar: "M",
    title: "Music Producer",
    description: "AI music generation is outstanding! Endless inspiration, exploring unique styles. A must-have for fellow music enthusiasts.",
  },
  {
    name: "Emily",
    avatar: "E",
    title: "Web Developer",
    description: "Essential AI toolkit! Automate code generation, unleash creativity. Productivity soared, more time for web development innovation.",
  },
];


const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LandingContent