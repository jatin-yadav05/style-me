import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    { name: 'Jatin', role: 'Leader', image: '' },
    { name: 'Herish', role: 'Member', image: '' },
    { name: 'Lavisha', role: 'Member', image: '' },
    { name: 'Kashish', role: 'Member', image: '' },
  ];

  const [selectedMember, setSelectedMember] = React.useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeMemberDetails = () => {
    setSelectedMember(null);
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen font-sans flex flex-col">

      <main className="container mx-auto px-8 py-24 flex-grow">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-400 mb-12">
            Meet our diverse team of world-class creators, designers, and problem solvers.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden relative group cursor-pointer hover:scale-105 transition duration-300"
              onClick={() => handleMemberClick(member)}
            >
              <div className="h-48 w-full bg-gray-600 relative overflow-hidden">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition duration-300 group-hover:scale-110"
                  />
                )}
                {!member.image && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-2xl">No Image</div>
                )}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
              </div>
              <div className="p-6 text-center relative z-10">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h2 className="text-xl font-medium">{member.name}</h2>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                  <button className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700 transition duration-300">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto relative transform transition-transform duration-300 ease-in-out">
              <button
                onClick={closeMemberDetails}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-2">{selectedMember.name}</h2>
              <p className="text-gray-700 mb-4">{selectedMember.role}</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 py-8 px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-2xl font-bold mr-4">STYLEME</div>
            <p className="text-xs text-gray-500">Copyright @ 2023 StyleMe</p>
          </div>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 mb-4 md:mb-0">
            <div>
              <h4 className="font-bold text-gray-300 mb-2">About Us</h4>
              <ul className="text-gray-500 text-sm space-y-1">
                <li>Mission</li>
                <li>Team</li>
                <li>Newsletter</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 mb-2">Quick Links</h4>
              <ul className="text-gray-500 text-sm space-y-1">
                <li>Design</li>
                <li>FAQ</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 mb-2">Support</h4>
              <ul className="text-gray-500 text-sm space-y-1">
                <li>support@gmail.com</li>
                <li>+1(234)567890</li>
                <li>123 Fashion Ave. Style City</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-xs text-gray-500">
            <div>Terms of Service</div>
            <div>Back to Top</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeamPage;