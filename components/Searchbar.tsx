'use client';

import { FormEvent, useState } from 'react';
import { classes } from '../data/classes.json';

const isValidClass = (input: string) => {
  try {
    if (classes.some((cls) => cls.name.toLowerCase() === input.toLowerCase())) {
      return true;
    }
  } catch (error) {
    return false;
  }
  return false;
};

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = isValidClass(searchPrompt);
    if (!isValid) return alert('Please enter a valid player class.');

    try {
      setIsLoading(true);

      // Scrape class data from WowHead
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter character class"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button type="submit" className="searchbar-btn" disabled={searchPrompt === ''}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default Searchbar;
