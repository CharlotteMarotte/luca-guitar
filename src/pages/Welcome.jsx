const Welcome = () => {
  return (
    <section className="flex items-center justify-center text-center text-white py-16 sm:pt-32 lg:pt-16 z-10 ">
      <div className="w-full ">
        <div className="p-6 rounded-lg bg-sambuca bg-opacity-40">
          <h2 className="text-5xl font-heading mb-4">
            Entdecke die Welt der Gitarre – Dein musikalischer Weg beginnt hier!
          </h2>
          <p className="text-xl font-body">
            Egal, ob du gerade erst anfängst oder deine Fähigkeiten weiter
            ausbauen möchtest, hier findest du die Unterstützung, die du
            brauchst. Lass uns gemeinsam deine musikalischen Ziele erreichen!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
