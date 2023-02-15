/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Whatup from the console!");
};

function generateExcuse() {
  let pronoun = ["A", "The"];
  let subject = ["racoon", "kiwi", "dog", "panther", "tortilla"];
  let action = ["ran over", "bit", "slapped", "threw", "defenestrated"];
  let possesion = ["apples", "coconuts", "crayons", "mice"];
  let where = ["on the street", "in the temple", "in the boat", "at Sedanos"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possesion[possesionIndex] +
    " " +
    where[whereIndex]
  );
}
