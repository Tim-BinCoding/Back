const express = require('express');
const router = express.Router();

router.get('projects', (req, res) => {
    res.send([
      {
        id: 0,
        title: "Siouks",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
        startDate: "2020-07-31T10:15:00+0200",
        endDate: "2020-08-18T10:15:00+0200",
        releaseDates: {
          firstRelease: "2020-07-18T10:15:00+0200",
          secondRelease: "2020-08-18T10:15:00+0200",
          lastRelease: "2020-09-18T10:15:00+0200"
        },
        dailyWorkDuration: 7, /* hours */
        favorite: true,
        sprints: [
          {
            id: 0,
            title: 'Sprint 0',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-09-01T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 1,
            title: 'Sprint 1',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-08-18T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            title: 'Sprint 2',
            startDate: "2020-12-14T10:15:00+0200",
            endDate: "2021-01-12T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-12-14T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2021-01-17T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-12-14T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-12-14T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-12-14T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2021-01-08T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-12-14T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            title: 'Sprint 3',
            startDate: "2021-03-22T10:15:00+0200",
            endDate: "2021-04-05T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2021-03-22T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2021-03-25T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2021-03-29T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 0, /* 0 jour * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2021-04-01T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 0, /* 0 jour * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2021-04-02T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 2, /* 2/7 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2021-03-31T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 10, /* (1 jour * 7h) + 3h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2021-03-29T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 0, /* 0 jour * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 1,
        title: "SoHappy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
        startDate: "2020-07-31T10:15:00+0200",
        endDate: "2020-08-18T10:15:00+0200",
        releaseDates: {
          firstRelease: "2020-07-18T10:15:00+0200",
          secondRelease: "2020-08-18T10:15:00+0200",
          lastRelease: "2020-09-18T10:15:00+0200"
        },
        dailyWorkDuration: 7, /* hours */
        favorite: true,
        sprints: [
          {
            id: 0,
            title: 'Sprint 0',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-08-18T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 1,
            title: 'Sprint 1',
            startDate: "2020-08-19T10:15:00+0200",
            endDate: "2020-09-01T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            title: 'Sprint 2',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-08-18T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            title: 'Sprint 3',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-08-18T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "MySurvey",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
        startDate: "2020-07-31T10:15:00+0200",
        endDate: "2020-08-18T10:15:00+0200",
        releaseDates: {
          firstRelease: "2020-07-18T10:15:00+0200",
          secondRelease: "2020-08-18T10:15:00+0200",
          lastRelease: "2020-09-18T10:15:00+0200"
        },
        dailyWorkDuration: 7, /* hours */
        favorite: false,
        sprints: [
          {
            id: 0,
            title: 'Sprint 0',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-08-18T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 1,
            title: 'Sprint 1',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-08-18T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            title: 'Sprint 2',
            startDate: "2020-08-19T10:15:00+0200",
            endDate: "2020-09-01T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            title: 'Sprint 3',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-08-18T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "SoOne",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
        startDate: "2020-07-31T10:15:00+0200",
        endDate: "2020-08-18T10:15:00+0200",
        releaseDates: {
          firstRelease: "2020-07-18T10:15:00+0200",
          secondRelease: "2020-08-18T10:15:00+0200",
          lastRelease: "2020-09-18T10:15:00+0200"
        },
        dailyWorkDuration: 7, /* hours */
        favorite: true,
        sprints: [
          {
            id: 0,
            title: 'Sprint 0',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-08-18T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 1,
            title: 'Sprint 1',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-08-18T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            title: 'Sprint 2',
            startDate: "2020-07-31T10:15:00+0200",
            endDate: "2020-08-18T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            title: 'Sprint 3',
            startDate: "2020-08-19T10:15:00+0200",
            endDate: "2020-09-01T10:15:00+0200",
            duration: 77, /* 2sem + 1jour = 11jrs (ouvrés) = 11 * 7h = 77h */
            tasks: [
              {
                id: 0,
                title: "Rédaction du backlog produit",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200",
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 1,
                title: "Mise en place du socle technique",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-06T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 14, /* 2 jours * 7h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 2,
                title: "Conception des maquettes",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 35, /* 5 jours * 7h */
                timeSpent: 35, /* 5 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 3,
                title: "Implémentation de l'authentification",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 4,
                title: "Conception de l'interface de connexion",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-12T10:15:00+0200",
                duration: 7, /* 1 jour * 7h */
                timeSpent: 7, /* 1 jour * 7h */
                state: 1 /* 1 means DOING */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 5,
                title: "Mettre en place un serveur de test",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-08-11T10:15:00+0200",
                duration: 14, /* 2 jours * 7h */
                timeSpent: 18, /* (2 jours * 7h) + 5h */
                state: 2 /* 2 means DONE */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: 1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: -1 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: 0 /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              },
              {
                id: 6,
                title: "Récupération et affichage des projets",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id ultricies justo, non vehicula massa. Vestibulum vitae magna convallis, fermentum magna vitae, laoreet elit. Suspendisse ut convallis neque. Sed hendrerit vel massa sit amet eleifend. Quisque aliquet purus id libero scelerisque, eu vehicula ex finibus. Cras ac purus ac massa vehicula dictum. Nulla facilisi. Nulla vulputate rutrum lorem, vulputate maximus ipsum convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet finibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum risus ante, ac lacinia metus rhoncus eget.",
                startDate: "2020-07-31T10:15:00+0200", // TO-DO tasks have their startDate like the Sprint Start date until they have been moved to another column
                duration: 21, /* 3 jours * 7h */
                timeSpent: 21, /* 3 jours * 7h */
                state: 0 /* O means TODO */,
                deliverables: [
                  { id: 'doc', label: 'Doc', icon: 'document' },
                  { id: 'meet', label: 'Meet', icon: 'people' },
                  { id: 'report', label: 'Rapport', icon: 'newspaper' },
                  { id: 'module', label: 'Module', icon: 'cube' },
                  { id: 'commit', label: 'Commit', icon: 'git-commit' }
                ],
                feedbacks: [
                  {
                    theme: {
                      value: 'quality',
                      title: 'Qualité',
                    },
                    questions: [
                      {
                        text: 'Est-on fier du travail accompli ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Le travail est-il conforme aux normes ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'technical',
                      title: 'Technique',
                    },
                    questions: [
                      {
                        text: 'Est-ce qu\'il y a une difficulté technique ou de faisabilité ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'La technologie utilisée pour cette tâche a-t-elle été adaptée ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'timeLimit',
                      title: 'Délai',
                    },
                    questions: [
                      {
                        text: 'Est-on à l\'heure du livrable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      },
                      {
                        text: 'Cette tâche est-elle celle qui a pris plus de temps ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  },
                  {
                    theme: {
                      value: 'funding',
                      title: 'Finacement',
                    },
                    questions: [
                      {
                        text: 'Cette tâche vous parait-elle rentable ?',
                        reaction: undefined /* 1 = Positive, 0 = Neutral, -1: Negative */
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ])
  });

module.exports=router