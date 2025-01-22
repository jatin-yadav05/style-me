import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { Textarea } from "../components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Label } from "../components/ui/label"
import { Wand2 } from "lucide-react"

function Generate() {
  const [gender, setGender] = useState('female')
  const [description, setDescription] = useState('')
  const [fabric, setFabric] = useState('cotton')
  const [size, setSize] = useState('xl')
  const [color, setColor] = useState('#000033')

  return (
    <div className='bg-black dark min-h-screen text-white p-8 flex gap-8'>
      {/* Left Panel */}
      <div className='w-1/3 space-y-6'>
        {/* Image placeholder */}
        <div className='rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900'>
          <div className='w-full h-64 bg-zinc-900 flex items-center justify-center'>
            <span className="text-zinc-500">Upload Image</span>
          </div>
        </div>

        {/* Gender Selection */}
        <div className='space-y-3'>
          <Label className="text-zinc-400">Gender</Label>
          <RadioGroup
            value={gender}
            onValueChange={setGender}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male" className="text-zinc-300">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female" className="text-zinc-300">Female</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Description */}
        <div className='space-y-3'>
          <Label className="text-zinc-400">Description</Label>
          <Textarea
            placeholder="Describe your desired outfit..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[100px] bg-zinc-900 border-zinc-800 text-zinc-300 placeholder:text-zinc-600"
          />
        </div>

        {/* Color */}
        <div className='space-y-3'>
          <Label className="text-zinc-400">Color</Label>
          <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
            <input 
              type="color" 
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className='absolute inset-0 w-full h-full cursor-pointer'
            />
          </div>
        </div>

        {/* Fabric & Size */}
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-3'>
            <Label className="text-zinc-400">Fabric</Label>
            <Select value={fabric} onValueChange={setFabric}>
              <SelectTrigger className="bg-zinc-900 border-zinc-800 text-zinc-300">
                <SelectValue placeholder="Select fabric" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="cotton">Cotton</SelectItem>
                <SelectItem value="silk">Silk</SelectItem>
                <SelectItem value="wool">Wool</SelectItem>
                <SelectItem value="polyester">Polyester</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className='space-y-3'>
            <Label className="text-zinc-400">Size</Label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger className="bg-zinc-900 border-zinc-800 text-zinc-300">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Generate Button */}
        <Button className="w-full bg-white hover:bg-zinc-200 text-black" size="lg">
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Design
        </Button>
      </div>

      {/* Right Panel */}
      <div className='w-2/3 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='mb-4'>
            <div className="w-24 h-24 mx-auto text-zinc-700">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10H7z M7 3v4M17 3v4M7 17v4M17 17v4" />
              </svg>
            </div>
          </div>
          <h2 className='text-2xl font-semibold text-white mb-2'>Ready to create</h2>
          <p className='text-zinc-400'>Configure your preferences and generate a design</p>
        </div>
      </div>
    </div>
  )
}

export default Generate