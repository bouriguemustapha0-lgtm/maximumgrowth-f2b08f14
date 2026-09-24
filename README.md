# MG Growth Hub

Construis le site web complet de MG (Maximum Growth), l'agence de Mustapha Bourigue, en respectant strictement le document de contenu joint (MG-contenu-site-complet.md). Pour chaque page listée dans le document : - Utilise exactement le meta title, la meta description, le H1 et les H2 fournis - Utilise le texte réel fourni, ne le remplace pas par du contenu générique - Applique les alt text indiqués sur chaque image - Crée les liens internes avec les ancres exactes précisées dans les sections "Maillage interne" - Ajoute les liens sortants indiqués sur la page SEO et les articles de blog Direction visuelle (à respecter strictement, ne pas改changer la palette) : - Fond principal : #0B120F (noir profond teinté vert) - Surface/cartes : #171F1A - Accent primaire : #C9A227 (or/laiton) - Accent secondaire : #5B8C5A (vert sourd) - Texte : #F2F0E6 - Thème sombre, premium, tech-forward. Police display avec caractère pour les titres, sans-serif lisible pour le corps. Structure technique : - Bilingue FR/EN (FR par défaut), URLs propres avec tirets, sitemap.xml, robots.txt - Un seul H1 par page, hiérarchie H2/H3 logique - Schema.org JSON-LD : LocalBusiness + Person sur les pages concernées, FAQPage sur les pages avec FAQ - Formulaire de contact court (4 champs max) redirigeant vers WhatsApp par défaut - Bouton WhatsApp sticky visible en permanence, cliquable (wa.me) - Mobile-first, images en lazy loading sauf le hero, Core Web Vitals optimisés Livre le code complet des 10 pages définies dans le document, avec le sitemap.xml et le fichier llms.txt à la racine résumant l'agence en langage simple.Tu es un designer produit + développeur front-end senior, spécialisé dans les sites vitrines pour agences digitales et freelances premium. Tu maîtrises autant la direction artistique (UI), l'expérience utilisateur (UX) que le SEO technique et le GEO (Generative Engine Optimization — être repris par ChatGPT, Perplexity, Google AI Overviews, Gemini).

La priorité de ce brief est le design et l'expérience utilisateur. Le SEO/GEO reste une exigence technique non négociable, mais ne doit jamais dicter le visuel : le contenu structuré et les données riches doivent être invisibles pour le visiteur et visibles pour les moteurs.

1. CONTEXTE
Site vitrine pour MG (Maximum Growth), l'agence de Mustapha Bourigue, développeur web & spécialiste SEO basé à Béni Mellal, Maroc. L'agence conçoit des sites web sur mesure et optimise le référencement Google pour tout type de business (écoles, cliniques/médecins, immobilier, salons de beauté, med spa, restaurants, hôtellerie et autres) — pas une niche unique. Positionnement : boutique premium, pas une agence low-cost généraliste.

2. DIRECTION UI (identité visuelle) — À APPLIQUER TELLE QUELLE, NE PAS CHANGER LA PALETTE
Palette de couleurs (thème sombre premium, à respecter strictement) :
- Fond principal : #0B120F (noir profond teinté vert, jamais du noir pur #000)
- Surface / cartes : #171F1A
- Accent primaire (CTA, liens, highlights) : #C9A227 (or/laiton — évoque la croissance et le premium)
- Accent secondaire (discret, détails) : #5B8C5A (vert sourd — le "growth" de Maximum Growth)
- Texte principal : #F2F0E6 (blanc cassé chaud, jamais blanc pur)
- Contraste texte/fond conforme WCAG AA minimum (4.5:1)

Typographie :
- Titres : une police serif/display avec du caractère (type Fraunces ou équivalent) — évoque le premium sans tomber dans le générique corporate
- Corps de texte : une sans-serif très lisible (type Inter) 
- Jamais plus de 2 familles de police
- Échelle typographique claire (ratio 1.25–1.333), line-height 1.5–1.7 pour le corps

Grille & espacement :
- Espacement en multiples de 8px
- Marges généreuses — le premium se lit dans le white space, pas dans la densité
- Grille responsive 12 colonnes desktop, empilement simple mobile

Composants signature :
- Un motif graphique discret évoquant une courbe de croissance ascendante (sparkline / ligne montante) utilisé comme élément visuel récurrent (hero, séparateurs de section) — jamais comme texture qui nuit à la lisibilité
- Icônes en style ligne fine, une seule bibliothèque cohérente
- Aucune photo de stock générique. Utiliser des visuels abstraits/géométriques liés à la data et à la croissance plutôt que des photos génériques d'agence

3. DIRECTION UX
Priorités du parcours utilisateur :
- Comprendre en 3 secondes : qui (Mustapha/MG), quoi (sites web + SEO), pour qui (tout business qui veut être trouvé sur Google)
- Se projeter : voir des réalisations concrètes, comprendre le process, voir les services
- Se rassurer : témoignages clients réels, FAQ, stack technique visible
- Contacter en 1 à 2 clics maximum depuis n'importe quelle section

Règles UX obligatoires :
- CTA "Discutons de votre projet" / WhatsApp visible en permanence (header collant ou bouton sticky) sur mobile comme desktop
- Un seul CTA primaire par écran
- Formulaire de contact court (max 4-5 champs) : nom, business/secteur, besoin (site/SEO/les deux), téléphone ou email
- Navigation simple : 6-7 items max, ancres vers sections en one-page
- Numéro WhatsApp et téléphone cliquables (wa.me, tel:) partout, pas juste en texte
- Micro-interactions discrètes (hover cartes, transition douce au scroll) — un seul moment d'animation marquant au chargement, pas d'animation sur chaque élément
- Accessibilité clavier complète, focus visible, navigation lecteur d'écran cohérente
- Mobile-first non négociable, boutons tactiles ≥ 44x44px

4. STRUCTURE DU SITE — 10 PAGES
Bilingue FR/EN (FR par défaut, toggle EN comme sur l'ancien site), avec hreflang correct.

1. Accueil — cible SEO : "agence web Béni Mellal", "création site web Béni Mellal"
   - Meta title : Agence Web Béni Mellal — Création de Sites Web | MG
   - Meta description : Agence web à Béni Mellal spécialisée en création de sites modernes et SEO. Devis gratuit, livraison rapide, sites optimisés pour Google. Contactez MG.

2. Création site web — cible : "création site web", toutes variantes orthographiques
   - Meta title : Création de Site Web à Béni Mellal — Devis Gratuit | MG
   - Meta description : Besoin d'un site web professionnel à Béni Mellal ? Sites rapides, responsive et optimisés SEO. Découvrez nos tarifs et notre process de création.

3. Freelance site web — cible : "freelance site web" (plus gros volume)
   - Meta title : Freelance Site Web Béni Mellal — Développeur Web Indépendant | MG
   - Meta description : Freelance spécialisé en création de sites web à Béni Mellal. Tarifs directs sans intermédiaire, contact rapide, sites livrés en 2 à 4 semaines.

4. Agence web / positionnement — cible : "agence web", "agence de web"
   - Meta title : Agence Web à Béni Mellal — Sites & SEO | Maximum Growth
   - Meta description : MG est une agence web basée à Béni Mellal : conception de sites, référencement SEO et optimisation. Accompagnement complet pour votre présence en ligne.

5. Services — détail : sites sur mesure, SEO, performance/mobile-first, intégrations WhatsApp/réservation/paiement, automatisation IA

6. Réalisations/Portfolio — projets réels (Velsatis Hotel, Bougainvilla Retreat, Dar Azur, Maison Aurelle, Red Flame) présentés comme preuve de savoir-faire technique transposable à tout secteur, pas comme spécialisation hôtelière

7. SEO / Référencement — page dédiée ciblant "SEO Béni Mellal", "référencement naturel Béni Mellal"

8. À propos — bio Mustapha Bourigue, 3+ ans d'expérience, stack technique (React, Next.js, Tailwind CSS, TypeScript, Framer Motion, Figma, Vercel)

9. Blog/Actualités — contenu longue traîne, structuré en questions/réponses (format People Also Ask)

10. Contact — WhatsApp +212 699 309 986, email bouriguemustapha0@gmail.com, Instagram @mustapha_bourigue_mg, LinkedIn, adresse Béni Mellal, formulaire court

5. STACK TECHNIQUE
HTML5 sémantique + Tailwind CSS + React (ou JS vanilla si plus simple pour Lovable)
Mobile-first, responsive, Core Web Vitals optimisés (LCP < 2.5s, CLS < 0.1, INP < 200ms)
Images en loading="lazy" sauf le hero, formats WebP, dimensions explicites pour éviter le layout shift

6. EXIGENCES SEO (non négociables)
Balises <title> et <meta description> uniques par page (voir section 4)
Un seul <h1> par page, hiérarchie <h2>/<h3> logique, pas de saut de niveau
Attributs alt descriptifs sur toutes les images
Données structurées Schema.org JSON-LD :
- ProfessionalService ou LocalBusiness avec address (Béni Mellal), geo, telephone, areaServed, sameAs (Instagram, LinkedIn)
- FAQPage pour la section FAQ
- BreadcrumbList (site multi-pages)
sitemap.xml et robots.txt
URLs propres (/creation-site-web, /freelance-site-web, /agence-web, /seo, /realisations, /contact...)
Balises hreflang fr/en
CSS/JS minifiés en prod
Balises Open Graph + Twitter Card avec image dédiée (pas juste le hero recadré)

7. EXIGENCES GEO (citation par les IA génératives)
Contenu en phrases déclaratives auto-suffisantes, extractibles et citables sans perdre leur sens
Répondre directement aux questions dans le texte, pas seulement en FAQ (ex. "MG est une agence web basée à Béni Mellal, spécialisée en création de sites et SEO pour tout type de business")
Données concrètes et vérifiables : années d'expérience, nombre de secteurs couverts, délais de livraison réels
Information structurée en listes/tableaux (services, tarifs, délais)
Éviter le jargon marketing vague sans fait concret pour le justifier
Fichier llms.txt à la racine résumant l'agence en langage simple
Cohérence du nom/adresse/téléphone (NAP) identique partout sur le site

8. LIVRABLES ATTENDUS
Code front-end complet et fonctionnel
sitemap.xml, robots.txt, llms.txt
JSON-LD intégré et valide
Contenu rédactionnel réel en français et anglais — pas de lorem ipsum
Résumé de direction artistique en début de livraison (déjà fourni ci-dessus, à respecter)
Résumé en fin de livraison : mots-clés ciblés par page + recommandations SEO restantes (backlinks, Google Business Profile, avis clients)

CONTRAINTE FINALE
Aucune fonctionnalité back-end réelle (pas de vraie base de données, pas de vrai paiement). Le formulaire de contact doit être fonctionnel visuellement mais redirige vers WhatsApp par défaut.# MG (Maximum Growth) — Contenu complet du site
### Mustapha Bourigue · Agence web & SEO · Béni Mellal, Maroc

*Toutes les pages ci-dessous incluent : meta title, meta description, H1, structure H2, et le texte réel à utiliser. Colle chaque section dans Lovable telle quelle.*

---

## 1. ACCUEIL (`/`)

**Meta title :** MG — Création de Sites Web à Béni Mellal | Mustapha Bourigue
**Meta description :** MG conçoit des sites web modernes et optimisés SEO à Béni Mellal, pour tous les secteurs. Devis gratuit, réponse rapide sur WhatsApp.

*(Note anti-cannibalisation : l'Accueil cible la marque "MG" + "création site web Béni Mellal". Le mot-clé "agence web Béni Mellal" est réservé à la page 4 uniquement — ne pas le répéter en meta title ici pour éviter que les deux pages se fassent concurrence sur Google.)*

### Hero
**H1 :** Des sites web qui font grandir votre activité à Béni Mellal

**Sous-titre :** Je conçois des sites rapides, modernes et optimisés pour Google — pour les écoles, cabinets médicaux, agences immobilières, salons de beauté, restaurants et tous les commerces qui veulent être trouvés en ligne.

**CTA primaire :** Discuter de mon projet (WhatsApp)
**CTA secondaire :** Voir mes réalisations

**Ligne de disponibilité :** Disponible pour de nouveaux projets · Béni Mellal, Maroc

### Section "Pourquoi MG"
**H2 :** Un site ne sert à rien s'il n'est pas trouvé

Beaucoup de petites entreprises ont un site — mais un site que personne ne trouve sur Google ne rapporte rien. MG combine la création de sites web et le référencement SEO dans une seule offre, pensée pour que votre entreprise apparaisse quand vos clients vous cherchent.

- **Rapide & moderne** — Sites optimisés pour la vitesse et le mobile.
- **Prêt pour le SEO** — Structuré dès le départ pour être trouvé sur Google.
- **WhatsApp intégré** — Vos clients vous contactent en un clic.
- **Sur mesure** — Pas de template générique, un design pensé pour votre secteur.

### Section secteurs
**H2 :** Pour qui je construis des sites

Écoles et établissements scolaires · Médecins et cliniques · Agences immobilières · Salons de beauté & instituts · Med spa et médecine esthétique · Restaurants · Hôtellerie · Services professionnels

*(Chaque secteur en lien cliquable vers une future page dédiée si le volume de recherche le justifie plus tard.)*

### Section réalisations (aperçu, 3 projets max, lien "voir tout")
**H2 :** Des sites déjà en ligne, déjà utiles

Velsatis Hotel · Bougainvilla Retreat · Red Flame — <a href="/realisations">voir toutes nos réalisations de sites web</a>.

### Maillage interne — ancres à utiliser sur cette page
- Dans le texte "Pourquoi MG" : lien "**création de site web sur mesure**" → `/creation-site-web`
- Dans le texte "Pourquoi MG" : lien "**référencement SEO**" → `/seo`
- CTA secondaire "Voir mes réalisations" → `/realisations`
- Lien "**freelance spécialisé à Béni Mellal**" quelque part dans le footer ou une section → `/freelance-site-web`

### Images de cette page — alt text à utiliser
- Photo/portrait de Mustapha : `alt="Mustapha Bourigue, développeur web et spécialiste SEO à Béni Mellal"`
- Logo MG dans le header : `alt="MG - Maximum Growth, agence web Béni Mellal"`
- Miniatures des 3 projets en aperçu : `alt="Site web créé pour [nom du projet], [secteur], par MG"`
- Toutes les images sauf le hero en `loading="lazy"`, dimensions explicites pour éviter le layout shift

### Section process (aperçu)
**H2 :** Un chemin clair jusqu'au lancement

1. Appel découverte — on discute de vos objectifs et de votre public.
2. Design & planification — wireframes et direction visuelle alignés à votre marque.
3. Développement — site rapide, responsive, optimisé SEO dès la construction.
4. Lancement & suivi — mise en ligne, puis optimisation continue.

### Section contact (bandeau final)
**H2 :** Prêt à être trouvé sur Google ?

La façon la plus rapide de me joindre est WhatsApp — je réponds en quelques heures.

**CTA :** WhatsApp +212 699 309 986

---

## 2. CRÉATION SITE WEB (`/creation-site-web`)

**Meta title :** Création de Site Web à Béni Mellal — Devis Gratuit | MG
**Meta description :** Besoin d'un site web professionnel à Béni Mellal ? Sites rapides, responsive et optimisés SEO. Découvrez nos tarifs et notre process de création.

**H1 :** Création de site web sur mesure à Béni Mellal

Un site web professionnel n'est pas juste une vitrine — c'est l'outil qui amène de nouveaux clients pendant que vous travaillez. Je conçois des sites rapides, responsives et structurés pour le référencement, adaptés à votre secteur d'activité : école, cabinet médical, agence immobilière, salon de beauté, restaurant ou autre commerce.

### Ce qui est inclus
**H2 :** Ce qui est inclus dans la création de votre site

- Design sur mesure adapté à votre marque et à votre secteur
- Site responsive, optimisé pour mobile en priorité
- Structure SEO dès la construction (balises, hiérarchie, vitesse)
- Formulaire de contact ou bouton WhatsApp cliquable
- Formation rapide pour gérer votre contenu vous-même

### Combien de temps et combien ça coûte
**H2 :** Délais et tarifs

Un site vitrine simple (5 à 6 pages) est généralement livré en 2 à 4 semaines. Le tarif dépend de la complexité (nombre de pages, intégrations comme la réservation en ligne ou le paiement). Contactez-moi pour un devis gratuit basé sur votre besoin réel — pas de prix générique en ligne qui ne correspond pas à votre projet.

### FAQ
**H2 :** Questions fréquentes

**Combien coûte la création d'un site web au Maroc ?**
Le prix dépend du nombre de pages, des fonctionnalités (réservation, paiement, multilingue) et du niveau de personnalisation du design. Un devis gratuit après un premier échange donne un chiffre précis pour votre projet.

**Combien de temps pour avoir mon site en ligne ?**
Un site vitrine standard prend 2 à 4 semaines, de la première maquette à la mise en ligne. Les projets avec réservation ou paiement intégré prennent un peu plus de temps.

**Mon site sera-t-il visible sur Google dès le lancement ?**
Le site est structuré pour le SEO dès sa construction, mais être bien classé sur Google prend du temps (généralement plusieurs semaines à quelques mois selon la concurrence de votre secteur et de votre ville).

**CTA final :** Demander un devis gratuit

---

## 3. FREELANCE SITE WEB (`/freelance-site-web`)

**Meta title :** Freelance Site Web Béni Mellal — Développeur Web Indépendant | MG
**Meta description :** Freelance spécialisé en création de sites web à Béni Mellal. Tarifs directs sans intermédiaire, contact rapide, sites livrés en 2 à 4 semaines.

**H1 :** Freelance création de site web à Béni Mellal

Je suis Mustapha Bourigue, développeur web freelance basé à Béni Mellal. Contrairement à une grande agence, vous parlez directement à la personne qui construit votre site — pas à un chef de projet intermédiaire. Résultat : des échanges plus rapides, des tarifs plus directs, et un interlocuteur unique du premier appel jusqu'au lancement.

### Pourquoi un freelance plutôt qu'une agence
**H2 :** Ce que ça change de travailler en direct

- **Communication directe** — vous échangez avec la personne qui code, pas un intermédiaire.
- **Tarifs plus clairs** — pas de frais de structure d'une grande agence.
- **Flexibilité** — les ajustements de dernière minute sont plus simples à gérer.
- **Responsabilité claire** — une seule personne, un seul engagement.

### Ce que j'offre
**H2 :** Ce qui est inclus

Sites web sur mesure, référencement SEO, intégrations WhatsApp et réservation en ligne, optimisation de vitesse et d'expérience mobile. Stack technique moderne : React, Next.js, Tailwind CSS, TypeScript.

### Témoignage
> "Les clients réservent et paient directement, et WhatsApp a tout simplifié. Mustapha a compris nos besoins dès le premier jour."
> — Nadia Benali, gérante de maison d'hôtes, Essaouira

**CTA final :** Discuter de votre projet en direct sur WhatsApp

---

## 4. AGENCE WEB (`/agence-web`)

**Meta title :** Agence Web à Béni Mellal — Sites & SEO | Maximum Growth
**Meta description :** MG est une agence web basée à Béni Mellal : conception de sites, référencement SEO et optimisation. Accompagnement complet pour votre présence en ligne.

**H1 :** Votre agence web à Béni Mellal

MG (Maximum Growth) est une agence web basée à Béni Mellal, fondée par Mustapha Bourigue. L'agence conçoit des sites web et gère le référencement SEO pour des entreprises de tous secteurs — l'objectif n'est pas seulement d'avoir un site, mais d'être trouvé et choisi par de nouveaux clients.

### Ce qui différencie MG
**H2 :** Une approche complète, pas juste un site livré

- Design et développement sous le même toit
- SEO pensé dès la conception, pas ajouté après coup
- Intégrations pratiques (WhatsApp, réservation, paiement en ligne)
- Suivi après le lancement, pas juste une livraison ponctuelle

### Secteurs accompagnés
**H2 :** Des secteurs variés, une méthode qui s'adapte

Écoles, cliniques et cabinets médicaux, agences immobilières, salons de beauté, med spa, restaurants, hôtellerie et services professionnels.

### Stack technique
**H2 :** Outils et technologies

React · Next.js · Tailwind CSS · TypeScript · Framer Motion · Figma · Vercel

**CTA final :** Parler de votre projet avec MG

---

## 5. SERVICES (`/services`)

**Meta title :** Services Web & SEO à Béni Mellal | MG
**Meta description :** Sites web sur mesure, SEO, performance mobile et intégrations WhatsApp/réservation. Découvrez tous les services de MG pour faire grandir votre activité.

**H1 :** Nos services

### Sites web sur mesure
Conception et développement de sites rapides et modernes, adaptés à votre marque et à votre secteur d'activité — pas de template générique.

### SEO & visibilité Google
Structure technique, contenu optimisé et suivi pour que votre site soit trouvé par les clients qui cherchent vos services sur Google. Voir le détail de notre <a href="/seo">service de référencement SEO à Béni Mellal</a>.

### Performance & mobile-first
Chaque site est construit d'abord pour mobile, avec un temps de chargement optimisé — la majorité de vos visiteurs arrivent depuis leur téléphone.

### Intégrations (WhatsApp, réservation, paiement)
Boutons WhatsApp cliquables, formulaires de réservation courts, paiement en ligne sécurisé quand c'est nécessaire pour votre activité.

### Automatisation IA
Réponses automatiques, workflows de suivi client, et gain de temps sur les tâches répétitives grâce à des outils IA intégrés à votre site.

**CTA final :** Discuter du service qu'il vous faut

---

## 6. RÉALISATIONS (`/realisations`)

**Meta title :** Réalisations — Sites Web Créés par MG | Béni Mellal
**Meta description :** Découvrez les sites web réalisés par MG : hôtellerie, restaurants et plus. Design moderne, SEO intégré, résultats concrets pour nos clients.

**H1 :** Nos réalisations

Chaque projet ci-dessous a été conçu selon la même méthode : design sur mesure, structure SEO dès la construction, et intégration des outils dont le client a réellement besoin (réservation, paiement, WhatsApp).

### Velsatis Hotel
Hôtel de charme, café & restaurant sur le Boulevard Mohamed V à Béni Mellal. Site vitrine avec présentation des chambres et du restaurant.
[Voir le site →](https://www.velsatishotel.com/)

### Bougainvilla Retreat
Maison d'hôtes avec piscine entre Casablanca et Mohammedia, avec système de réservation de chambres intégré.
[Voir le site →](https://www.bougainvillaretreat.com/)

### Dar Azur
Riad de luxe du 17e siècle avec spa et suites, site pensé pour convertir les visiteurs en réservations directes.
[Voir le site →](https://darazur.lovable.app)

### Maison Aurelle
Vitrine d'un hôtel 5 étoiles avec système de réservation de chambres en ligne.
[Voir le site →](https://golden-suite-showcase.lovable.app)

### Red Flame
Steakhouse gastronomique avec présentation du menu et système de réservation de table.
[Voir le site →](https://redflame.lovable.app)

### Ce que disent les clients
> "Les réservations directes ont triplé en trois mois. Le design est enfin à la hauteur de l'expérience que nous offrons."
> — Karim Idrissi, propriétaire de riad, Marrakech

> "Beau, rapide et conçu pour convertir. Nos commissions ont baissé et Google nous envoie enfin des voyageurs qualifiés."
> — Omar Tazi, propriétaire d'hôtel de charme

**CTA final :** Votre <a href="/contact">projet pourrait être le prochain — discutons-en</a>

### Images de cette page — alt text à utiliser
- `alt="Capture d'écran du site web créé pour Velsatis Hotel, Béni Mellal"`
- `alt="Site de réservation créé pour Bougainvilla Retreat, maison d'hôtes"`
- `alt="Site web du riad de luxe Dar Azur avec spa"`
- `alt="Site vitrine créé pour l'hôtel Maison Aurelle avec réservation en ligne"`
- `alt="Site web du restaurant Red Flame avec réservation de table"`
- Idéalement, remplacer les simples captures d'écran par de vraies photos ou une courte vidéo de démonstration (scroll du site) par projet — ça augmente fortement le temps passé sur la page (dwell time)

---

## 7. SEO / RÉFÉRENCEMENT (`/seo`)

**Meta title :** SEO Béni Mellal — Référencement Google | MG
**Meta description :** Service de référencement naturel à Béni Mellal pour être visible sur Google. Audit SEO, optimisation technique et locale. Résultats mesurables.

**H1 :** Référencement SEO à Béni Mellal

Avoir un site ne suffit pas s'il n'apparaît pas quand vos clients cherchent vos services sur Google. Le SEO (référencement naturel) consiste à structurer votre site et son contenu pour que Google le comprenne, lui fasse confiance, et le montre en priorité aux bonnes personnes.

### Ce qu'est le SEO local
**H2 :** Pourquoi le SEO local compte particulièrement pour vous

La plupart des recherches pour un commerce local incluent une ville ("dentiste Béni Mellal", "salon de beauté Béni Mellal"). Le SEO local optimise votre site et votre fiche Google Business pour apparaître dans ces recherches précises, là où se trouvent vos vrais clients.

### Notre méthode
**H2 :** Comment MG travaille le référencement

1. Audit du site existant (ou structure SEO dès la conception pour un nouveau site)
2. Recherche de mots-clés pertinents pour votre secteur et votre ville
3. Optimisation technique (vitesse, structure des titres, données structurées)
4. Optimisation de votre fiche Google Business
5. Suivi mensuel des positions et ajustements

### Délais réalistes
**H2 :** Combien de temps avant de voir des résultats

Le SEO n'est pas immédiat. Les premières améliorations de positionnement apparaissent généralement après 4 à 8 semaines, avec des résultats plus significatifs après 3 à 6 mois, selon la concurrence dans votre secteur et votre ville.

**CTA final :** Demander un <a href="/contact">audit SEO gratuit</a>

### Liens sortants à inclure (crédibilité + autorité)
- Lien vers la documentation officielle **Google Search Console** (comprendre comment Google indexe votre site)
- Lien vers **Google Business Profile** (page d'inscription officielle) dans la section optimisation locale
- Lien vers **web.dev/vitals** (Google) dans la section optimisation technique, pour la définition des Core Web Vitals
*(2-3 liens sortants suffisent sur cette page — vers des sources officielles Google, jamais vers des concurrents.)*

### Maillage interne
Lien "**création de site web structuré pour le SEO**" → `/creation-site-web` dans le premier paragraphe.

### Dwell time
Transformer la section FAQ (si ajoutée) et "Notre méthode" en accordéon dépliable plutôt qu'en texte fixe — les visiteurs qui cliquent pour déplier restent plus longtemps sur la page, ce qui est un signal positif pour Google.

---

## 8. À PROPOS (`/a-propos`)

**Meta title :** À Propos — Mustapha Bourigue, MG | Béni Mellal
**Meta description :** Mustapha Bourigue, développeur web et spécialiste SEO basé à Béni Mellal, 3+ ans d'expérience. Découvrez le parcours et la méthode derrière MG.

**H1 :** À propos de MG

Je suis Mustapha Bourigue, développeur web et spécialiste SEO basé à Béni Mellal, au Maroc. Depuis plus de 3 ans, je construis des sites web pour des entreprises de secteurs variés — hôtellerie, restauration, et bien d'autres — avec un objectif simple : que le site ne soit pas seulement beau, mais qu'il ramène de vrais clients.

### Pourquoi MG (Maximum Growth)
**H2 :** Le nom derrière le nom

MG signifie Maximum Growth — la croissance maximale. C'est la promesse que je fais à chaque client : un site web n'est pas une dépense, c'est un outil de croissance, et il doit être mesuré comme tel.

### Comment je travaille
**H2 :** Ma méthode

Chaque projet commence par un appel découverte pour comprendre vos objectifs réels, pas juste vos préférences de couleurs. Le design suit, puis le développement avec des outils modernes (React, Next.js, Tailwind CSS), et le SEO est intégré dès la construction — pas ajouté après coup.

### Stack technique
React · Next.js · Tailwind CSS · TypeScript · Framer Motion · Figma · Vercel

**CTA final :** Discutons de votre projet

---

## 9. BLOG (`/blog`)

**Meta title :** Blog — Conseils Web & SEO | MG Béni Mellal
**Meta description :** Conseils pratiques sur la création de sites web, le SEO et la visibilité en ligne pour les entreprises marocaines. Par MG, Béni Mellal.

**H1 :** Blog

Conseils pratiques pour les entrepreneurs et commerçants qui veulent une meilleure présence en ligne — sans jargon inutile.

*(Page listing — chaque article ci-dessous cible une question longue traîne précise et répond dès les 2 premières phrases pour être facilement repris par Google et les IA génératives.)*

### Articles à écrire en priorité

**1. Combien coûte un site web au Maroc en 2026 ?**
Intro suggérée : *Le prix d'un site web au Maroc varie généralement entre [fourchette réelle] selon la complexité du projet. Voici comment ce prix se décompose et ce qui fait varier le tarif final.*

**2. Comment choisir une agence web à Béni Mellal**
Intro suggérée : *Choisir une agence web locale plutôt qu'un freelance à distance change trois choses : la rapidité de communication, la compréhension de votre marché, et le suivi après le lancement.*

**3. Pourquoi mon site n'est pas visible sur Google**
Intro suggérée : *Un site invisible sur Google a généralement l'une de ces trois causes : une structure technique mal optimisée, l'absence de mots-clés pertinents, ou une fiche Google Business incomplète.*

**4. Site vitrine ou site avec réservation : lequel choisir ?**
Intro suggérée : *Un site vitrine suffit pour se présenter en ligne. Un site avec réservation devient nécessaire dès que vous voulez que les clients réservent ou paient directement, sans passer par téléphone.*

**5. Comment WhatsApp Business aide les petites entreprises au Maroc**
Intro suggérée : *Au Maroc, la majorité des clients préfèrent contacter une entreprise par WhatsApp plutôt que par email. Voici comment intégrer WhatsApp directement sur votre site pour ne manquer aucun message.*
Lien sortant suggéré : page officielle **WhatsApp Business**

*(Chaque article complet doit faire 600-900 mots, répondre à la question dès le premier paragraphe, inclure un lien interne vers la page pilier correspondante, et se terminer par un CTA WhatsApp. Je peux rédiger le texte complet de chaque article un par un quand tu es prêt.)*

### Maillage interne par article
- Article 1 (prix) → lien vers `/creation-site-web`
- Article 2 (choisir une agence) → lien vers `/agence-web` et `/freelance-site-web`
- Article 3 (visibilité Google) → lien vers `/seo`
- Article 4 (vitrine vs réservation) → lien vers `/services`
- Article 5 (WhatsApp) → lien vers `/services` et `/contact`

### Règle anti-spam
Si les commentaires sont activés sous les articles, prévoir une modération avant publication (manuelle ou via un outil anti-spam type Akismet). Sinon, désactiver les commentaires publics et garder uniquement les vrais avis clients affichés ailleurs sur le site.

---

## 10. CONTACT (`/contact`)

**Meta title :** Contact — Devis Gratuit | MG Béni Mellal
**Meta description :** Contactez MG pour votre projet de site web ou SEO à Béni Mellal. Réponse rapide sur WhatsApp, devis gratuit sans engagement.

**H1 :** Discutons de votre projet

La façon la plus rapide de me joindre est WhatsApp — je réponds en quelques heures.

### Coordonnées
- **WhatsApp / Appel rapide :** +212 699 309 986 — consultation gratuite de 15 min, sans engagement
- **Email :** bouriguemustapha0@gmail.com — idéal pour un brief détaillé
- **Instagram :** [@mustapha_bourigue_mg](https://www.instagram.com/mustapha_bourigue_mg) — suivez les dernières réalisations
- **LinkedIn :** [Mustapha Bourigue](https://www.linkedin.com/in/mustapha-bourigue)
- **Localisation :** Béni Mellal, Maroc

### Formulaire de contact (4 champs max)
- Nom
- Secteur d'activité / type d'entreprise
- Besoin : Site web / SEO / Les deux
- Téléphone ou email

*(Le formulaire redirige vers WhatsApp par défaut avec les informations pré-remplies.)*

**CTA final :** Envoyer sur WhatsApp

---

## CHECKLIST TECHNIQUE — à appliquer sur tout le site (pas page par page)

### Densité de mots-clés
Ne pas dépasser 1-2%. Sur un texte de 400-600 mots, le mot-clé principal + ses variantes doit apparaître naturellement 3-5 fois maximum. Au-delà, Google considère ça comme du bourrage de mots-clés (keyword stuffing) et ça peut pénaliser la page.

### Images — règle générale sur tout le site
- Chaque image a un attribut `alt` unique et descriptif (jamais "image1.jpg" ou vide)
- Format WebP de préférence, dimensions explicites en HTML pour éviter le layout shift (CLS)
- `loading="lazy"` sur toutes les images sauf celle du hero de chaque page
- Ajouter du contenu riche au-delà des captures d'écran : vraies photos de Mustapha, courte vidéo de présentation sur l'Accueil ou À propos, témoignages en vidéo si possible — ça améliore fortement le dwell time

### Analytics et suivi
- Installer **Google Analytics 4** + **Google Search Console** dès le lancement
- Surveiller le taux de rebond par page : au-delà de 70-80%, ça indique un problème de contenu ou un décalage avec l'intention de recherche de la page
- Suivre le temps moyen passé par page (dwell time) — les pages avec FAQ en accordéon, vidéos ou contenu interactif ont généralement un meilleur score

### Éviter le contenu fin (thin content)
Si vous dupliquez le template de l'Accueil pour d'autres villes plus tard (Fkih Ben Salah, Khouribga, Kasba Tadla), chaque page ville doit avoir du contenu réellement unique (référence à un client local si possible, spécificités de la ville) — pas juste changer le nom de ville dans un texte identique. Des pages quasi-identiques sont traitées par Google comme des pages "doorway" et peuvent nuire au classement de tout le site.

### Off-page — à construire après le lancement
- **Backlinks et citations locales** : fiche Google Business Profile complète et à jour, inscription sur des annuaires marocains pertinents, mentions de la marque MG sur Instagram/LinkedIn qui pointent vers le site
- **Éviter le black-hat SEO** : si des backlinks sont achetés un jour via un prestataire externe, vérifier qu'ils ne viennent pas de fermes de liens ou de réseaux privés de blogs (PBN) — ce type de pratique peut faire pénaliser tout le domaine par Google. Préférer des backlinks lents et naturels (annuaires, partenaires locaux, presse) à des liens rapides et risqués

### Analyse des mots-clés — statut actuel
Volume et concurrence déjà vérifiés via Keyword Planner pour : "agence web", "création site web", "freelance site web", "création de site web" (pages 1-4). Reste à vérifier avant rédaction complète : "SEO Béni Mellal" / "référencement naturel Béni Mellal" (page 7), "portfolio agence web" (page 6), et les mots-clés précis des 5 sujets de blog.

---

*Fin du document. Colle chaque page dans Lovable en gardant le meta title, la meta description et la structure H1/H2 telles quelles — c'est ce qui fait le travail SEO en arrière-plan pendant que le visiteur ne voit que le design.*MG (Maximum Growth) — Contenu complet du site

Mustapha Bourigue · Agence web & SEO · Béni Mellal, Maroc

Toutes les pages ci-dessous incluent : meta title, meta description, H1, structure H2, et le texte réel à utiliser. Colle chaque section dans Lovable telle quelle.

1. ACCUEIL (/)

Meta title : MG — Création de Sites Web à Béni Mellal | Mustapha Bourigue Meta description : MG conçoit des sites web modernes et optimisés SEO à Béni Mellal, pour tous les secteurs. Devis gratuit, réponse rapide sur WhatsApp.

(Note anti-cannibalisation : l'Accueil cible la marque "MG" + "création site web Béni Mellal". Le mot-clé "agence web Béni Mellal" est réservé à la page 4 uniquement — ne pas le répéter en meta title ici pour éviter que les deux pages se fassent concurrence sur Google.)

Hero

H1 : Des sites web qui font grandir votre activité à Béni Mellal

Sous-titre : Je conçois des sites rapides, modernes et optimisés pour Google — pour les écoles, cabinets médicaux, agences immobilières, salons de beauté, restaurants et tous les commerces qui veulent être trouvés en ligne.

CTA primaire : Discuter de mon projet (WhatsApp) CTA secondaire : Voir mes réalisations

Ligne de disponibilité : Disponible pour de nouveaux projets · Béni Mellal, Maroc

Section "Pourquoi MG"

H2 : Un site ne sert à rien s'il n'est pas trouvé

Beaucoup de petites entreprises ont un site — mais un site que personne ne trouve sur Google ne rapporte rien. MG combine la création de sites web et le référencement SEO dans une seule offre, pensée pour que votre entreprise apparaisse quand vos clients vous cherchent.

Rapide & moderne — Sites optimisés pour la vitesse et le mobile.

Prêt pour le SEO — Structuré dès le départ pour être trouvé sur Google.

WhatsApp intégré — Vos clients vous contactent en un clic.

Sur mesure — Pas de template générique, un design pensé pour votre secteur.

Section secteurs

H2 : Pour qui je construis des sites

Écoles et établissements scolaires · Médecins et cliniques · Agences immobilières · Salons de beauté & instituts · Med spa et médecine esthétique · Restaurants · Hôtellerie · Services professionnels

(Chaque secteur en lien cliquable vers une future page dédiée si le volume de recherche le justifie plus tard.)

Section réalisations (aperçu, 3 projets max, lien "voir tout")

H2 : Des sites déjà en ligne, déjà utiles

Velsatis Hotel · Bougainvilla Retreat · Red Flame — <a href="/realisations">voir toutes nos réalisations de sites web</a>.

Maillage interne — ancres à utiliser sur cette page

Dans le texte "Pourquoi MG" : lien "création de site web sur mesure" → /creation-site-web

Dans le texte "Pourquoi MG" : lien "référencement SEO" → /seo

CTA secondaire "Voir mes réalisations" → /realisations

Lien "freelance spécialisé à Béni Mellal" quelque part dans le footer ou une section → /freelance-site-web

Images de cette page — alt text à utiliser

Photo/portrait de Mustapha : alt="Mustapha Bourigue, développeur web et spécialiste SEO à Béni Mellal"

Logo MG dans le header : alt="MG - Maximum Growth, agence web Béni Mellal"

Miniatures des 3 projets en aperçu : alt="Site web créé pour [nom du projet], [secteur], par MG"

Toutes les images sauf le hero en loading="lazy", dimensions explicites pour éviter le layout shift

Section process (aperçu)

H2 : Un chemin clair jusqu'au lancement

Appel découverte — on discute de vos objectifs et de votre public.

Design & planification — wireframes et direction visuelle alignés à votre marque.

Développement — site rapide, responsive, optimisé SEO dès la construction.

Lancement & suivi — mise en ligne, puis optimisation continue.

Section contact (bandeau final)

H2 : Prêt à être trouvé sur Google ?

La façon la plus rapide de me joindre est WhatsApp — je réponds en quelques heures.

CTA : WhatsApp +212 699 309 986

2. CRÉATION SITE WEB (/creation-site-web)

Meta title : Création de Site Web à Béni Mellal — Devis Gratuit | MG Meta description : Besoin d'un site web professionnel à Béni Mellal ? Sites rapides, responsive et optimisés SEO. Découvrez nos tarifs et notre process de création.

H1 : Création de site web sur mesure à Béni Mellal

Un site web professionnel n'est pas juste une vitrine — c'est l'outil qui amène de nouveaux clients pendant que vous travaillez. Je conçois des sites rapides, responsives et structurés pour le référencement, adaptés à votre secteur d'activité : école, cabinet médical, agence immobilière, salon de beauté, restaurant ou autre commerce.

Ce qui est inclus

H2 : Ce qui est inclus dans la création de votre site

Design sur mesure adapté à votre marque et à votre secteur

Site responsive, optimisé pour mobile en priorité

Structure SEO dès la construction (balises, hiérarchie, vitesse)

Formulaire de contact ou bouton WhatsApp cliquable

Formation rapide pour gérer votre contenu vous-même

Combien de temps et combien ça coûte

H2 : Délais et tarifs

Un site vitrine simple (5 à 6 pages) est généralement livré en 2 à 4 semaines. Le tarif dépend de la complexité (nombre de pages, intégrations comme la réservation en ligne ou le paiement). Contactez-moi pour un devis gratuit basé sur votre besoin réel — pas de prix générique en ligne qui ne correspond pas à votre projet.

FAQ

H2 : Questions fréquentes

Combien coûte la création d'un site web au Maroc ? Le prix dépend du nombre de pages, des fonctionnalités (réservation, paiement, multilingue) et du niveau de personnalisation du design. Un devis gratuit après un premier échange donne un chiffre précis pour votre projet.

Combien de temps pour avoir mon site en ligne ? Un site vitrine standard prend 2 à 4 semaines, de la première maquette à la mise en ligne. Les projets avec réservation ou paiement intégré prennent un peu plus de temps.

Mon site sera-t-il visible sur Google dès le lancement ? Le site est structuré pour le SEO dès sa construction, mais être bien classé sur Google prend du temps (généralement plusieurs semaines à quelques mois selon la concurrence de votre secteur et de votre ville).

CTA final : Demander un devis gratuit

3. FREELANCE SITE WEB (/freelance-site-web)

Meta title : Freelance Site Web Béni Mellal — Développeur Web Indépendant | MG Meta description : Freelance spécialisé en création de sites web à Béni Mellal. Tarifs directs sans intermédiaire, contact rapide, sites livrés en 2 à 4 semaines.

H1 : Freelance création de site web à Béni Mellal

Je suis Mustapha Bourigue, développeur web freelance basé à Béni Mellal. Contrairement à une grande agence, vous parlez directement à la personne qui construit votre site — pas à un chef de projet intermédiaire. Résultat : des échanges plus rapides, des tarifs plus directs, et un interlocuteur unique du premier appel jusqu'au lancement.

Pourquoi un freelance plutôt qu'une agence

H2 : Ce que ça change de travailler en direct

Communication directe — vous échangez avec la personne qui code, pas un intermédiaire.

Tarifs plus clairs — pas de frais de structure d'une grande agence.

Flexibilité — les ajustements de dernière minute sont plus simples à gérer.

Responsabilité claire — une seule personne, un seul engagement.

Ce que j'offre

H2 : Ce qui est inclus

Sites web sur mesure, référencement SEO, intégrations WhatsApp et réservation en ligne, optimisation de vitesse et d'expérience mobile. Stack technique moderne : React, Next.js, Tailwind CSS, TypeScript.

Témoignage

"Les clients réservent et paient directement, et WhatsApp a tout simplifié. Mustapha a compris nos besoins dès le premier jour." — Nadia Benali, gérante de maison d'hôtes, Essaouira

CTA final : Discuter de votre projet en direct sur WhatsApp

4. AGENCE WEB (/agence-web)

Meta title : Agence Web à Béni Mellal — Sites & SEO | Maximum Growth Meta description : MG est une agence web basée à Béni Mellal : conception de sites, référencement SEO et optimisation. Accompagnement complet pour votre présence en ligne.

H1 : Votre agence web à Béni Mellal

MG (Maximum Growth) est une agence web basée à Béni Mellal, fondée par Mustapha Bourigue. L'agence conçoit des sites web et gère le référencement SEO pour des entreprises de tous secteurs — l'objectif n'est pas seulement d'avoir un site, mais d'être trouvé et choisi par de nouveaux clients.

Ce qui différencie MG

H2 : Une approche complète, pas juste un site livré

Design et développement sous le même toit

SEO pensé dès la conception, pas ajouté après coup

Intégrations pratiques (WhatsApp, réservation, paiement en ligne)

Suivi après le lancement, pas juste une livraison ponctuelle

Secteurs accompagnés

H2 : Des secteurs variés, une méthode qui s'adapte

Écoles, cliniques et cabinets médicaux, agences immobilières, salons de beauté, med spa, restaurants, hôtellerie et services professionnels.

Stack technique

H2 : Outils et technologies

React · Next.js · Tailwind CSS · TypeScript · Framer Motion · Figma · Vercel

CTA final : Parler de votre projet avec MG

5. SERVICES (/services)

Meta title : Services Web & SEO à Béni Mellal | MG Meta description : Sites web sur mesure, SEO, performance mobile et intégrations WhatsApp/réservation. Découvrez tous les services de MG pour faire grandir votre activité.

H1 : Nos services

Sites web sur mesure

Conception et développement de sites rapides et modernes, adaptés à votre marque et à votre secteur d'activité — pas de template générique.

SEO & visibilité Google

Structure technique, contenu optimisé et suivi pour que votre site soit trouvé par les clients qui cherchent vos services sur Google. Voir le détail de notre <a href="/seo">service de référencement SEO à Béni Mellal</a>.

Performance & mobile-first

Chaque site est construit d'abord pour mobile, avec un temps de chargement optimisé — la majorité de vos visiteurs arrivent depuis leur téléphone.

Intégrations (WhatsApp, réservation, paiement)

Boutons WhatsApp cliquables, formulaires de réservation courts, paiement en ligne sécurisé quand c'est nécessaire pour votre activité.

Automatisation IA

Réponses automatiques, workflows de suivi client, et gain de temps sur les tâches répétitives grâce à des outils IA intégrés à votre site.

CTA final : Discuter du service qu'il vous faut

6. RÉALISATIONS (/realisations)

Meta title : Réalisations — Sites Web Créés par MG | Béni Mellal Meta description : Découvrez les sites web réalisés par MG : hôtellerie, restaurants et plus. Design moderne, SEO intégré, résultats concrets pour nos clients.

H1 : Nos réalisations

Chaque projet ci-dessous a été conçu selon la même méthode : design sur mesure, structure SEO dès la construction, et intégration des outils dont le client a réellement besoin (réservation, paiement, WhatsApp).

Velsatis Hotel

Hôtel de charme, café & restaurant sur le Boulevard Mohamed V à Béni Mellal. Site vitrine avec présentation des chambres et du restaurant. Voir le site →

Bougainvilla Retreat

Maison d'hôtes avec piscine entre Casablanca et Mohammedia, avec système de réservation de chambres intégré. Voir le site →

Dar Azur

Riad de luxe du 17e siècle avec spa et suites, site pensé pour convertir les visiteurs en réservations directes. Voir le site →

Maison Aurelle

Vitrine d'un hôtel 5 étoiles avec système de réservation de chambres en ligne. Voir le site →

Red Flame

Steakhouse gastronomique avec présentation du menu et système de réservation de table. Voir le site →

Ce que disent les clients

"Les réservations directes ont triplé en trois mois. Le design est enfin à la hauteur de l'expérience que nous offrons." — Karim Idrissi, propriétaire de riad, Marrakech

"Beau, rapide et conçu pour convertir. Nos commissions ont baissé et Google nous envoie enfin des voyageurs qualifiés." — Omar Tazi, propriétaire d'hôtel de charme

CTA final : Votre <a href="/contact">projet pourrait être le prochain — discutons-en</a>

Images de cette page — alt text à utiliser

alt="Capture d'écran du site web créé pour Velsatis Hotel, Béni Mellal"

alt="Site de réservation créé pour Bougainvilla Retreat, maison d'hôtes"

alt="Site web du riad de luxe Dar Azur avec spa"

alt="Site vitrine créé pour l'hôtel Maison Aurelle avec réservation en ligne"

alt="Site web du restaurant Red Flame avec réservation de table"

Idéalement, remplacer les simples captures d'écran par de vraies photos ou une courte vidéo de démonstration (scroll du site) par projet — ça augmente fortement le temps passé sur la page (dwell time)

7. SEO / RÉFÉRENCEMENT (/seo)

Meta title : SEO Béni Mellal — Référencement Google | MG Meta description : Service de référencement naturel à Béni Mellal pour être visible sur Google. Audit SEO, optimisation technique et locale. Résultats mesurables.

H1 : Référencement SEO à Béni Mellal

Avoir un site ne suffit pas s'il n'apparaît pas quand vos clients cherchent vos services sur Google. Le SEO (référencement naturel) consiste à structurer votre site et son contenu pour que Google le comprenne, lui fasse confiance, et le montre en priorité aux bonnes personnes.

Ce qu'est le SEO local

H2 : Pourquoi le SEO local compte particulièrement pour vous

La plupart des recherches pour un commerce local incluent une ville ("dentiste Béni Mellal", "salon de beauté Béni Mellal"). Le SEO local optimise votre site et votre fiche Google Business pour apparaître dans ces recherches précises, là où se trouvent vos vrais clients.

Notre méthode

H2 : Comment MG travaille le référencement

Audit du site existant (ou structure SEO dès la conception pour un nouveau site)

Recherche de mots-clés pertinents pour votre secteur et votre ville

Optimisation technique (vitesse, structure des titres, données structurées)

Optimisation de votre fiche Google Business

Suivi mensuel des positions et ajustements

Délais réalistes

H2 : Combien de temps avant de voir des résultats

Le SEO n'est pas immédiat. Les premières améliorations de positionnement apparaissent généralement après 4 à 8 semaines, avec des résultats plus significatifs après 3 à 6 mois, selon la concurrence dans votre secteur et votre ville.

CTA final : Demander un <a href="/contact">audit SEO gratuit</a>

Liens sortants à inclure (crédibilité + autorité)

Lien vers la documentation officielle Google Search Console (comprendre comment Google indexe votre site)

Lien vers Google Business Profile (page d'inscription officielle) dans la section optimisation locale

Lien vers web.dev/vitals (Google) dans la section optimisation technique, pour la définition des Core Web Vitals (2-3 liens sortants suffisent sur cette page — vers des sources officielles Google, jamais vers des concurrents.)

Maillage interne

Lien "création de site web structuré pour le SEO" → /creation-site-web dans le premier paragraphe.

Dwell time

Transformer la section FAQ (si ajoutée) et "Notre méthode" en accordéon dépliable plutôt qu'en texte fixe — les visiteurs qui cliquent pour déplier restent plus longtemps sur la page, ce qui est un signal positif pour Google.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://maximumgrowth.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/65464879-bcc7-4774-9fb0-d7e36fd5d5fa).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
