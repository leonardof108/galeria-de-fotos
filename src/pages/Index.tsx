import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import PhotoGrid from "@/components/PhotoGrid";
import Footer from "@/components/Footer";
import { photos } from "@/data/photos";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) {
      return photos;
    }
    
    const normalizedSearch = searchTerm.toLowerCase().trim();
    return photos.filter((photo) =>
      photo.name.toLowerCase().includes(normalizedSearch)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pb-16">
        <Header />
        
        <div className="mb-10">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
        </div>
        
        <PhotoGrid photos={filteredPhotos} />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
