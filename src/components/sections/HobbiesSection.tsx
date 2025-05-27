import { Card, CardContent } from "@/components/ui/card";

const hobbies = [
  {
    title: "Photography",
    content: [
      "I'm passionate about capturing moments through the lens. Photography has taught me to pay attention to details and see patterns in unexpected places - skills that translate beautifully to data analysis.",
      "My favorite subjects include landscape photography and street photography. I love the challenge of finding the perfect composition and lighting, much like finding insights in complex datasets."
    ],
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Photography hobby"
  },
  {
    title: "Hiking & Outdoor Adventures",
    content: [
      "There's nothing quite like disconnecting from technology and connecting with nature. Hiking helps me clear my mind and approach problems from fresh perspectives when I return to work.",
      "Living in the Bay Area gives me access to incredible trails. Some of my favorites include Mount Tamalpais, Big Sur, and the various trails in Marin County. I try to get out on the trails at least once a week."
    ],
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Hiking and outdoor activities",
    reversed: true
  },
  {
    title: "Cooking & Food Science",
    content: [
      "Cooking is another form of experimentation for me. I love trying new recipes and understanding the science behind different cooking techniques. It's fascinating how small changes in ingredients or temperature can dramatically affect the outcome.",
      "I particularly enjoy Asian cuisine and have been experimenting with fermentation lately. There's something satisfying about the precision required in baking that appeals to my analytical nature."
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Cooking and culinary interests"
  },
  {
    title: "Reading & Continuous Learning",
    content: [
      "I'm an avid reader with interests spanning from technical books on machine learning to science fiction novels. I believe that reading broadly helps me think more creatively about problem-solving in data science.",
      "Currently reading \"The Alignment Problem\" by Brian Christian and \"Klara and the Sun\" by Kazuo Ishiguro. I also subscribe to several data science newsletters and research publications to stay current with the field."
    ],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Reading and learning",
    reversed: true
  }
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Hobbies & Interests</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            When I'm not analyzing data, here's what I enjoy doing
          </p>
        </div>
        
        <div className="space-y-16">
          {hobbies.map((hobby, index) => (
            <Card key={hobby.title} className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={hobby.reversed ? 'order-2 lg:order-1' : ''}>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{hobby.title}</h2>
                    {hobby.content.map((paragraph, idx) => (
                      <p key={idx} className="text-lg text-slate-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <img 
                    src={hobby.image} 
                    alt={hobby.alt} 
                    className={`rounded-xl shadow-lg w-full h-80 object-cover ${
                      hobby.reversed ? 'order-1 lg:order-2' : ''
                    }`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
