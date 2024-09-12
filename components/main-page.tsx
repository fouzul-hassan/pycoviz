'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code2, FlowChart, Function, Layers, PlayCircle, Zap } from 'lucide-react'

export function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      <header className="p-6 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Python Concept Visualizer</h1>
          <Link href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              Contribute
            </Button>
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex-grow mt-10 p-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Choose a concept to visualize:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ConceptCard 
            title="Data Structures" 
            description="Visualize lists, dictionaries, tuples, and sets"
            link="/data-structures"
            icon={<Code2 className="w-6 h-6" />}
          />
          <ConceptCard 
            title="Flow Control" 
            description="Understand loops and conditionals"
            link="/flow-control"
            icon={<FlowChart className="w-6 h-6" />}
          />
          <ConceptCard 
            title="Functions" 
            description="Explore function behavior and recursion"
            link="/functions"
            icon={<Function className="w-6 h-6" />}
          />
          <ConceptCard 
            title="OOP Concepts" 
            description="Learn about classes, objects, and inheritance"
            link="/oop"
            icon={<Layers className="w-6 h-6" />}
          />
          <ConceptCard 
            title="Code Execution" 
            description="Write and visualize Python code in real-time"
            link="/code-execution"
            icon={<PlayCircle className="w-6 h-6" />}
          />
          <ConceptCard 
            title="Advanced Concepts" 
            description="Dive into memory management and algorithms"
            link="/advanced"
            icon={<Zap className="w-6 h-6" />}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ConceptCard({ title, description, link, icon }) {
  return (
    <Link href={link} className="block">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold ml-2 text-blue-600">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Button className="w-full mt-auto">Explore</Button>
      </div>
    </Link>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 mb-2">Created by Fouzul Hassan</p>
        <div className="flex justify-center space-x-4">
          <Link href="https://linkedin.com/in/fouzulhassan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="https://github.com/fouzul-hassan" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
            <Github className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}