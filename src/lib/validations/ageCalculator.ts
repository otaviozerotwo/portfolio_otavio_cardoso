export function ageCalculator() {
  const date = new Date();
  const yearBirth = 1993;
  const currentYear = date.getFullYear();

  const age = currentYear - yearBirth;

  return age;
}