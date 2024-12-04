'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart2, Globe2, MessageSquare, Shield, Zap, Gift } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400">84%</div>
              <div className="text-gray-600 mt-2">Signal Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400">500+</div>
              <div className="text-gray-600 mt-2">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400">24/7</div>
              <div className="text-gray-600 mt-2">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400">4.8/5★</div>
              <div className="text-gray-600 mt-2">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose C.O.D.?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Signals</h3>
              <p className="text-gray-600">Get instant notifications for high-probability trading opportunities across major currency pairs.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BarChart2 className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
              <p className="text-gray-600">Detailed market analysis and trading strategies from seasoned professionals.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <MessageSquare className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Access</h3>
              <p className="text-gray-600">Valuable monthly giveaways for our premium members as incentives.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">We Don&apos;t Control Your Money, You Do.</h2>
            <p className="text-xl text-gray-600 mt-4">We provide the expertise,  but you handle your own funds and choose where to invest, ensuring complete independence and flexibility.We emphasize that you maintain complete control over your finances. While our premium service offers exclusive access to expert insights and trading signals, we do not manage or handle your money. You deposit and manage your investments directly with the agents or companies that best align with your needs and preferences. This approach ensures that your financial journey is fully in your hands, giving you independence. flexibility, and peace of mind as you leverage our mastery to make informed decisions.</p>
          </div>
<div className="flex flex-col md:flex-row justify-between items-center">
          <Card className="w-[45%] mx-auto p-8 text-center m-2">
            <div className="text-5xl font-bold">Free</div>
            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-emerald-500 mr-3" />
                <span>Standard Trading Signals</span>
              </li>
              <li className="flex items-center">
                <BarChart2 className="w-5 h-5 text-emerald-500 mr-3" />
                <span>Weekly Overview</span>
              </li>
            </ul>
            <Button onClick={()=>{window.open('https://t.me/CentsOnDollarsFree', '_blank')}}  className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600">
              Join Now
            </Button>
          </Card>
           <Card className="w-[45%] mx-auto p-8 text-center m-2">
            <div className="text-5xl font-bold">$68<span className="text-xl text-gray-500">/month</span></div>
            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-emerald-500 mr-3" />
                <span>Premium Trading Signals</span>
              </li>
              <li className="flex items-center">
                <Globe2 className="w-5 h-5 text-emerald-500 mr-3" />
                <span>24/7 Market Analysis</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="w-5 h-5 text-emerald-500 mr-3" />
                <span>Private Community Access</span>
              </li>
              <li className="flex items-center">
                <BarChart2 className="w-5 h-5 text-emerald-500 mr-3" />
                <span>Educational Resources</span>
              </li>
              <li className="flex items-center">
                <Gift className="w-5 h-5 text-emerald-500 mr-3" />
                <span>Valueble Montly Giveaways</span>
              </li>
            </ul>
            <Button onClick={()=>{window.open('https://www.patreon.com/checkout/CentsOnDollars?rid=24480075', '_blank')}} className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600">
              Subscribe Now
            </Button>
          </Card>
  </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Don&apos;t Be Left Behind...</h2>
          <p className="text-xl mt-4 mb-8">We believe that everyone, regardless of experience, deserves the knowledge and tools to make informed financial decisions. Whether you’re a beginner taking your first steps or a seasoned trader looking to refine your strategy, our commitment to continuous market monitoring ensures that you have the best opportunities at your fingertips, leaving you with only one outcome: PROFIT.</p>
          <Button onClick={()=>{window.open('https://www.patreon.com/checkout/CentsOnDollars?rid=24480075', '_blank')}} size="lg" variant="secondary" className="bg-white text-emerald-500 hover:bg-gray-100">
            Get Started Now
          </Button>
        </div>
      </section>
    </main>
  );
}

const testimonials = [
  {
    text: "The signals from Cents on Dollars have completely transformed my trading. I've seen consistent profits since joining.",
    name: "Rami Abi Rashed",
    title: "Full-time Trader",
    avatar: "https://avatar.iran.liara.run/public/32",
  },
  {
    text: "The community support and expert analysis have helped me develop a solid trading strategy. Worth every penny!",
    name: "Nader Khatib",
    title: "Investment Analyst",
    avatar: "https://avatar.iran.liara.run/public/26",
  },
  {
    text: "Incredible value for money. The real-time signals and educational resources are top-notch.",
    name: "Fabio Hatem",
    title: "Part-time Trader",
    avatar: "https://avatar.iran.liara.run/public/30",
  },
];