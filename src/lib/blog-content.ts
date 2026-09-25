import { routes, type Language, type PageKey } from "@/lib/mg-content";

export type Block = { h?: string; p?: string[]; ul?: string[] };
export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  readTime: string;
  pillar: PageKey;
  pillarLabel: string;
  blocks: Block[];
};

export const articles: Record<Language, Article[]> = {
  fr: [
    {
      slug: "prix-site-web-maroc-2026",
      title: "Combien coûte un site web au Maroc en 2026 ?",
      description:
        "Le prix d'un site web au Maroc en 2026 dépend du nombre de pages, des fonctionnalités et du niveau de design. Voici la décomposition complète du budget.",
      excerpt:
        "Le prix d'un site web au Maroc varie selon la complexité du projet. Voici comment ce prix se décompose et ce qui fait varier le tarif final.",
      readTime: "7 min",
      pillar: "creation",
      pillarLabel: "Création de site web",
      blocks: [
        {
          p: [
            "Le prix d'un site web au Maroc en 2026 dépend de quatre facteurs : le nombre de pages, le niveau de personnalisation du design, les fonctionnalités connectées (réservation, paiement, multilingue) et l'accompagnement après la mise en ligne. Un site vitrine de cinq pages, conçu sur mesure et optimisé pour le référencement, se situe dans une fourchette très différente d'une plateforme de réservation reliée à un système de paiement. Avant de comparer deux devis, il faut donc comparer ce qu'ils contiennent réellement.",
            "La confusion vient souvent du fait que le mot « site web » recouvre des réalités très éloignées : un modèle acheté et rempli en deux jours, un site assemblé sur un constructeur en ligne, ou un site développé ligne par ligne pour votre activité. Les trois coûtent des sommes différentes et ne produisent pas les mêmes résultats sur Google ni sur mobile.",
          ],
        },
        {
          h: "Ce qui compose réellement le budget",
          p: [
            "Un devis honnête sépare toujours la conception, le développement, le contenu et le suivi. Quand ces lignes sont fondues dans un prix unique, vous ne savez pas ce que vous payez, et surtout vous ne savez pas ce qui manque.",
          ],
          ul: [
            "La stratégie et l'arborescence : définir les pages, les mots-clés visés et le parcours du visiteur jusqu'à la prise de contact.",
            "Le design : maquettes sur mesure ou adaptation d'un modèle existant. C'est le poste qui fait le plus varier le prix.",
            "Le développement : intégration responsive, performance mobile, structure technique propre pour le référencement.",
            "Le contenu : textes, photos optimisées, traductions si le site est bilingue.",
            "Les fonctionnalités : formulaire, redirection WhatsApp, moteur de réservation, paiement en ligne, espace client.",
            "Les frais récurrents : nom de domaine et hébergement, à prévoir chaque année indépendamment du prestataire.",
          ],
        },
        {
          h: "Pourquoi le moins cher coûte souvent plus cher",
          p: [
            "Un site très bon marché est presque toujours un modèle générique, lourd, mal structuré et identique à des centaines d'autres. Il s'affiche lentement sur mobile, ce qui fait partir une partie des visiteurs avant même l'affichage du premier écran, et il n'est pas construit pour se positionner sur des recherches précises. Au bout de quelques mois, la plupart des entreprises concernées paient une deuxième fois pour refaire ce qui aurait dû être fait correctement la première fois.",
            "À l'inverse, un site sur mesure coûte plus cher au départ mais reste utilisable pendant des années : il se charge vite, il est lisible sur téléphone, il envoie les demandes directement sur WhatsApp et il peut accueillir de nouvelles pages sans tout reconstruire.",
          ],
        },
        {
          h: "Les délais à prévoir",
          p: [
            "Un site vitrine standard demande 2 à 4 semaines entre la première maquette et la mise en ligne, à condition que les textes et les photos soient disponibles. Un projet plus large, avec réservation ou plusieurs langues, s'étale sur 4 à 8 semaines. Le référencement, lui, se mesure sur 3 à 6 mois : c'est le temps nécessaire pour que Google explore, comprenne et classe durablement vos pages.",
            "Le retard le plus fréquent ne vient jamais du développement, mais du contenu. Rassembler les textes, les vraies photos et les informations de contact avant le début du projet raccourcit le délai de plusieurs semaines.",
          ],
        },
        {
          h: "Les questions à poser avant de signer",
          ul: [
            "Le site est-il construit sur mesure ou à partir d'un modèle revendu ?",
            "Qui est propriétaire du nom de domaine et du code une fois le projet livré ?",
            "Les textes et le référencement de base sont-ils inclus, ou facturés en plus ?",
            "Combien de temps de corrections sont prévues après la mise en ligne ?",
            "Comment le site sera-t-il mesuré : Google Analytics, Search Console, suivi des demandes reçues ?",
          ],
        },
        {
          h: "En résumé",
          p: [
            "Le budget juste est celui qui correspond à ce que le site doit produire. Si votre objectif est d'être trouvé sur Google et de recevoir des demandes sur WhatsApp, un site vitrine soigné et rapide suffit. Si votre objectif est d'encaisser des réservations directes, le budget doit inclure le moteur de réservation et le paiement. Dans les deux cas, demandez un devis détaillé ligne par ligne : c'est le meilleur filtre contre les mauvaises surprises.",
          ],
        },
      ],
    },
    {
      slug: "choisir-agence-web-beni-mellal",
      title: "Comment choisir une agence web à Béni Mellal",
      description:
        "Comment choisir une agence web pour une entreprise à Béni Mellal : critères concrets, questions à poser et raisons pour lesquelles une agence en ligne fonctionne très bien.",
      excerpt:
        "Une agence en ligne peut servir efficacement une entreprise à Béni Mellal grâce à une communication directe, une bonne compréhension du marché et un suivi structuré après le lancement.",
      readTime: "6 min",
      pillar: "agency",
      pillarLabel: "Agence digitale",
      blocks: [
        {
          p: [
            "Pour choisir une agence web quand on dirige une entreprise à Béni Mellal, regardez trois choses avant tout : des réalisations réelles et consultables en ligne, un interlocuteur unique qui répond vite, et un engagement clair sur ce qui se passe après la mise en ligne. La localisation physique de l'agence arrive loin derrière ces trois critères, parce que la quasi-totalité du travail — cadrage, maquettes, validations, corrections — se fait aujourd'hui à distance.",
            "Maximum Growth est une agence 100 % en ligne. Nous n'avons pas de bureau à Béni Mellal : nous accompagnons des entreprises qui s'y trouvent, comme à Marrakech, à Casablanca ou à l'étranger, en travaillant à distance avec un suivi direct sur WhatsApp.",
          ],
        },
        {
          h: "1. Des réalisations que vous pouvez ouvrir",
          p: [
            "Un portfolio crédible n'est pas une galerie d'images : ce sont des adresses de sites en ligne, que vous pouvez ouvrir sur votre téléphone, tester, et dont vous pouvez vérifier la vitesse. Demandez systématiquement les liens. Si une agence ne peut montrer que des captures d'écran, vous ne pouvez juger ni la performance mobile, ni la qualité réelle du résultat.",
          ],
        },
        {
          h: "2. Un interlocuteur unique",
          p: [
            "Dans beaucoup de structures, le commercial qui vend le projet n'est pas la personne qui le réalise, et les informations se perdent entre les deux. Travailler directement avec la personne qui conçoit et développe votre site supprime cet intermédiaire : les décisions sont prises en quelques messages au lieu de plusieurs jours, et vous savez toujours à qui parler.",
          ],
        },
        {
          h: "3. Une méthode expliquée à l'avance",
          p: [
            "Avant de signer, vous devriez pouvoir répéter les étapes du projet avec vos propres mots. Un déroulé sain ressemble à ceci :",
          ],
          ul: [
            "Un échange de cadrage pour comprendre votre activité, vos clients et vos objectifs.",
            "Une arborescence et des maquettes validées avant tout développement.",
            "Le développement, puis une phase de tests sur mobile et sur ordinateur.",
            "La mise en ligne, avec Google Analytics et la Search Console configurés dès le premier jour.",
            "Un suivi des corrections et des statistiques après le lancement.",
          ],
        },
        {
          h: "4. Le référencement traité dès la construction",
          p: [
            "Le référencement ne s'ajoute pas après coup comme une option. Il se prépare pendant la conception : une page par intention de recherche, des titres et descriptions uniques, des images légères et décrites, une structure de titres cohérente. Une agence qui vous propose de « faire le SEO plus tard » vous vendra deux fois le même travail.",
          ],
        },
        {
          h: "5. Ce qui se passe après la mise en ligne",
          p: [
            "Un site n'est pas terminé le jour de sa publication. Demandez ce qui est inclus ensuite : durée des corrections, accès aux statistiques, possibilité d'ajouter des pages, réactivité en cas de problème. C'est sur ces mois-là que se joue la différence entre un site qui rapporte des clients et un site qui dort.",
          ],
        },
        {
          h: "Les signaux à éviter",
          ul: [
            "Une promesse de « première place sur Google » garantie : personne ne peut la garantir.",
            "Un devis en une seule ligne, sans détail des prestations.",
            "Aucun lien vers des sites réellement en ligne.",
            "Le refus de vous transférer la propriété du nom de domaine.",
            "Des délais annoncés sans dépendre de la fourniture de vos contenus.",
          ],
        },
        {
          p: [
            "Le bon critère final est simple : au bout du premier échange, avez-vous compris précisément ce que vous allez recevoir, quand, et ce qui se passera ensuite ? Si oui, l'adresse postale de l'agence n'a aucune importance.",
          ],
        },
      ],
    },
    {
      slug: "site-pas-visible-sur-google",
      title: "Pourquoi mon site n'est pas visible sur Google",
      description:
        "Un site invisible sur Google a presque toujours une de ces causes : indexation bloquée, contenu trop mince, mots-clés absents ou fiche Google Business incomplète. Diagnostic étape par étape.",
      excerpt:
        "Un site invisible sur Google a généralement l'une de ces trois causes : une structure technique mal optimisée, l'absence de mots-clés pertinents, ou une fiche Google Business incomplète.",
      readTime: "7 min",
      pillar: "seo",
      pillarLabel: "SEO et référencement",
      blocks: [
        {
          p: [
            "Si votre site n'apparaît pas sur Google, la cause est presque toujours l'une de ces quatre : les pages ne sont pas indexées, le contenu ne correspond à aucune recherche réelle, la structure technique empêche Google de comprendre le site, ou le site est trop récent pour être encore classé. La bonne nouvelle est que chacune de ces causes se vérifie en quelques minutes avec des outils gratuits.",
            "Commencez par le test le plus simple : tapez dans Google « site: » suivi de l'adresse de votre site, sans espace. Si aucune page n'apparaît, votre problème est l'indexation. Si vos pages apparaissent mais que personne ne vous trouve, votre problème est le positionnement.",
          ],
        },
        {
          h: "Cause 1 : le site n'est pas indexé",
          p: [
            "Un site peut être totalement invisible parce qu'il bloque involontairement les moteurs de recherche : une consigne de blocage laissée dans le fichier robots.txt, une balise qui demande à Google de ne pas indexer la page, ou un site mis en ligne sans jamais être déclaré. Ouvrez un compte gratuit sur la Search Console de Google, ajoutez votre site, et envoyez votre sitemap. C'est la première action à faire, avant toute autre optimisation.",
          ],
        },
        {
          h: "Cause 2 : le contenu ne cible aucune recherche",
          p: [
            "Beaucoup de sites décrivent l'entreprise dans son propre vocabulaire, alors que les clients cherchent avec le leur. Une page intitulée « Nos prestations » ne se positionne sur rien ; une page intitulée « Création de site web au Maroc » cible une recherche existante. Chaque page doit répondre à une intention de recherche précise, et une seule, pour éviter que vos propres pages se concurrencent entre elles.",
            "Vérifiez aussi la longueur : une page de trois phrases n'apporte pas assez de réponse pour être classée. Une page de service utile fait au minimum 300 à 500 mots, un article de fond entre 600 et 900 mots.",
          ],
        },
        {
          h: "Cause 3 : la structure technique",
          p: [
            "Google lit votre site comme un document structuré. Quand cette structure est absente, il devine mal le sujet de chaque page. Les points à contrôler :",
          ],
          ul: [
            "Un seul titre principal (H1) par page, suivi de sous-titres hiérarchisés.",
            "Un titre et une description uniques pour chaque page, jamais dupliqués.",
            "Des adresses de page lisibles, courtes, avec des tirets entre les mots.",
            "Des images compressées et décrites par un texte alternatif.",
            "Un affichage rapide sur mobile : au-delà de quelques secondes, une partie des visiteurs abandonne.",
          ],
          },
        {
          h: "Cause 4 : l'absence de présence locale",
          p: [
            "Pour les recherches qui contiennent une ville, Google privilégie les entreprises possédant une fiche Google Business Profile complète et à jour. Créez-la, remplissez la catégorie, les horaires, le numéro de téléphone et le lien vers le site, ajoutez des photos réelles et demandez des avis à vos clients satisfaits. Les mêmes informations de contact doivent apparaître à l'identique partout : site, fiche Google, réseaux sociaux, annuaires.",
          ],
        },
        {
          h: "Cause 5 : la patience",
          p: [
            "Un site récent n'est pas classé immédiatement, même parfaitement optimisé. Comptez 3 à 6 mois avant de voir des positions stables sur des recherches concurrentielles, et quelques semaines pour des expressions plus précises et moins disputées. Publier régulièrement du contenu utile accélère nettement ce calendrier.",
          ],
        },
        {
          h: "Votre plan d'action dans l'ordre",
          ul: [
            "Vérifier l'indexation avec la commande site: puis la Search Console.",
            "Corriger les blocages techniques et envoyer le sitemap.",
            "Réécrire les titres et descriptions autour de recherches réelles.",
            "Compléter les pages trop courtes et supprimer les doublons.",
            "Créer ou compléter la fiche Google Business Profile.",
            "Mesurer chaque mois avec Google Analytics et la Search Console.",
          ],
        },
      ],
    },
    {
      slug: "site-vitrine-ou-site-reservation",
      title: "Site vitrine ou site avec réservation : lequel choisir ?",
      description:
        "Site vitrine ou site avec réservation en ligne : comparez les deux options, les coûts, les délais et le moment exact où la réservation devient rentable pour votre activité.",
      excerpt:
        "Un site vitrine suffit pour se présenter en ligne. Un site avec réservation devient nécessaire dès que vous voulez que les clients réservent ou paient directement, sans passer par téléphone.",
      readTime: "6 min",
      pillar: "services",
      pillarLabel: "Services",
      blocks: [
        {
          p: [
            "Choisissez un site vitrine si votre objectif est d'être trouvé, de rassurer et de recevoir des demandes de contact. Choisissez un site avec réservation dès que la prise de rendez-vous ou la réservation devient un travail quotidien qui vous coûte du temps, ou dès que vous perdez des clients en dehors de vos heures d'ouverture. La question n'est pas « lequel est le meilleur », mais « à quelle étape de mon activité suis-je ».",
          ],
        },
        {
          h: "Ce que fait un site vitrine",
          p: [
            "Un site vitrine présente votre activité, vos prestations, vos réalisations et vos coordonnées. Il se compose généralement de cinq à huit pages, se construit en 2 à 4 semaines et se positionne sur les recherches liées à votre métier. Les demandes arrivent par formulaire, par téléphone ou, au Maroc, très majoritairement par WhatsApp.",
            "C'est le bon choix pour un artisan, un cabinet, un restaurant, un commerce ou un prestataire de services qui veut être crédible en ligne sans gérer un système de réservation.",
          ],
        },
        {
          h: "Ce que fait un site avec réservation",
          p: [
            "Un site avec réservation ajoute un calendrier de disponibilités, une confirmation automatique et, souvent, un paiement ou un acompte en ligne. Il travaille pendant que vous dormez : un client peut réserver à minuit sans que personne ne réponde au téléphone. En contrepartie, il demande plus de développement, plus de tests, et un budget supérieur.",
            "Il devient rentable lorsque le nombre de réservations manquées ou de allers-retours téléphoniques dépasse le coût du système. Pour un hébergement, un centre de bien-être ou un cabinet avec de nombreux rendez-vous courts, ce seuil est franchi rapidement.",
          ],
        },
        {
          h: "Comparaison rapide",
          ul: [
            "Objectif : vitrine = être trouvé et contacté ; réservation = encaisser directement.",
            "Délai : 2 à 4 semaines pour un site vitrine, 4 à 8 semaines avec réservation.",
            "Budget : la réservation ajoute le développement du calendrier, du paiement et des e-mails de confirmation.",
            "Maintenance : un site vitrine évolue peu ; un système de réservation demande un suivi régulier.",
            "Référencement : identique dans les deux cas, il dépend du contenu et de la structure, pas des fonctionnalités.",
          ],
        },
        {
          h: "La solution intermédiaire",
          p: [
            "Vous pouvez commencer par un site vitrine conçu pour accueillir la réservation plus tard. Concrètement : une structure propre, des pages de services déjà en place, et un bouton WhatsApp permanent qui ouvre une conversation avec un message prérempli. La plupart des clients marocains préfèrent d'ailleurs ce canal à un formulaire classique. Le jour où le volume le justifie, le moteur de réservation s'ajoute sans reconstruire le site.",
          ],
        },
        {
          h: "Comment décider en trois questions",
          ul: [
            "Combien d'appels ou de messages par semaine servent uniquement à fixer un créneau ?",
            "Perdez-vous des clients le soir, le week-end ou pendant vos heures de travail ?",
            "Vos clients sont-ils prêts à payer ou verser un acompte en ligne ?",
          ],
        },
        {
          p: [
            "Si vous répondez oui à deux de ces trois questions, la réservation en ligne se rentabilise. Sinon, un site vitrine rapide, bien référencé et relié à WhatsApp reste l'investissement le plus efficace pour commencer.",
          ],
        },
      ],
    },
    {
      slug: "whatsapp-business-petites-entreprises-maroc",
      title: "Comment WhatsApp Business aide les petites entreprises au Maroc",
      description:
        "WhatsApp Business permet aux petites entreprises marocaines de répondre plus vite, de rassurer et de convertir les visiteurs de leur site en clients. Guide de mise en place.",
      excerpt:
        "Au Maroc, la majorité des clients préfèrent contacter une entreprise par WhatsApp plutôt que par email. Voici comment intégrer WhatsApp directement sur votre site pour ne manquer aucun message.",
      readTime: "6 min",
      pillar: "services",
      pillarLabel: "Services",
      blocks: [
        {
          p: [
            "WhatsApp Business aide les petites entreprises marocaines parce qu'il supprime la friction entre la visite d'un site et la première conversation. Un formulaire classique demande un effort, une attente et une confiance que le visiteur n'a pas encore. Un bouton WhatsApp ouvre une discussion immédiate, dans une application que le client utilise déjà tous les jours, avec un message déjà rédigé pour lui.",
            "Concrètement, sur les sites que nous construisons, le bouton WhatsApp reste visible en permanence et ouvre une conversation contenant déjà le nom du visiteur, son secteur et son besoin. L'entreprise reçoit une demande qualifiée au lieu d'un e-mail vide.",
          ],
        },
        {
          h: "Ce que WhatsApp Business apporte de plus que WhatsApp classique",
          ul: [
            "Un profil professionnel : nom de l'entreprise, description, horaires, adresse du site et catalogue.",
            "Un message d'accueil automatique pour répondre instantanément, même hors des heures d'ouverture.",
            "Des réponses rapides enregistrées pour les questions qui reviennent : tarifs, disponibilités, délais.",
            "Des étiquettes pour classer les conversations : nouveau contact, devis envoyé, client confirmé.",
            "Un catalogue de produits ou de prestations, partageable directement dans la discussion.",
          ],
        },
        {
          h: "Le relier correctement à votre site",
          p: [
            "L'intégration se fait avec un simple lien au format wa.me suivi de votre numéro au format international, sans espace ni signe plus, auquel on ajoute un message prérempli. Trois règles rendent ce lien réellement efficace :",
          ],
          ul: [
            "Placer le bouton de façon permanente, visible sans faire défiler la page, y compris sur téléphone.",
            "Préremplir un message utile qui indique déjà la page d'origine ou le besoin du visiteur.",
            "Utiliser exactement le même numéro sur le site, la fiche Google Business Profile et les réseaux sociaux.",
          ],
        },
        {
          h: "Répondre vite, et le dire",
          p: [
            "La rapidité de réponse est le premier facteur de conversion sur ce canal. Annoncez un délai réaliste sur votre site, par exemple une réponse en quelques heures, et tenez-le. Un message d'absence automatique qui précise quand vous répondrez vaut mieux qu'un silence : il évite au client d'aller contacter un concurrent dans la minute.",
          ],
        },
        {
          h: "Les erreurs fréquentes",
          ul: [
            "Un numéro écrit différemment selon les pages, ce qui brouille aussi votre référencement local.",
            "Un bouton caché en bas de page, invisible sur mobile.",
            "Un message prérempli vide, qui oblige le client à rédiger lui-même.",
            "Aucun suivi : les conversations s'accumulent sans étiquettes ni relances.",
            "L'envoi de messages non sollicités, qui mène rapidement à un blocage du numéro.",
          ],
        },
        {
          h: "Mesurer l'effet",
          p: [
            "Suivez le nombre de clics sur le bouton WhatsApp dans Google Analytics, puis comparez-le au nombre de conversations réellement engagées et de clients signés. Ce simple rapport vous dit si le problème se situe dans l'attractivité du site, dans la formulation du bouton ou dans votre temps de réponse.",
            "La documentation officielle de WhatsApp Business détaille les fonctionnalités disponibles selon les pays et les types de compte.",
          ],
        },
      ],
    },
  ],
  en: [
    {
      slug: "website-cost-morocco-2026",
      title: "How much does a website cost in Morocco in 2026?",
      description:
        "A website in Morocco in 2026 is priced by page count, design customisation, features and post-launch support. Here is the full breakdown of the budget.",
      excerpt: "Website pricing in Morocco varies by project complexity. Here is what changes the final price.",
      readTime: "7 min",
      pillar: "creation",
      pillarLabel: "Website design",
      blocks: [
        {
          p: [
            "A website in Morocco in 2026 is priced by four factors: the number of pages, how custom the design is, the connected features (booking, payment, multilingual) and the support you get after launch. A five-page business website built from scratch and optimised for search sits in a completely different range from a booking platform wired to online payments. Before comparing two quotes, compare what is actually inside them.",
            "The confusion comes from the word itself. A bought template filled in over two days, a site assembled on a drag-and-drop builder, and a site developed line by line for your business are three different products at three different prices, and they do not perform the same way on Google or on a phone.",
          ],
        },
        {
          h: "What the budget is really made of",
          p: [
            "An honest quote separates strategy, design, development, content and follow-up. When those lines are melted into a single number, you cannot tell what you are paying for, and more importantly you cannot tell what is missing.",
          ],
          ul: [
            "Strategy and structure: which pages exist, which searches they target, how a visitor reaches the contact step.",
            "Design: custom layouts or an adapted template. This is the single biggest price driver.",
            "Development: responsive build, mobile performance, clean technical structure for search engines.",
            "Content: copywriting, optimised images, translation if the site is bilingual.",
            "Features: contact form, WhatsApp redirect, booking engine, online payment, client area.",
            "Recurring costs: domain name and hosting, payable every year whoever builds the site.",
          ],
        },
        {
          h: "Why the cheapest option usually costs more",
          p: [
            "A very cheap website is almost always a generic, heavy template shared with hundreds of other businesses. It loads slowly on mobile, which loses visitors before the first screen appears, and it is not built to rank for specific searches. Within months, most owners pay a second time to redo what should have been done properly once.",
            "A custom site costs more upfront and stays useful for years: it loads fast, reads well on a phone, sends enquiries straight to WhatsApp, and accepts new pages without a rebuild.",
          ],
        },
        {
          h: "Realistic timelines",
          p: [
            "A standard business website takes 2 to 4 weeks from first design to launch, provided the text and photos are ready. A larger project with booking or several languages runs 4 to 8 weeks. Search results are measured on a different clock: 3 to 6 months for Google to crawl, understand and durably rank your pages.",
            "The most common delay is never the development. It is the content. Gathering the copy, the real photos and the contact details before the project starts cuts weeks off the schedule.",
          ],
        },
        {
          h: "Questions to ask before signing",
          ul: [
            "Is the site custom-built or based on a resold template?",
            "Who owns the domain name and the code once the project is delivered?",
            "Is the copy and the basic search optimisation included, or billed separately?",
            "How long is the revision period after launch?",
            "How will results be measured: Google Analytics, Search Console, enquiry tracking?",
          ],
        },
        {
          h: "In short",
          p: [
            "The right budget is the one that matches what the site must produce. If the goal is to be found on Google and receive WhatsApp enquiries, a fast, well-written business website is enough. If the goal is to take direct bookings, the budget must include the booking engine and payment. Either way, ask for an itemised quote — it is the best protection against surprises.",
          ],
        },
      ],
    },
    {
      slug: "choose-web-agency-beni-mellal",
      title: "How to choose a web agency in Béni Mellal",
      description:
        "How to choose a web agency for a business in Béni Mellal: concrete criteria, the questions to ask, and why a fully online agency works well for local companies.",
      excerpt:
        "An online agency can effectively serve a business in Béni Mellal through direct communication, market understanding and structured follow-up after launch.",
      readTime: "6 min",
      pillar: "agency",
      pillarLabel: "Digital agency",
      blocks: [
        {
          p: [
            "To choose a web agency as a business owner in Béni Mellal, look at three things first: real live work you can open, a single contact who answers quickly, and a clear commitment about what happens after launch. Physical location ranks far below those three, because almost all of the work — scoping, design, approvals, revisions — now happens remotely.",
            "Maximum Growth is a fully online agency. We have no office in Béni Mellal: we work remotely with businesses there, as well as in Marrakech, Casablanca and abroad, with direct follow-up over WhatsApp.",
          ],
        },
        {
          h: "1. Work you can actually open",
          p: [
            "A credible portfolio is not a gallery of images; it is a list of live addresses you can open on your phone, test and time. Always ask for the links. If an agency can only show screenshots, you can judge neither mobile performance nor the real quality of the result.",
          ],
        },
        {
          h: "2. One person who answers",
          p: [
            "In many structures the person who sells the project is not the person who builds it, and details get lost in between. Working directly with the person who designs and develops your site removes that gap: decisions take a few messages instead of several days, and you always know who to talk to.",
          ],
        },
        {
          h: "3. A method explained upfront",
          p: ["Before signing, you should be able to repeat the project steps in your own words. A healthy sequence looks like this:"],
          ul: [
            "A scoping conversation about your business, your customers and your goals.",
            "A page structure and designs approved before any development starts.",
            "Development, then testing on mobile and desktop.",
            "Launch, with Google Analytics and Search Console configured on day one.",
            "Follow-up on revisions and traffic after launch.",
          ],
        },
        {
          h: "4. Search handled during the build",
          p: [
            "Search optimisation is not an add-on bolted on afterwards. It is prepared during design: one page per search intent, unique titles and descriptions, light and described images, a consistent heading structure. An agency proposing to \"do the SEO later\" will sell you the same work twice.",
          ],
        },
        {
          h: "5. What happens after launch",
          p: [
            "A website is not finished the day it goes live. Ask what comes next: revision window, access to analytics, ability to add pages, responsiveness when something breaks. Those months decide whether the site brings customers or sits still.",
          ],
        },
        {
          h: "Warning signs",
          ul: [
            "A guaranteed \"first place on Google\" — nobody can guarantee that.",
            "A one-line quote with no breakdown of deliverables.",
            "No links to sites that are actually live.",
            "Refusing to transfer ownership of your domain name.",
            "Deadlines promised without depending on your content being ready.",
          ],
        },
        {
          p: [
            "The final test is simple: after the first conversation, do you know exactly what you will receive, when, and what happens afterwards? If yes, the agency's postal address does not matter.",
          ],
        },
      ],
    },
    {
      slug: "website-not-visible-on-google",
      title: "Why is my website not visible on Google?",
      description:
        "A website invisible on Google almost always has one of these causes: blocked indexing, thin content, missing keywords or an incomplete Google Business Profile. Step-by-step diagnosis.",
      excerpt:
        "A website is usually invisible because of poor technical structure, missing relevant keywords or an incomplete Google Business Profile.",
      readTime: "7 min",
      pillar: "seo",
      pillarLabel: "SEO",
      blocks: [
        {
          p: [
            "If your website does not appear on Google, the cause is almost always one of four: the pages are not indexed, the content matches no real search, the technical structure stops Google from understanding the site, or the site is simply too new to rank yet. Each one can be checked in minutes with free tools.",
            "Start with the simplest test: type \"site:\" followed by your address into Google, with no space. If no page appears, your problem is indexing. If pages appear but nobody finds you, your problem is ranking.",
          ],
        },
        {
          h: "Cause 1: the site is not indexed",
          p: [
            "A site can be fully invisible because it accidentally blocks search engines: a leftover blocking rule in robots.txt, a tag asking Google not to index the page, or a site launched and never submitted. Open a free Google Search Console account, add your site and submit your sitemap. That is the first action, before any other optimisation.",
          ],
        },
        {
          h: "Cause 2: the content targets no search",
          p: [
            "Many sites describe the business in its own vocabulary while customers search in theirs. A page called \"Our services\" ranks for nothing; a page called \"Website design in Morocco\" targets an existing search. Each page should answer one precise search intent, and only one, so your own pages stop competing with each other.",
            "Check length too: a three-sentence page does not answer enough to rank. A useful service page runs at least 300 to 500 words, an in-depth article 600 to 900.",
          ],
        },
        {
          h: "Cause 3: technical structure",
          p: ["Google reads your site as a structured document. Without that structure it guesses badly. Check:"],
          ul: [
            "One main heading (H1) per page, followed by ordered subheadings.",
            "A unique title and description for every page, never duplicated.",
            "Readable, short page addresses with hyphens between words.",
            "Compressed images with descriptive alternative text.",
            "Fast mobile loading — past a few seconds, a share of visitors leaves.",
          ],
        },
        {
          h: "Cause 4: no local presence",
          p: [
            "For searches containing a city, Google favours businesses with a complete, up-to-date Google Business Profile. Create it, fill in the category, hours, phone number and website link, add real photos and ask satisfied customers for reviews. The same contact details must appear identically everywhere: website, Google profile, social media, directories.",
          ],
        },
        {
          h: "Cause 5: patience",
          p: [
            "A new site does not rank immediately, even when perfectly optimised. Expect 3 to 6 months for stable positions on competitive searches, and a few weeks on more specific, less contested phrases. Publishing useful content regularly speeds that up noticeably.",
          ],
        },
        {
          h: "Your action plan, in order",
          ul: [
            "Check indexing with the site: command, then Search Console.",
            "Fix technical blocks and submit the sitemap.",
            "Rewrite titles and descriptions around real searches.",
            "Expand thin pages and remove duplicates.",
            "Create or complete the Google Business Profile.",
            "Measure monthly with Google Analytics and Search Console.",
          ],
        },
      ],
    },
    {
      slug: "business-website-or-booking-website",
      title: "Business website or booking website: which should you choose?",
      description:
        "Business website or online booking: compare both options, their cost, their timeline and the exact point where a booking system starts paying for itself.",
      excerpt: "A business website presents your company. Booking becomes necessary when customers need to reserve or pay directly.",
      readTime: "6 min",
      pillar: "services",
      pillarLabel: "Services",
      blocks: [
        {
          p: [
            "Choose a business website if your goal is to be found, to reassure and to receive enquiries. Choose a booking website as soon as taking reservations becomes daily work that costs you time, or as soon as you lose customers outside opening hours. The question is not which is better, but which stage your business is at.",
          ],
        },
        {
          h: "What a business website does",
          p: [
            "A business website presents your activity, services, work and contact details. It usually runs five to eight pages, takes 2 to 4 weeks to build, and ranks for searches tied to your trade. Enquiries arrive by form, by phone or — in Morocco, overwhelmingly — by WhatsApp.",
            "It is the right choice for a craftsman, a practice, a restaurant, a shop or a service provider who wants credibility online without running a reservation system.",
          ],
        },
        {
          h: "What a booking website does",
          p: [
            "A booking website adds an availability calendar, automatic confirmation and often an online payment or deposit. It works while you sleep: a customer can book at midnight with nobody answering the phone. In exchange it requires more development, more testing and a higher budget.",
            "It becomes profitable once missed reservations and phone back-and-forth cost more than the system. For accommodation, wellness centres or practices with many short appointments, that threshold arrives quickly.",
          ],
        },
        {
          h: "Quick comparison",
          ul: [
            "Goal: business website = be found and contacted; booking = take money directly.",
            "Timeline: 2 to 4 weeks for a business website, 4 to 8 weeks with booking.",
            "Budget: booking adds calendar development, payment and confirmation emails.",
            "Maintenance: a business website changes little; a booking system needs regular attention.",
            "Search: identical for both — it depends on content and structure, not features.",
          ],
        },
        {
          h: "The middle path",
          p: [
            "You can start with a business website designed to accept booking later: a clean structure, service pages already in place, and a permanent WhatsApp button that opens a conversation with a pre-filled message. Most Moroccan customers prefer that channel to a classic form anyway. When volume justifies it, the booking engine is added without rebuilding the site.",
          ],
        },
        {
          h: "Decide with three questions",
          ul: [
            "How many calls or messages per week exist only to agree on a time slot?",
            "Do you lose customers in the evening, at weekends or while you are working?",
            "Are your customers willing to pay or leave a deposit online?",
          ],
        },
        {
          p: [
            "Answer yes to two of the three and online booking pays for itself. Otherwise, a fast, well-ranked business website connected to WhatsApp remains the most efficient place to start.",
          ],
        },
      ],
    },
    {
      slug: "whatsapp-business-moroccan-small-businesses",
      title: "How WhatsApp Business helps Moroccan small businesses",
      description:
        "WhatsApp Business helps Moroccan small businesses reply faster, build trust and turn website visitors into customers. A practical setup guide.",
      excerpt: "In Morocco, most customers prefer WhatsApp to email. Here is how to integrate it into your website.",
      readTime: "6 min",
      pillar: "services",
      pillarLabel: "Services",
      blocks: [
        {
          p: [
            "WhatsApp Business helps Moroccan small businesses because it removes the friction between visiting a website and starting a conversation. A classic form asks for effort, patience and trust the visitor does not have yet. A WhatsApp button opens an instant chat, in an app the customer already uses daily, with the message written for them.",
            "On the sites we build, the WhatsApp button stays visible at all times and opens a conversation already containing the visitor's name, sector and need. The business receives a qualified enquiry instead of an empty email.",
          ],
        },
        {
          h: "What WhatsApp Business adds over regular WhatsApp",
          ul: [
            "A professional profile: business name, description, hours, website address and catalogue.",
            "An automatic greeting that replies instantly, even outside working hours.",
            "Saved quick replies for recurring questions: pricing, availability, timelines.",
            "Labels to sort conversations: new contact, quote sent, confirmed customer.",
            "A product or service catalogue you can share inside the chat.",
          ],
        },
        {
          h: "Connecting it to your website properly",
          p: [
            "The integration is a simple wa.me link followed by your number in international format, with no spaces or plus sign, plus a pre-filled message. Three rules make that link actually work:",
          ],
          ul: [
            "Keep the button permanently visible, without scrolling, including on phones.",
            "Pre-fill a useful message that already states the page or the need.",
            "Use exactly the same number on the site, the Google Business Profile and social media.",
          ],
        },
        {
          h: "Reply fast, and say so",
          p: [
            "Response speed is the first conversion factor on this channel. State a realistic delay on your site — a reply within a few hours, for example — and hold to it. An automatic away message that says when you will answer beats silence: it stops the customer contacting a competitor within the minute.",
          ],
        },
        {
          h: "Common mistakes",
          ul: [
            "A number written differently across pages, which also blurs your local search signals.",
            "A button hidden at the bottom of the page, invisible on mobile.",
            "An empty pre-filled message that forces the customer to write from scratch.",
            "No follow-up: conversations pile up with no labels and no reminders.",
            "Sending unsolicited messages, which quickly gets the number blocked.",
          ],
        },
        {
          h: "Measuring the effect",
          p: [
            "Track clicks on the WhatsApp button in Google Analytics, then compare them with conversations actually started and customers signed. That simple ratio tells you whether the problem is the site, the wording of the button or your response time.",
            "The official WhatsApp Business documentation details which features are available by country and account type.",
          ],
        },
      ],
    },
  ],
};

export function getArticle(lang: Language, slug: string) {
  return articles[lang].find((a) => a.slug === slug);
}

export function articleHead(lang: Language, slug: string) {
  const article = getArticle(lang, slug);
  const other = articles[lang === "fr" ? "en" : "fr"][articles[lang].findIndex((a) => a.slug === slug)];
  const base = routes.blog[lang];
  const path = `${base}/${slug}`;
  if (!article) return { meta: [{ title: lang === "fr" ? "Article introuvable" : "Article not found" }] };
  return {
    meta: [
      { title: `${article.title} | MG` },
      { name: "description", content: article.description },
      { property: "og:title", content: article.title },
      { property: "og:description", content: article.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: path },
      ...(other ? [{ rel: "alternate", hrefLang: lang === "fr" ? "en" : "fr", href: `${routes.blog[lang === "fr" ? "en" : "fr"]}/${other.slug}` }] : []),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          inLanguage: lang,
          author: { "@type": "Person", "@id": "https://maximumgrowth.online/#mustapha-bourigue", name: "Mustapha Bourigue" },
          publisher: { "@type": "Organization", "@id": "https://maximumgrowth.online/#organization", name: "Maximum Growth" },
          mainEntityOfPage: path,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: lang === "fr" ? "Accueil" : "Home", item: routes.home[lang] },
            { "@type": "ListItem", position: 2, name: "Blog", item: base },
            { "@type": "ListItem", position: 3, name: article.title, item: path },
          ],
        }),
      },
    ],
  };
}
