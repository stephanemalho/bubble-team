
// test : le plus générique 
// proche en proche on va vers le plus spécifique
// edge-cases : 1. on a un composant qui divise
// function divide (num, den) {
//   return num / den;
// }
// numérateur : 
// dénominateur :
// 

/**
 * 
 * 3 familles de test = 3 niveau de granularité
 * 
 * A. les test unitaire : on teste un comportement (une fonction ou plusieurs fonctions). // vitest - jest - mocha - chai - jasmine (native : jest)
 * ex: 
 * function checkIsEmail (email:string): boolean {
 *   return email.includes('@');
 * }
 * 
 *   1. cas nominal : quand on l'email est valide, on doit retourner true.
 *     input0 : "stephane.gmail.com", expectedOutput0 : false , resultedOutput0 : true ❌
 *     input1 : "stephane@gmail.com", expectedOutput1 : true , resultedOutput1 : true ✅
 *     input2 : "vi@gmail.com", expectedOutput2 : true , resultedOutput2 : true ✅
 *     
 *   2. cas nominal : quand on l'email est invalide, on doit retourner false.
 *     input1 : "stephane.gmail.com", expectedOutput1 : false , resultedOutput1 : true ❌
 *     input2 : "stephane.gmail.com", expectedOutput2 : false , resultedOutput2 : false ✅
 *     
 *   creér un fichier qui porte le meme nom de fichier que le fichier à tester. ex : function checkIsEmail.test.ts
 *   
 * B. les test d'intégration : on teste un composant. // react-testing-library  
 * 
 *   1. cas nominal : quand on a mal rempli le formulaire, reçois-on un toast d'erreur.
 *   2. cas nominal : quand on a bien rempli le formulaire, reçois-on un toast de succès.
 *   3. cas nominal : quand on a bien rempli le formulaire, et que les champs sont invalides (vide ou faux), le bouton est disabled.
 *   4. cas nominal : quand on a bien rempli le formulaire, et que les champs sont valides (rempli et correct), le bouton est clickable.
 * 
 * C. les test end-to-end : on teste un scénario. (action ou parcours utilisateur). // cypress - playright  (native : detox - appium)
 * 
 *   1. cas nominal : quand un utilisateur s'inscrit, il reçoit un email de confirmation.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 ... test d'affrasctucture ....

*/  