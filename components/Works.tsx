'use client';

import { WorkCase } from './WorkCase';

export const Works = () => {
  return (
    <section id="work" className="relative w-full">
      <h2 className="absolute top-[3vw] left-1/2 md:left-[75%] -translate-x-1/2 md:-translate-x-0 z-10 text-[12px] font-light uppercase">Member Transformations</h2>
      <WorkCase 
        letter="S"
        title="Sarah Jenkins"
        titleClassName="text-[#4d4747]" 
        type="Powerlifting Member"
        roles={['Free Weights', 'Squat Racks', 'Deadlift Platforms']}
        intro="Sarah hit her personal bests using our state-of-the-art powerlifting racks and supportive community."
        img1="https://images.pexels.com/photos/34794689/pexels-photo-34794689.jpeg"
        img2="https://picsum.photos/seed/athlete2/800/400"
      />
      <WorkCase 
        letter="M"
        title="Marcus Cole"
        type="Fitness Enthusiast"
        roles={['HIIT', 'Cardio', 'Machines']}
        intro="Marcus transformed his physique with our dedicated HIIT zone and expert personal coaching."
        img1="https://images.pexels.com/photos/12895247/pexels-photo-12895247.jpeg"
        img2="https://picsum.photos/seed/athlete4/800/400"
        isDark={true}
      />
    </section>
  );
};
