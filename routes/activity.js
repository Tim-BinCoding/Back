const express = require('express');
const router = express.Router();

function daysInThisMonth (date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
  
  const linkedProjects = [
    {
      id: 0,
      occupancies: [
        {
          id: 'piloting',
          label: 'Pilotage',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'analysis_workshops',
          label: 'Analyse & Ateliers',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'documentation',
          label: 'Documentation',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'security_tests',
          label: 'Tests sécurité / Webstress',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'integration_tests',
          label: 'Tests d\'intégration',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'developments',
          label: 'Développements',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'recipe',
          label: 'Recette',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'production',
          label: 'Mise en production (MEP)',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        }
      ]
    },
    {
      id: 1,
      occupancies: [
        {
          id: 'piloting',
          label: 'Pilotage',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'analysis_workshops',
          label: 'Analyse & Ateliers',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'documentation',
          label: 'Documentation',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'security_tests',
          label: 'Tests sécurité / Webstress',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'integration_tests',
          label: 'Tests d\'intégration',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'developments',
          label: 'Développements',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'recipe',
          label: 'Recette',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'production',
          label: 'Mise en production (MEP)',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        }
      ]
    },
    {
      id: 2,
      occupancies: [
        {
          id: 'piloting',
          label: 'Pilotage',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'analysis_workshops',
          label: 'Analyse & Ateliers',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'documentation',
          label: 'Documentation',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'security_tests',
          label: 'Tests sécurité / Webstress',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'integration_tests',
          label: 'Tests d\'intégration',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'developments',
          label: 'Développements',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'recipe',
          label: 'Recette',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'production',
          label: 'Mise en production (MEP)',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        }
      ]
    },
    {
      id: 3,
      occupancies: [
        {
          id: 'piloting',
          label: 'Pilotage',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'analysis_workshops',
          label: 'Analyse & Ateliers',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'documentation',
          label: 'Documentation',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'security_tests',
          label: 'Tests sécurité / Webstress',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'integration_tests',
          label: 'Tests d\'intégration',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'developments',
          label: 'Développements',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'recipe',
          label: 'Recette',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        },
        {
          id: 'production',
          label: 'Mise en production (MEP)',
          stateType: {
            alright: {
              values: []
            },
            warning: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            },
            blocking: {
              values: [],
              relatingTo: {
                quality: false,
                technical: false,
                timeLimit: false,
                funding: false
              },
              comment: ''
            }
          },
          linkedTasks: [],
          incomplete: false
        }
      ]
    }
  ];
  const activities = [];
  const now = new Date();
  for (let i = 1; i <= daysInThisMonth(now); i++) {
    const id = (now.getFullYear() * 10000) + ((now.getMonth() + 1) * 100) + i;
    const date = new Date(now.getFullYear(), now.getMonth(), i, 0, 0, 0, 0);
    console.log('Date', date);
    const day = new Date(date).getDay();
    const validated = day % 2 === 0 && date.setHours(0, 0, 0, 0) < now.setHours(0, 0, 0, 0); // Just for test: validate a few days in the past and let others not validated
    // If the day is neither Saturday nor Sunday, create an activity and add it in the array
    if (day !== 0 && day !== 6) {
      const activity = {
        id,
        date,
        linkedProjects,
        validated,
        incomplete: false
      }
      activities.push(activity);
    }
  }
  
  router.get('activities', (req, res) => {
    res.send(activities)
  });

module.exports = router;