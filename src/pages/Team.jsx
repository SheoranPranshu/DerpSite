import TeamData from '../components/data/team.json'

const Team = () => {
   return (
      <div className="py-12 min-h-screen bg-base-100">
         <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-base-content mb-4">
               Meet Our Team
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#33bbff] to-[#1de099] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto px-4">
               The passionate individuals behind our project, dedicated to bringing you the best experience.
            </p>
         </div>

         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {TeamData.map((team, index) => (
                  <div 
                     key={index}
                     className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-base-300 hover:border-[#33bbff]/30"
                  >
                     <div className="h-1 bg-gradient-to-r from-[#33bbff] to-[#1de099]"></div>
                     
                     <div className="card-body p-6">
                        <div className="flex justify-center mb-4">
                           <div className="avatar placeholder">
                              <div className="bg-gradient-to-br from-[#33bbff] via-[#2dd4bf] to-[#1de099] text-white rounded-full w-16 h-16 shadow-lg relative overflow-hidden group">
                                 {/* Background Pattern */}
                                 <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-1 left-1 w-3 h-3 bg-white/30 rounded-full"></div>
                                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/20 rounded-full"></div>
                                    <div className="absolute top-1/2 right-1 w-1 h-1 bg-white/40 rounded-full"></div>
                                 </div>
                                 
                                 <span className="text-xl font-bold relative z-10 drop-shadow-sm">
                                    {team.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                 </span>
                                 
                                 <div className="absolute inset-0 rounded-full ring-2 ring-white/20"></div>
                              </div>
                           </div>
                        </div>

                        <h2 className="text-xl font-bold text-center text-base-content mb-3">
                           {team.name}
                        </h2>
                        
                        <div className="text-center mb-6 min-h-[3rem] flex items-center justify-center">
                           <p className="text-sm text-base-content/70 leading-relaxed">
                              {team.role}
                           </p>
                        </div>

                        <div className="flex justify-center gap-3">
                           <a 
                              href={team.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="btn btn-sm bg-gradient-to-r from-[#33bbff] to-[#1de099] text-white border-0 hover:shadow-md hover:scale-105 transition-all duration-200"
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
                              className="btn btn-sm btn-outline border-base-300 hover:border-[#33bbff] hover:bg-[#33bbff] hover:text-white transition-all duration-200"
                           >
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                              </svg>
                              Telegram
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 text-base-content/50">
               <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#33bbff] to-transparent"></div>
               <span className="text-sm">Built with passion</span>
               <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#1de099] to-transparent"></div>
            </div>
         </div>
      </div>
   );
};

export default Team;
