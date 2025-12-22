function MainContent() {
    const date = new Date();
    const Jour = date.getDate();
    const Mois = date.getMonth() + 1;
    const Annee = date.getFullYear();
    const Heure = date.getHours();
    const Minute = date.getMinutes();
    const Second = date.getSeconds();
  return (

    <div>
      <p>Bonjour, on est le {Jour}, {Mois}, {Annee} et il est {Heure}:{Minute}:{Second}</p>
    </div>
  );
}
export default MainContent;