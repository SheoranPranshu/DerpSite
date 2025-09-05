import { useState } from 'react';
import TeamData from '../components/data/team.json'

const Team = () => {
   const [hoveredCard, setHoveredCard] = useState(null);

   return (
      <div className="min-h-screen py-12 bg-gradient-to-br from-base-100 to-base-200">
         {/* Header Section */}
         <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
               Meet Our Team
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto px-4">
               The passionate individuals behind our project, dedicated to bringing you the best experience.
            </p>
         </div>

         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
               {TeamData.map((team, index) => (
                  <div 
                     key={index}
                     className={`group card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-base-300 hover:border-primary/50 overflow-hidden ${
                        hoveredCard === index ? 'scale-105' : ''
                     }`}
                     onMouseEnter={() => setHoveredCard(index)}
                     onMouseLeave={() => setHoveredCard(null)}
                  >
                     <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                     
                     <div className="pt-8 pb-4 flex justify-center">
                        <div className="avatar placeholder">
                           <div className="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-full w-20 h-20 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                              <span className="text-2xl font-bold">
                                 {team.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                              </span>
                           </div>
                        </div>
                     </div>

                     <div className="card-body pt-0 pb-8 text-center">
                        {/* Name */}
                        <h2 className="card-title text-xl font-bold justify-center mb-2 group-hover:text-primary transition-colors duration-300">
                           {team.name}
                        </h2>
                        
                        <div className="mb-4">
                           <span className="badge badge-outline badge-lg px-4 py-2 text-sm font-medium group-hover:badge-primary transition-all duration-300">
                              {team.role}
                           </span>
                        </div>

                        <div className="card-actions justify-center gap-3 mt-auto">
                           <a 
                              href={team.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-ghost hover:btn-primary bg-gradient-to-r from-[#33bbff] to-[#1de099] text-white border-0 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                           >
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                 <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                              </svg>
                              GitHub
                           </a>
                           
                           <a 
                              href={team.telegram} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline hover:btn-info hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                           >
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                              </svg>
                              Telegram
                           </a>
                        </div>
                     </div>

                     <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
               ))}
            </div>
         </div>

         <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-2 text-base-content/50">
               <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary"></div>
               <span className="text-sm font-medium">Built with ❤️</span>
               <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary"></div>
            </div>
         </div>
      </div>
   );
};

export default Team;
