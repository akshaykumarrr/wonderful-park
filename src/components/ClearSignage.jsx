import React, { useState } from "react";
import Users from "./DynamicViewComp";
import SignageCard from "./SignageCard";
import { CiSearch } from "react-icons/ci";

const signageData = [
    {
        id: 1,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ocjUXGoCyl9FqwsWBwFdH02y2DPRsJUCGg&s",
        name: "Way Finding Signage",
        description: "Guides visitors to key locations within the park, helping them navigate attractions and amenities."
    },
    {
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpedLpeiWfMUWS_7PR8jeqlDpC55cwlMW-w&s",
        name: "Fire Extinguisher Signage",
        description: "Indicates the location of fire extinguishers for emergency situations, ensuring safety."
    },
    {
        id: 3,
        src: "https://cdn.pixabay.com/photo/2021/11/06/16/57/signage-6773809_1280.png",
        name: "Safe Zone Signage",
        description: "Designates areas where guests can seek assistance or refuge in case of emergencies."
    },
    {
        id: 4,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMRwNfuxKWc4mi9WwIHEhEfLfPpO9sr_X-w&s",
        name: "Restroom Signage",
        description: "Directs guests to restroom facilities, clearly marked for convenience."
    },
    {
        id: 5,
        src: "https://img.freepik.com/free-vector/visitor-parking-sign_78370-4318.jpg?semt=ais_hybrid",
        name: "Parking Signage",
        description: "Guides visitors to parking areas and indicates the location of designated parking spots."
    },
    {
        id: 6,
        src: "https://as1.ftcdn.net/v2/jpg/02/99/97/20/1000_F_299972070_fKEPTll4V0IbqPxLhzf7KhC66fpzWoV1.jpg",
        name: "Food Signage",
        description: "Displays information about food options available in the park, including menus and specials."
    },
    {
        id: 7,
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/emergency-exit-signage-design-template-98a908ff58e8cbc3a9117f177dd8a4ea_screen.jpg?ts=1670196646",
        name: "Emergency Exit Signage",
        description: "Indicates the location of emergency exits for safe evacuation in case of an emergency."
    },
    {
        id: 8,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFlupRng7AYI_61B2kgZaTeOhgyHg6FSU6g&s",
        name: "Baby Feeding Signage",
        description: "The baby feeding signage provides clear directions to designated feeding areas, promoting a welcoming environment for nursing and bottle-feeding."
    },
];

const Signage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter signage data based on search term
    const filteredSignages = signageData.filter(signage =>
        signage.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="signage-container">
            <Users collectionName="signage" heading={"Clear Signage"} />

          <div className="searchbar w-full h-[10vh] bg-gray-200 flex items-center justify-center">
              <div className="bar h-[50%] bg-gray-100 flex">
                  <input
                      type="text"
                      placeholder="Search for signage..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="p-2 rounded w-full md:w-[500px]"
                  />
                  <CiSearch className="text-2xl flex items-center bg-gray-200 font-bold m-2" />
              </div>
          </div>
            <div className="flex justify-between">
                <div className="left w-1/3 p-4">
                    {filteredSignages.slice(0, 4).map(signage => (
                        <SignageCard key={signage.id} signage={signage} />
                    ))}
                </div>
                <div className="middle w-1/3 flex items-center justify-center">
                    <img
                        className="w-full"
                        src="https://www.askmeholidays.com/wp-content/uploads/2017/03/wonderla-map.jpg"
                        alt="Theme Park Map"
                    />
                </div>
                <div className="right w-1/3 p-4">
                    {filteredSignages.slice(4).map(signage => (
                        <SignageCard key={signage.id} signage={signage} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Signage;
