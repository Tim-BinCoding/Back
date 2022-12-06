const express = require('express');
const router = express.Router();
router.get('news', (req, res) => {
    res.send([
      {
        id: 0,
        authorId: '8920c5fc-b136-4432-8e5e-1f8f3ef97d88',
        text: `Vue (prononcé /vjuː/, comme le terme anglais view) est un framework évolutif pour construire des interfaces utilisateur. À la différence des autres frameworks monolithiques, Vue a été conçu et pensé pour pouvoir être adopté de manière incrémentale. Le cœur de la bibliothèque se concentre uniquement sur la partie vue, et il est vraiment simple de l’intégrer avec d’autres bibliothèques ou projets existants. D’un autre côté, Vue est tout à fait capable de faire tourner des applications web monopages quand il est couplé avec des outils modernes et des bibliothèques complémentaires.`,
        media: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
        likes: [
          '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''
        ],
        comments: [
          {
            id: '0',
            authorId: '7a769364-7130-4e23-9426-1b97d7d8ef54',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend diam non consectetur pellentesque. Proin fringilla eros odio. Sed laoreet, nisi at posuere ultricies, felis neque fringilla mi, quis ornare ante tortor in ante. Etiam tincidunt libero vel lectus hendrerit, sed tristique justo sagittis. Fusce vitae gravida ipsum. Praesent sodales aliquet nibh quis tempus. Etiam molestie, est non accumsan congue, justo libero tempor massa, nec hendrerit mi arcu nec quam. Aenean eu nisi vel turpis porttitor vulputate nec quis leo. In hac habitasse platea dictumst. Duis eu sapien ac elit commodo vulputate. Maecenas lobortis lacus quis urna blandit faucibus. Vestibulum sodales nisi urna, auctor porta arcu pretium at. Duis varius lorem massa, vitae varius magna congue ut.',
            date: new Date(),
            likes: ['', ''],
            replies: [
              {
                id: '00',
                authorId: '8920c5fc-b136-4432-8e5e-1f8f3ef97d88',
                text: 'Cras non orci at dui sagittis cursus a vitae ex. Maecenas ac magna neque. Sed quis placerat elit. Nulla nisl turpis, pretium non velit ac, ultrices ornare magna.',
                date: new Date(),
                likes: ['', '', '', '']
              },
              {
                id: '01',
                authorId: '7a769364-7130-4e23-9426-1b97d7d8ef54',
                text: 'Suspendisse tellus mauris, fringilla non mattis vel, interdum eu ligula. Mauris nibh nibh, consequat in risus et, semper posuere magna.',
                date: new Date(),
                likes: ['']
              }
            ]
          },
          {
            id: '1',
            authorId: '60eb69f1-43f0-417c-8475-7366732b8959',
            text: 'Fusce gravida erat non diam hendrerit, quis luctus turpis accumsan. Vivamus non erat tristique, semper nisi eget, bibendum quam. Ut lorem dolor, suscipit sed pellentesque quis, convallis a tortor. Proin sed enim condimentum, dignissim quam vel, vestibulum nisi. Praesent viverra, sapien nec dignissim ultricies, ipsum quam semper tellus, eu tristique sapien mauris et magna. Nulla a felis ante. Aenean posuere mauris sem, sit amet scelerisque ex vestibulum a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed placerat urna vitae rutrum molestie. Nam vitae nibh ut neque fermentum aliquam sit amet sit amet lectus. Donec efficitur leo a laoreet auctor. Curabitur ullamcorper euismod consequat.',
            date: new Date(),
            likes: ['', ''],
            replies: [
              {
                id: '10',
                authorId: '8920c5fc-b136-4432-8e5e-1f8f3ef97d88',
                text: 'Duis suscipit ante et massa posuere, at mattis dui varius. Sed risus libero, facilisis vehicula aliquet elementum, porttitor eget odio.',
                date: new Date(),
                likes: ['', '', '', '']
              },
              {
                id: '11',
                authorId: '7a769364-7130-4e23-9426-1b97d7d8ef54',
                text: 'Proin quis erat sem. Morbi viverra arcu sed maximus luctus.',
                date: new Date(),
                likes: ['']
              }
            ]
          }
        ]
      },
      {
        id: 1,
        authorId: '7a769364-7130-4e23-9426-1b97d7d8ef54',
        text: `ColdFusion est un langage à base de balises syntaxiquement plus proche d'HTML que d'autres langages utilisés dans le même domaine comme ASP, JSP ou encore PHP. Il a été créé par les frères Allaire, Jeremy et Joseph en 1995, ce qui les a conduits à fonder la compagnie Allaire (en) la même année. Un langage très simple à utiliser dès le départ, ColdFusion permet aux développeurs d'effectuer rapidement des opérations rudimentaires comme interagir avec une base de données et afficher dynamiquement des informations sur des pages Web. C'est à cause de leur réussite du début que Microsoft, en mars 1996, rachète Aspect Software, un des concurrents directs d'Allaire et qui conduira un peu plus tard au développement d'ASP.`,
        media: 'https://lh3.googleusercontent.com/MFY1tEBkq7s70zGhJH0K44rhr8VGqzSAm6QgRzy0pVBK8C5L4j4-iKy2gUQy1YFivmI=h1024-no-tmp_adobe_coldfusion_summit_2019_apk.jpg',
        likes: [
          '', '', '', '', '', '', '', '', '', '', '', ''
        ],
        comments: []
      }
    ]);
  });
module.exports = router