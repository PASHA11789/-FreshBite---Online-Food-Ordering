import React from "react";

function AboutUs() {
  const team = [
    { name: "Chef Haroon Pasha", role: "Executive Head Chef", bio: "Over 15 years crafting rich and aromatic traditional handi and karahi dishes.", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=300&auto=format&fit=crop" },
    { name: "Ayesha Khan", role: "Nutritionist & Quality Specialist", bio: "Ensures every meal meets our strict standards of fresh ingredients and healthy balance.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" },
    { name: "Hamza Malik", role: "Customer Operations Lead", bio: "Committed to delivering warmth and care with every single FreshBite delivery.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" }
  ];

  const awards = [
    { title: "Best Culinary Startup 2025", issuer: "Lahore Food Society" },
    { title: "Top Healthy Meal Delivery", issuer: "Punjab Nutrition Board" },
    { title: "Outstanding Customer Care", issuer: "Appetite Pakistan Association" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 w-full flex-1">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
          Our Story
        </span>
        <h1 className="text-4xl lg:text-6xl font-black text-secondary tracking-tight mt-2 mb-4 leading-tight">
          About <span className="text-primary underline">FreshBite</span>
        </h1>
        <p className="text-neutral font-medium text-base max-w-xl mx-auto leading-relaxed">
          Crafting cozy, delicious, and inviting dining experiences delivered straight to your home with love.
        </p>
      </div>

      {/* Main Story Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        <div className="rounded-[32px] overflow-hidden aspect-[4/3] bg-neutral/10 border border-[#EAE5E2]">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" 
            alt="Kitchen cooking" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-secondary tracking-tight">
            Cozy Comfort in Every Bite
          </h2>
          <p className="text-neutral/90 text-sm font-medium leading-relaxed">
            FreshBite started in a tiny kitchen in Lahore with one simple vision: bringing the warmth of home-cooked culinary excellence straight to your dining table. We believe that food isn't just fuel—it is comfort, connection, and a lot of love.
          </p>
          <p className="text-neutral/90 text-sm font-medium leading-relaxed">
            We partner with the finest local farmers to select raw, fresh ingredients every morning. From rich, slow-simmered traditional handis to gourmet, hand-smashed beef patties, our dishes are crafted without artificial preservatives or shortcuts.
          </p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-extrabold text-secondary tracking-tight text-center mb-10">
          Meet Our Kitchen Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white border border-[#EAE5E2] rounded-[32px] overflow-hidden p-6 shadow-xs text-center flex flex-col items-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-24 h-24 rounded-full object-cover mb-4 border border-[#EAE5E2]"
              />
              <h3 className="font-extrabold text-base text-secondary">{member.name}</h3>
              <span className="text-xs text-primary font-bold">{member.role}</span>
              <p className="text-neutral/80 text-xs font-semibold leading-relaxed mt-3">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-white border border-[#EAE5E2] rounded-[32px] p-8 sm:p-10 shadow-sm text-center">
        <h2 className="text-3xl font-extrabold text-secondary tracking-tight mb-8">
          Recognitions & Awards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE5E2]">
          {awards.map((award, i) => (
            <div key={i} className="space-y-2 pt-6 sm:pt-0 sm:px-4 first:pt-0 first:pl-0">
              <span className="text-3xl">🏆</span>
              <h3 className="font-extrabold text-sm text-secondary tracking-tight">{award.title}</h3>
              <p className="text-neutral text-xs font-semibold">{award.issuer}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
