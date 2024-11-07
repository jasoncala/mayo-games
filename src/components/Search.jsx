'use client'
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    router.push(`/search?q=${searchTerm}`)
  }

  return ( 
    <form onSubmit={handleSearch} className="relative flex-1 max-w-md mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute left-2.5 top-2 h-4 w-4 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input type="search"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search for games... Ex. Super Mario..."
      className="w-full rounded-lg bg-main border border-accent pl-8 pr-4 h-8"
      />
    </form>
  )
}