'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function FlowControl() {
  const [number, setNumber] = useState(0)
  const [result, setResult] = useState('')
  const [loopResult, setLoopResult] = useState([])

  const checkNumber = () => {
    if (number > 0) {
      setResult('Positive')
    } else if (number < 0) {
      setResult('Negative')
    } else {
      setResult('Zero')
    }
  }

  const runForLoop = () => {
    const newResult = []
    for (let i = 0; i < number; i++) {
      newResult.push(`Iteration ${i + 1}`)
    }
    setLoopResult(newResult)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2" /> Back to Main Page
          </Link>
          <Link href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              Contribute
            </Button>
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Flow Control Visualizer</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">If-Else Statement</h2>
            <div className="flex items-end gap-2 mb-4">
              <div className="flex-grow">
                <Label htmlFor="number" className="text-sm font-medium text-gray-700">Enter a number:</Label>
                <Input
                  id="number"
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(parseInt(e.target.value))}
                  placeholder="Enter a number"
                  className="mt-1"
                />
              </div>
              <Button onClick={checkNumber}>Check</Button>
            </div>
            {result && (
              <div className="bg-blue-50 border border-blue-200 rounded p-3 text-blue-800 animate-fade-in">
                The number is: <span className="font-semibold">{result}</span>
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">For Loop</h2>
            <Button onClick={runForLoop} className="mb-4">Run For Loop</Button>
            {loopResult.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded p-3 text-blue-800 animate-fade-in">
                <ul className="list-disc pl-5">
                  {loopResult.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
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