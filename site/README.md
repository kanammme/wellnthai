# Wellnessthaii - Site vitrine

Site vitrine pour un salon de massage bien-être thaïlandais situé à Nancy.

## 🚀 Technologies utilisées

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **React Icons**

## 🎨 Identité visuelle

- **Couleurs principales** :
  - Chocolat/noir : `#1a1410`
  - Doré élégant : `#c9a15a`
  - Crème/beige : `#f5f1ea`
  - Violet/indigo : `#4a3b8c`

- **Typographie** :
  - Titres : Playfair Display (serif élégante)
  - Corps de texte : Inter (sans-serif sobre)

## 📁 Structure du projet

```
wellnthai-site/
├── app/
│   ├── (pages)
│   │   ├── page.tsx              # Accueil
│   │   ├── prestations/
│   │   │   └── page.tsx          # Prestations & tarifs
│   │   ├── galerie/
│   │   │   └── page.tsx          # Galerie photos
│   │   ├── a-propos/
│   │   │   └── page.tsx          # À propos
│   │   └── contact/
│   │       └── page.tsx          # Contact & réservation
│   ├── layout.tsx                # Layout principal
│   └── globals.css               # Styles globaux
├── components/
│   ├── Navbar.tsx               # Navigation principale
│   ├── Footer.tsx               # Pied de page
│   ├── HeroSection.tsx          # Section hero
│   ├── PrestationsPreview.tsx  # Aperçu prestations
│   ├── AboutPreview.tsx        # Aperçu à propos
│   └── GalleryPreview.tsx      # Aperçu galerie
├── public/
│   └── images/
│       ├── interieur/           # Photos d'ambiance (1-6)
│       ├── logo/               # Logo Wellnessthaii
│       └── prestations/        # Visuels des prestations
└── ... fichiers de configuration
```

## 🛠️ Installation et lancement

### Prérequis
- Node.js 18+ et npm

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```
Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Production
```bash
npm run build
npm start
```

## 📱 Pages

### Accueil (`/`)
- Section hero avec appel à l'action
- Aperçu des prestations
- Présentation du salon
- Aperçu de la galerie

### Prestations (`/prestations`)
- Liste détaillée des massages
- Durées et tarifs
- Bienfaits de chaque prestation

### Galerie (`/galerie`)
- Photos d'ambiance du salon
- Mosaïque responsive
- Lightbox pour visualisation

### À propos (`/a-propos`)
- Présentation du salon
- Philosophie du bien-être
- Qualifications de la masseuse
- Témoignages clients

### Contact (`/contact`)
- Formulaire de contact
- Carte interactive (Google Maps)
- Horaires détaillés
- Bouton réservation Planity
- Informations d'accès

## 🎯 Fonctionnalités

- **Navigation responsive** avec menu mobile
- **Animations légères** au défilement (Framer Motion)
- **Optimisation des images** (next/image)
- **Design system cohérent** avec Tailwind
- **Accessibilité** (ARIA labels, sémantique)
- **Performance** optimisée (build Next.js)

## 📝 À venir

- Intégration de l'API Planity pour la réservation
- Formulaire de contact fonctionnel
- Système de galerie avec lightbox
- Section témoignages dynamique
- Optimisation SEO
- Blog/articles sur le bien-être

## 📄 Licence

Pièce de portfolio (démonstration) — Wellnessthaii, salon de massage bien-être thaïlandais fictif, Nancy.