"use client";

import { Welcome } from './welcome/page';

const Home = () => {
 
  return (
    <section className="dark:bg-slate-900 dark:text-white items-center gap-6 pb-8">
      <Welcome />
    </section>

  );
};

export default Home;
