"use client";

import React, { useState } from "react";
import SearchBox from "./SearchBox";
import ContentCard from "./ContentCard";
import { searchbox } from "../Constants/faq/faq.json";

const FAQ: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState(searchbox.categories);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelect = (selectedCategories: string[]) => {
    if (selectedCategories.length === 0 && searchTerm === "") {
      setFilteredQuestions(searchbox.categories);
    } else {
      const filtered = searchbox.categories
        .filter((category) =>
          selectedCategories.length === 0 || selectedCategories.includes(category.name)
        )
        .map((category) => {
          return {
            ...category,
            faqs: category.faqs.filter((faq) =>
              faq.que.toLowerCase().includes(searchTerm.toLowerCase())
            )
          };
        });
      setFilteredQuestions(filtered);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    handleCategorySelect([]);
  };

  return (
    <div className=" h-[90vh] w-full ">
        <h1 className="text-5xl font-poppins font-bold text-[#dc0e2a] relative mt-20 left-5">FAQ's</h1>
        <div className="flex  top-10 relative ">
      <div className="sticky top-[24vh] lg:w-1/5  px-4 p-1 lg:overflow-auto h-[73vh] no-scrollbar ">
        <SearchBox onCategorySelect={handleCategorySelect} onSearch={handleSearch} />
      </div>
      <div className="lg:w-[80%] w-full lg:h-[72vh] overflow-auto p-4 no-scrollbar">
        <ContentCard categories={filteredQuestions} />
      </div>
      </div>
    </div>
  );
};

export default FAQ;
