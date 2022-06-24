window.onload=() => {
  const navigationsleiste = document.getElementById("hauptnavogationsleiste");
  const unteresEnde = navigationsleiste.offsetTop + navigationsleiste.offsetHeight;
  getElementById("hauptbehaelter").style.marginTop = unteresEnde + "px";
}