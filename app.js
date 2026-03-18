// ── Feature flags ──────────────────────────────────────────────────────────
const CLICKABLE_CARDS = true; // set false to disable recipe detail views

// ── Dish data ──────────────────────────────────────────────────────────────
// To add a photo: set image to the file path, e.g. "assets/images/web/med-chicken.jpg"
// To add real recipe data: add `ingredients` and `steps` arrays to a dish object.
const dishes = [
  // ── Mains ──
  { category: 'mains', name: 'Mediterranean Chicken Plate', image: 'assets/images/web/med-chicken-plate.jpeg',
    desc: 'Grilled herb chicken over a potato bowl with Greek salad, olives, and tzatziki. Our most-requested weeknight dinner.' },
  { category: 'mains', name: 'Asian Steak with Rice Noodles & Sweet Chili Sauce', image: 'assets/images/web/asian-steak-rice-noodles.jpeg',
    desc: 'Thinly sliced steak over cold rice noodles with crisp vegetables and a tangy sweet chili drizzle.' },
  { category: 'mains', name: "Evelyn's Favorite Pasta", image: null,
    desc: 'The pasta Evelyn asks for every time. A family classic with a sauce that gets better the longer it simmers.' },
  { category: 'mains', name: 'Super Chicken Salad', image: 'assets/images/web/super-chicken-salad.JPG',
    desc: 'A hearty grilled chicken salad loaded with fresh vegetables and house dressing. Clean, filling, and endlessly satisfying.' },
  { category: 'mains', name: 'Jambalaya', image: 'assets/images/web/jambalaya.jpeg',
    desc: 'A rich, smoky one-pot of sausage, shrimp, rice, and the holy trinity. Louisiana comfort in a bowl.' },
  { category: 'mains', name: 'Detroit Style Pizza', image: null,
    desc: 'Thick, square, and unapologetically crispy on the bottom. Loaded with toppings and baked in a well-oiled pan.' },
  { category: 'mains', name: 'Burger Steaks with Potato Salad', image: 'assets/images/web/burger-steaks-b-potato-coleslaw.jpeg',
    desc: 'Thick, pan-seared burger steaks alongside a creamy homemade potato salad. A weekend staple.' },
  { category: 'mains', name: 'Veggie Chili & Cornbread', image: 'assets/images/web/veggie-chilli.jpeg',
    desc: 'Hearty, spiced vegetable chili served alongside golden skillet cornbread. Perfect for a cold evening.' },
  { category: 'mains', name: "Pork Chops with Mac n' Cheese & Broccoli", image: 'assets/images/web/pork-chops-mac.jpeg',
    desc: 'Pan-seared pork chops with creamy macaroni and cheese and steamed broccoli. Simple and satisfying.' },
  { category: 'mains', name: 'Fried Shrimp, Baked Potato & Coleslaw', image: 'assets/images/web/fried-shrimp-bpotato-coleslaw.JPG',
    desc: 'Crispy golden shrimp alongside a loaded baked potato and creamy homemade coleslaw.' },
  { category: 'mains', name: 'Steak Fajitas', image: null,
    desc: 'Sizzling marinated skirt steak with peppers and onions, served with warm tortillas, rice, and beans.' },
  { category: 'mains', name: 'Chicken Fajitas', image: null,
    desc: 'Juicy marinated chicken strips with peppers and onions, served with rice, beans, and all the fixings.' },
  { category: 'mains', name: 'Chicken Caesar Wraps', image: null,
    desc: 'Grilled chicken, crisp romaine, and parmesan wrapped in a toasted flour tortilla. Quick and always good.' },
  { category: 'mains', name: 'Zuppa Toscana', image: null,
    desc: 'A creamy, spiced Italian soup with sausage, kale, and potatoes. Served with warm bread.' },
  { category: 'mains', name: 'Jalapeño Salsa Grilled Steak with Rice', image: null,
    desc: 'Grilled steak served over white rice with a bright, smoky jalapeño salsa.' },
  { category: 'mains', name: 'Carne Asada Fries', image: 'assets/images/web/carne-asada-fries.jpeg',
    desc: 'A California classic — crispy fries topped with grilled carne asada, cheese, guacamole, and sour cream.' },
  { category: 'mains', name: 'Minestrone Soup & Grilled Cheese', image: null,
    desc: 'A thick, vegetable-packed Italian minestrone alongside a perfectly golden grilled cheese sandwich.' },
  { category: 'mains', name: 'Super Steak Salad', image: 'assets/images/web/super-steak-salad.jpeg',
    desc: 'Sliced grilled steak over a generous salad with bold toppings and a tangy dressing.' },
  { category: 'mains', name: 'NY Style Pizza', image: 'assets/images/web/pizza.jpeg',
    desc: 'New York-style pizza with a thin, foldable crust. Classic pepperoni and sausage, or whatever the night calls for.' },
  { category: 'mains', name: 'Veggie Fideua', image: 'assets/images/web/fideaua-brocolli-roasted-potatoes.jpeg',
    desc: 'A Spanish noodle dish cooked like paella, packed with vegetables and finished in the oven.' },
  { category: 'mains', name: 'Broccoli Spaghetti', image: 'assets/images/web/broccoli-spaghetti.JPG',
    desc: 'Simple, garlicky spaghetti tossed with roasted broccoli and parmesan. A quick weeknight win.' },
  { category: 'mains', name: 'Veggie Spaghetti', image: 'assets/images/web/veggie-spaghetti.JPG',
    desc: 'Spaghetti with green zucchini, red bell peppers, and white onions.' },
  { category: 'mains', name: 'Spaghetti & Meatballs with Caesar Salad', image: null,
    desc: 'Classic Sunday spaghetti with hand-rolled meatballs and a caesar salad alongside.' },
  { category: 'mains', name: 'Arroz Caldoso', image: 'assets/images/web/arroz-caldoso.JPG',
    desc: 'A Spanish soupy rice dish — somewhere between paella and risotto, deeply savory and warming.' },
  { category: 'mains', name: 'Broccoli Cheddar Soup', image: null,
    desc: 'A thick, velvety soup loaded with broccoli and sharp cheddar.' },
  { category: 'mains', name: 'Black Bean Burgers with Tuna Mac', image: 'assets/images/web/bb-on-rice-burgers-tunamac-brocolli.JPG',
    desc: 'House-made black bean patties alongside a creamy tuna macaroni salad.' },
  { category: 'mains', name: 'Black Bean Burgers, Rice, Deviled Eggs & Broccoli', image: 'assets/images/web/black-bean-burgers-on-rice.JPG',
    desc: 'Seasoned black bean patties over rice with steamed broccoli and classic deviled eggs on the side.' },
  { category: 'mains', name: 'Grilled Chicken Alfredo & Broccoli', image: null,
    desc: 'Fettuccine Alfredo with grilled chicken and broccoli florets.' },
  { category: 'mains', name: 'Katsu Chicken, Spinach & Rice', image: null,
    desc: 'Crispy panko-breaded chicken cutlet over white rice with wilted sesame spinach.' },
  { category: 'mains', name: 'Five Guys Burgers & Fries', image: null,
    desc: 'Indulgent, loaded burgers with hand-cut or curly fries. A treat night.' },
  { category: 'mains', name: 'Roast Beef, Mashed Potatoes & Green Beans', image: null,
    desc: 'A Sunday roast done right — tender beef, silky mash, and buttered green beans.' },
  { category: 'mains', name: 'Steak à Poivre, Garlic Roasted Potatoes & Caprese', image: null,
    desc: 'A pepper-crusted steak with a brandy cream sauce, alongside crispy potatoes and a fresh caprese salad.' },
  { category: 'mains', name: 'Grilled Shrimp Tacos with Mango Salsa', image: null,
    desc: 'Charred shrimp tacos with a sweet mango salsa, black beans, and cilantro lime rice.' },
  { category: 'mains', name: 'That Crab Pasta', image: null,
    desc: 'A rich, indulgent pasta with crab meat and a light cream sauce. A special occasion dish.' },
  { category: 'mains', name: 'Swedish Meatballs over Pasta', image: 'assets/images/web/swedish-meatballs-cobb-salad.jpeg',
    desc: 'Tender, creamy Swedish meatballs served over pasta with a caesar salad on the side.' },
  { category: 'mains', name: 'Veggie Tostadas', image: null,
    desc: 'Crispy corn tostadas with seasoned beans, fresh vegetables, and a tangy crema.' },
  { category: 'mains', name: 'Grilled Fish, Mashed Potatoes & Green Beans', image: 'assets/images/web/grilled-fish-mashed-potatoes-greenbeans.JPG',
    desc: 'Simply grilled fish over creamy mashed potatoes with buttered green beans.' },
  { category: 'mains', name: 'Grilled Fish with Jamaican Cabbage & Baked Potato', image: 'assets/images/web/grilled-fish-jamaican-cabbage.jpeg',
    desc: 'Seasoned grilled fish alongside boldly spiced Jamaican-style cabbage and a loaded baked potato.' },
  { category: 'mains', name: "Fried Chicken Strips, Mac n' Cheese & Broccoli", image: null,
    desc: 'Crispy fried chicken strips alongside classic mac and cheese and steamed broccoli.' },
  { category: 'mains', name: 'Papas Tacos, Rice & Beans', image: 'assets/images/web/tacos-de-papa.jpeg',
    desc: 'Crispy potato tacos with salsa and cream, served with rice and beans. A family favorite.' },
  { category: 'mains', name: 'Grilled Chicken Carb Bowl', image: 'assets/images/web/chicken-carb-bowl.jpeg',
    desc: 'Grilled chicken over a hearty base of roasted potatoes, corn, and rice.' },
  { category: 'mains', name: 'Chicken & Broccoli Ramen', image: null,
    desc: 'Rich ramen broth with chicken, broccoli, soft-boiled egg, and noodles.' },
  { category: 'mains', name: 'Farmers Platter', image: null,
    desc: 'A generous spread of seasonal vegetables, meats, and sides. The everything plate.' },
  { category: 'mains', name: 'Fried Catfish & Cornbread', image: 'assets/images/web/fried-catfish-cornbread.JPG',
    desc: 'Crispy cornmeal-crusted catfish alongside a golden wedge of skillet cornbread. Southern comfort at its best.' },
  { category: 'mains', name: "Crab Cakes with Mac n' Cheese", image: 'assets/images/web/crab-cakes-mac.JPG',
    desc: 'Pan-seared crab cakes with a crispy crust alongside creamy macaroni and cheese.' },
  { category: 'mains', name: 'Fish & Chips', image: 'assets/images/web/fish-n-chips.JPG',
    desc: 'Beer-battered fish and thick-cut chips. A classic done right.' },
  { category: 'mains', name: 'Arroz al Horno', image: 'assets/images/web/arroz-al-horno.JPG',
    desc: 'A Spanish baked rice dish with sausage, chickpeas, and tomato — crusty on top, tender underneath.' },
  { category: 'mains', name: 'Arroz al Horno with Scallops', image: 'assets/images/web/arroz-al-horno-scallops.JPG',
    desc: 'The Spanish baked rice, elevated with seared scallops on top. A special occasion version.' },
  { category: 'mains', name: "Fried Halibut, Mac n' Cheese & Broccoli", image: 'assets/images/web/fried-halibut-mac-brocolli.JPG',
    desc: 'Crispy fried halibut alongside creamy mac and cheese and steamed broccoli.' },
  { category: 'mains', name: 'Black Bean Burgers with Mac & Brussels Sprouts', image: 'assets/images/web/black-bean-burgers-mac-sprouts.JPG',
    desc: 'Seasoned black bean patties alongside creamy mac and cheese and roasted brussels sprouts.' },
  { category: 'mains', name: 'Black Bean Burgers with Rice, Asparagus & Mac', image: 'assets/images/web/bb-burgers-rice-asparagus-mac.jpeg',
    desc: 'House-made black bean burgers over white rice with roasted asparagus and a side of mac and cheese.' },
  { category: 'mains', name: 'Fried Shrimp, Mashed Potatoes & Broccoli', image: 'assets/images/web/fried-shrimp-mashed-p-brocolli.JPG',
    desc: 'Crispy golden fried shrimp alongside creamy mashed potatoes and steamed broccoli.' },
  { category: 'mains', name: 'Veggie Fideuà with Roasted Potatoes', image: 'assets/images/web/veggie-fideuau-roasted-pots.JPG',
    desc: 'Another round of the Spanish noodle classic, paired with crispy roasted potatoes instead of broccoli.' },
  { category: 'mains', name: 'Tuna Sandwich', image: 'assets/images/web/tuna-sandwhich.JPG',
    desc: 'A good old-fashioned tuna salad sandwich. Simple, satisfying, and better than it has any right to be.' },
  { category: 'mains', name: 'Broccoli Spaghetti with Garlic Shrimp', image: 'assets/images/web/broccoli-spaghetti-garlic-shrimp.jpeg',
    desc: 'Garlicky spaghetti with roasted broccoli, finished with pan-seared shrimp.' },
  { category: 'mains', name: "Burger Steaks with Mac n' Cheese & Asparagus", image: 'assets/images/web/burger-steaks-mac-asparagus.jpeg',
    desc: 'Pan-seared burger steaks alongside creamy mac and cheese and roasted asparagus.' },
  { category: 'mains', name: 'Burger Steaks with Rice, Deviled Eggs & Corn', image: 'assets/images/web/burger-steaks-rice-deviled-eggs-corncobb.JPG',
    desc: 'Thick burger steaks served over white rice with classic deviled eggs and a buttered corn cob.' },
  { category: 'mains', name: 'Black Bean Burgers with Plantain Chips', image: 'assets/images/web/black-bean-burgers-plantain-chips.JPG',
    desc: 'Seasoned black bean patties served alongside crispy fried plantain chips.' },
  { category: 'mains', name: 'Black Bean Burgers with Rice & Potato Salad', image: 'assets/images/web/black-bean-burgers-rice-potato-salad-broccolli.JPG',
    desc: 'House-made black bean burgers over white rice with creamy potato salad and steamed broccoli.' },
  { category: 'mains', name: 'Fried Rice with Bang Bang Shrimp', image: 'assets/images/web/fried-rice-bang-bang-shrimp.JPG',
    desc: 'Wok-fried rice alongside crispy shrimp tossed in a creamy, spicy bang bang sauce.' },
  { category: 'mains', name: 'Fried Rice with Firecracker Shrimp', image: 'assets/images/web/fried-rice-firecracker-shrimp.JPG',
    desc: 'Fried rice paired with boldly spiced firecracker shrimp — a little heat, a lot of flavor.' },
  { category: 'mains', name: 'Fried Shrimp Tacos', image: 'assets/images/web/fried-shrimp-tacos.JPG',
    desc: 'Crispy fried shrimp tucked into warm tortillas with slaw, salsa, and a squeeze of lime.' },
  { category: 'mains', name: 'Grilled Shrimp Burrito Bowl', image: 'assets/images/web/grilled-shrimp-burrito-bowl.JPG',
    desc: 'Charred shrimp over cilantro lime rice with black beans, corn, pico, and crema.' },
  { category: 'mains', name: 'Shrimp Paella', image: 'assets/images/web/shrimp-paella.JPG',
    desc: 'A classic Spanish paella with saffron rice, tender shrimp, and a golden socarrat crust.' },
  { category: 'mains', name: "Shrimp Po' Boy with Red Beans & Rice", image: 'assets/images/web/shrimp-po-boy-red-beans-rice.JPG',
    desc: "A New Orleans-style fried shrimp po' boy with all the dressings, alongside red beans and rice." },
  { category: 'mains', name: '10-Minute Cherry Tomato Pasta', image: 'assets/images/web/10minute-cherry-tomato-pasta.jpeg',
    desc: 'A fast weeknight pasta with burst cherry tomatoes, garlic, and olive oil. On the table in ten minutes.' },
  { category: 'mains', name: 'Chimichangas', image: 'assets/images/web/chimichangas.JPG',
    desc: 'Crispy deep-fried burritos stuffed with seasoned meat and cheese, served with salsa and sour cream.' },
  { category: 'mains', name: 'Carne Asada Chips', image: 'assets/images/web/carne-asada-chips.jpeg',
    desc: 'Crispy tortilla chips loaded with grilled carne asada, melted cheese, guacamole, and crema.' },

  // ── Sides ──
  { category: 'sides', name: 'Garlic Roasted Potatoes', image: null,
    desc: 'Crispy, golden potatoes roasted with olive oil and plenty of garlic. A go-to alongside almost anything.' },
  { category: 'sides', name: 'Potato Salad', image: null,
    desc: 'Creamy homemade potato salad. Classic, simple, and always the first thing to disappear.' },
  { category: 'sides', name: 'Caesar Salad', image: null,
    desc: 'Crisp romaine, shaved parmesan, and a bold, garlicky caesar dressing. No croutons for Papa.' },
  { category: 'sides', name: 'Cornbread', image: null,
    desc: 'Golden, slightly sweet skillet cornbread. Essential alongside a bowl of chili or soup.' },
  { category: 'sides', name: 'Coleslaw', image: null,
    desc: 'Creamy, tangy coleslaw with a light hand on the dressing. The cool contrast to crispy fried things.' },
];

// ── Filler recipe data ─────────────────────────────────────────────────────
// Used until real recipes are added. Add `ingredients` and `steps` arrays
// directly to a dish object above to override the filler for that dish.

function strHash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const FILLER = {
  pasta: {
    ingredients: [
      '1 lb pasta — do not break it in half or you will be judged',
      '4 cloves garlic, minced with excessive confidence',
      'A generous glug of olive oil (technical measurement)',
      'Salt for the pasta water — more than you think, less than you fear',
      'Parmesan, grated directly over the pot while narrating aloud',
      '1 pinch red pepper flakes, to remind everyone you have opinions',
      'The good olive oil, not the everyday one',
      'Pasta water, reserved — do NOT pour this down the drain',
      '1 small onion, diced while blaming something else for the tears',
      'Whatever vegetables look guilty in the crisper drawer',
      'A handful of fresh herbs, torn with theatrical flair',
      'Black pepper, freshly cracked over someone\'s shoulder',
    ],
    steps: [
      'Bring a large pot of water to a rolling boil. Season it like the ocean — generously, fearlessly.',
      'Cook pasta 2 minutes less than the box says. The box is lying to you.',
      'Warm olive oil in a wide pan over medium heat. Let it settle in and think about its life choices.',
      'Add garlic. Do not walk away. This is the most important 90 seconds of your evening.',
      'Toss everything together with a splash of pasta water until a glossy sauce forms that coats the back of a spoon and your shirt.',
      'Taste. Adjust salt. If still bland, add garlic. Reflect on your choices. Repeat.',
      'Serve in warm bowls. Add more parmesan than seems reasonable. You made the right call.',
    ],
  },
  rice: {
    ingredients: [
      '2 cups long-grain rice, rinsed until the water runs clear (this is non-negotiable)',
      '1 onion, diced — the holy trinity starts here',
      '3 cloves garlic, because less would be a waste of your time',
      'Broth, not water. Never water.',
      '1 can tomatoes, crushed by hand for maximum drama',
      'Smoked paprika — the secret everyone pretends they don\'t know about',
      'Bay leaf, added with ceremony, removed without fanfare',
      'Salt, at every stage — this is the way',
      'A splash of white wine because you opened the bottle anyway',
      'Saffron if you\'re feeling fancy, turmeric if you\'re feeling practical',
      'Whatever protein needs to stop taking up space in the fridge',
      'Fresh parsley for the garnish no one asked for but everyone appreciates',
    ],
    steps: [
      'Toast the rice in a dry pan until it smells nutty and slightly threatening.',
      'Sauté onion and garlic until soft and golden. Your home should smell extraordinary right now.',
      'Add tomatoes and cook until they surrender and become a sauce.',
      'Pour in broth at a 2:1 ratio to rice. Add your seasonings. Stir once with conviction.',
      'Bring to a boil, then drop to the lowest simmer your stove can manage. Cover and do not lift the lid.',
      'After 18 minutes, remove from heat. Let it steam, covered, for another 5. Patience is a virtue and also a cooking technique.',
      'Fluff with a fork. Taste. Season. Serve immediately and accept compliments graciously.',
    ],
  },
  fried: {
    ingredients: [
      '1.5 lbs protein of choice, patted dry — moisture is the enemy of crunch',
      'Buttermilk, enough to submerge everything — this is the brine that makes champions',
      '2 cups flour, seasoned aggressively',
      'Cornmeal, for texture and Southern credibility',
      'Garlic powder, onion powder, paprika — the holy trinity of the fry station',
      'Cayenne — add more than you plan to, then add a little more',
      'Oil for frying, enough to be mildly concerning',
      'Salt, applied immediately after frying while you still can',
      '1 egg, beaten into the buttermilk to help the crust commit',
      'Hot sauce for serving — Tabasco, Crystal, or the one your dad swears by',
      'Lemon wedges, technically optional, actually mandatory',
      'Paper towels, a wire rack, and quiet confidence',
    ],
    steps: [
      'Soak protein in buttermilk for at least 1 hour. Overnight is better. Today is a great day to plan ahead.',
      'Season the flour with everything in the spice cabinet that seems like a good idea.',
      'Heat oil to 350°F. Use a thermometer. This is not a guessing situation.',
      'Dredge the protein in seasoned flour, press it in, let the excess fall away dramatically.',
      'Fry in batches — do not crowd the pan unless you enjoy soggy disappointments.',
      'Drain on a wire rack. Salt immediately. Do not skip this step or you will think about it later.',
      'Serve hot. Provide extra hot sauce. Accept that this was a great decision.',
    ],
  },
  meat: {
    ingredients: [
      '2 lbs beef — the cut matters, so pick something you\'d be willing to apologize for the price of',
      'Kosher salt, enough to season generously on all sides',
      'Black pepper, coarsely cracked — don\'t use the pre-ground stuff today',
      'Butter, 2 tablespoons, for basting (this is the secret)',
      'Garlic cloves, smashed but still intact, added to the pan',
      'Fresh thyme or rosemary — a sprig is sufficient, more is theatrical',
      'Neutral oil with a high smoke point — save the good olive oil for the end',
      'A splash of Worcestershire because your grandmother knew something',
      'Shallot, thinly sliced for the pan sauce you\'ll make from the fond',
      'Red wine or beef broth for deglazing — never let good fond go to waste',
      'Dijon mustard, 1 tsp, for the sauce — it disappears but you\'d notice if it was gone',
      'Rest time: this is an ingredient. Non-negotiable.',
    ],
    steps: [
      'Pat meat completely dry. Season liberally with salt and pepper on all sides. Let it rest at room temperature for 30 minutes while you build anticipation.',
      'Heat a cast iron pan until it\'s hot enough to make you nervous. Add oil. Wait for it to shimmer.',
      'Sear without moving. Resist the urge. The crust forms when you leave it alone. 3–4 minutes per side.',
      'Add butter, garlic, and herbs. Tilt the pan and baste the meat repeatedly. This is the best part.',
      'Remove from pan. Rest on a cutting board, tented loosely with foil, for at least 5 minutes. The juices need to think this through.',
      'Deglaze the pan with wine or broth. Scrape up every bit of fond. Add shallots. Reduce by half. Finish with butter.',
      'Slice against the grain. Serve with the pan sauce. Try to look like you weren\'t nervous the whole time.',
    ],
  },
  soup: {
    ingredients: [
      'Onion, carrot, celery — the holy trinity, chopped with the energy of someone with a plan',
      'Garlic, 4 cloves minimum — this is soup, not timidity',
      'Good broth — homemade if you have it, store-bought if you\'re honest about your life',
      'A can of tomatoes, staring at you from the pantry, waiting to be useful',
      'Beans, lentils, or whatever sad vegetable needs a purpose today',
      'A parmesan rind lurking in the back of the fridge — add it now',
      'Bay leaves (2) — mysterious, important, not to be eaten',
      'Olive oil, the everyday bottle this time',
      'Salt, added in stages like you\'ve done this before',
      'Pepper, to taste — and then a little more',
      'Fresh herbs, because this deserves to look like you tried',
      'Crusty bread, which is not in the soup but is absolutely part of the recipe',
    ],
    steps: [
      'Heat olive oil in a large pot over medium heat. Add onion, carrot, and celery. Cook until soft and starting to smell like something worth eating.',
      'Add garlic. Stir. The kitchen smells good now. Everything is going to be fine.',
      'Add tomatoes and cook for a few minutes until they stop being raw and start being sauce-adjacent.',
      'Add broth, beans, parmesan rind, bay leaves, and whatever protein or vegetable you\'re working with. Bring to a boil.',
      'Reduce heat and simmer for at least 30 minutes. Longer is better. This is the kind of patience that pays off.',
      'Taste. Season. Remove bay leaves and parmesan rind. If anyone asks what makes it so good, you can tell them or you can let it remain a mystery.',
      'Ladle into bowls. Drizzle with olive oil. Serve with bread. Eat something warm.',
    ],
  },
  default: {
    ingredients: [
      'Main ingredient — the hero of this plate, treat it accordingly',
      'Olive oil, which makes most things better and all things possible',
      'Garlic (always garlic — this is not up for debate)',
      'Salt, applied at every stage of cooking like a refrain',
      'Something acidic: lemon juice, vinegar, or a squeeze of lime — this brightens everything',
      'An onion, which will make you cry briefly and reward you abundantly',
      'Fresh herbs, torn not chopped, because you watched a cooking show once',
      'Black pepper, ground fresh, cracked over the top with ceremony',
      'A pat of butter at the end — the finishing touch that the recipe might not mention but always means',
      'Something crunchy for contrast: toasted nuts, crispy shallots, or bread crumbs',
      'A splash of something liquid: wine, broth, or the pasta water you didn\'t throw away',
      'Parmesan or some other aged hard cheese, because the answer is almost always yes',
    ],
    steps: [
      'Prep everything before you start cooking. Mise en place is a fancy way of saying "stop panicking mid-recipe."',
      'Heat your pan properly before adding anything to it. A cold pan is a sad pan.',
      'Season early, season often. Taste as you go. Trust your instincts, then verify.',
      'Don\'t overcrowd the pan. Give things space to brown instead of steam. Crowding is the enemy of caramelization.',
      'When it smells done, it probably is. When it looks done, give it one more minute. When it\'s one minute past that, plate it.',
      'Let everything rest a moment before serving. Good things take a breath before they arrive.',
      'Finish with the good olive oil, fresh herbs, and something acidic. These three things fix almost everything.',
    ],
  },
};

function getFillerBucket(dish) {
  const n = dish.name.toLowerCase();
  if (/pasta|spaghetti|fideua|fideu|noodle|ramen|alfredo/.test(n)) return 'pasta';
  if (/rice|paella|arroz|jambalaya|burrito|bowl|chimichanga/.test(n)) return 'rice';
  if (/fried|crispy|catfish|halibut|fish|chips|po.boy|taco|tostada/.test(n)) return 'fried';
  if (/burger|steak|chop|meatball|carne|roast beef|five guys/.test(n)) return 'meat';
  if (/soup|chili|zuppa|minestrone|broccoli cheddar/.test(n)) return 'soup';
  return 'default';
}

function getRecipeData(dish) {
  if (dish.ingredients && dish.steps) return dish;
  const bucket = FILLER[getFillerBucket(dish)];
  const h = strHash(dish.name);
  const ing = bucket.ingredients;
  const stp = bucket.steps;
  const iStart = h % ing.length;
  const sStart = h % stp.length;
  const ingredients = Array.from({ length: 7 }, (_, i) => ing[(iStart + i) % ing.length]);
  const steps       = Array.from({ length: 5 }, (_, i) => stp[(sStart + i) % stp.length]);
  return { ...dish, ingredients, steps };
}

// ── Slug utility ───────────────────────────────────────────────────────────
function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Build slug → dish lookup map
const dishBySlug = {};
dishes.forEach(d => { dishBySlug[toSlug(d.name)] = d; });

// ── Render ─────────────────────────────────────────────────────────────────
const root = document.getElementById('menu-root');

const categories = [...new Set(dishes.map(d => d.category))];

categories.forEach(cat => {
  const section = document.createElement('section');
  section.className = 'menu-section';
  section.id = cat;
  section.dataset.category = cat;

  const label = cat.charAt(0).toUpperCase() + cat.slice(1);
  section.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">${label}</h2>
      <div class="section-rule"></div>
    </div>
    <div class="menu-grid"></div>`;

  const grid = section.querySelector('.menu-grid');

  dishes.filter(d => d.category === cat).forEach(dish => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = cat;

    const photoContent = dish.image
      ? `<img src="${dish.image}" alt="${dish.name}" loading="lazy">`
      : '';

    card.innerHTML = `
      <div class="card-photo${dish.image ? '' : ' placeholder'}" data-label="◉">
        ${photoContent}
      </div>
      <div class="card-body">
        <h3 class="card-name">${dish.name}</h3>
        <p class="card-desc">${dish.desc}</p>
      </div>`;

    if (CLICKABLE_CARDS) {
      card.addEventListener('click', () => {
        location.hash = '#recipe-' + toSlug(dish.name);
      });
    }

    grid.appendChild(card);
  });

  root.appendChild(section);
});

// ── Staggered reveal ───────────────────────────────────────────────────────
document.querySelectorAll('.card').forEach((card, i) => {
  card.style.animationDelay = `${0.4 + i * 0.04}s`;
});

// ── Scroll-to-top visibility ───────────────────────────────────────────────
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

// ── Category filter ────────────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    document.querySelectorAll('.menu-section').forEach(sec => {
      sec.style.display = (filter === 'all' || sec.dataset.category === filter) ? '' : 'none';
    });
  });
});

// ── Recipe detail view ─────────────────────────────────────────────────────
const recipeView = document.getElementById('recipe-view');
const menuElements = () => [
  document.querySelector('.hero'),
  document.querySelector('.filter-bar'),
  document.getElementById('menu-root'),
  document.querySelector('footer'),
];

function showRecipe(dish) {
  const data = getRecipeData(dish);

  const heroHtml = dish.image
    ? `<img class="recipe-hero-img" src="${dish.image}" alt="${dish.name}">`
    : '';

  const ingredientsHtml = data.ingredients
    .map(i => `<li>${i}</li>`)
    .join('');

  const stepsHtml = data.steps
    .map(s => `<li>${s}</li>`)
    .join('');

  recipeView.innerHTML = `
    <div class="recipe-detail">
      <div class="recipe-hero${dish.image ? '' : ' no-image'}">
        ${heroHtml}
        <div class="recipe-hero-overlay">
          <span class="recipe-category-badge">${dish.category}</span>
          <h1 class="recipe-title">${dish.name}</h1>
          <p class="recipe-hero-desc">${dish.desc}</p>
        </div>
      </div>
      <div class="recipe-back-row">
        <button class="recipe-back-btn" id="recipeBackBtn">← Back to Menu</button>
      </div>
      <div class="recipe-body">
        <section class="recipe-ingredients">
          <h2 class="recipe-section-heading">Ingredients</h2>
          <ul class="ingredient-list">${ingredientsHtml}</ul>
        </section>
        <section class="recipe-steps">
          <h2 class="recipe-section-heading">Preparation</h2>
          <ol class="step-list">${stepsHtml}</ol>
        </section>
      </div>
    </div>`;

  document.getElementById('recipeBackBtn').addEventListener('click', () => history.back());

  menuElements().forEach(el => { if (el) el.style.display = 'none'; });
  recipeView.classList.add('active');
  recipeView.removeAttribute('hidden');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function showMenu() {
  recipeView.classList.remove('active');
  recipeView.setAttribute('hidden', '');
  recipeView.innerHTML = '';
  menuElements().forEach(el => { if (el) el.style.display = ''; });
}

function handleRoute() {
  const hash = location.hash;
  if (CLICKABLE_CARDS && hash.startsWith('#recipe-')) {
    const slug = hash.slice('#recipe-'.length);
    const dish = dishBySlug[slug];
    if (dish) { showRecipe(dish); return; }
  }
  showMenu();
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);
