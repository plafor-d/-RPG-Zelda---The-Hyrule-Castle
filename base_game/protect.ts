export function Protect_B(randB: number, hp_H: number) {
  hp_H +=(h.fichB[randB].str) - (h.fichB[randB].str/2)
  return hp_H
 } // Protection contre les bosses.

 export function Protect_E(randE: number, hp_H: number) {
  hp_H +=(h.fichB_E[randE].str) - (h.fichB_E[randE].str/2)
  return hp_H
 } // Protection contre les monstres.