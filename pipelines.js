const pipelines = [
  {
    team: 'oculo',
    pipelines: [
      {
        repo: 'oculo',
        slug: 'oculo',
      },
    ],
  },
  {
    team: 'screening',
    pipelines: [
      {
        repo: 'screening-service',
        slug: 'screening-service',
      },
    ],
  },
  {
    team: 'dm',
    pipelines: [
      {
        repo: 'image-processing',
        slug: 'image-processing',
      },
      {
        repo: 'patient-diagnostics',
        slug: 'patient-diagnostics',
      },
    ]
  },
]
exports.pipelines = pipelines;
